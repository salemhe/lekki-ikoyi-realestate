import { useMemo } from "react";
import { properties as allProperties } from "../data/properties";
import { LOCATION_ALIASES } from "../utils/locationAliases";
import { TYPE_ALIASES } from "../utils/typeAliases";

/**
 * Extracts the first numeric value found in the string and returns as number.
 * Returns NaN if no number found.
 */
const extractFirstNumber = (str) => {
  if (!str) return NaN;
  const match = str.match(/[\d,]+(\.\d+)?/);
  if (!match) return NaN;
  const numStr = match[0].replace(/,/g, "");
  const n = Number(numStr);
  return Number.isNaN(n) ? NaN : n;
};

const normalize = (text = "") => {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
};

// ---- normalize location ----
const normalizeLocationForCompare = (raw) => {
  if (!raw) return "";
  const low = normalize(raw);
  const alias = LOCATION_ALIASES[low];
  return alias ? normalize(alias) : low;
};

// ---- normalize type ----
const normalizeTypeForCompare = (raw) => {
  if (!raw) return "";
  const low = normalize(raw);
  const alias = TYPE_ALIASES[low];
  return alias ? normalize(alias) : low;
};

const usePropertySearch = (filters = {}) => {
  const filtered = useMemo(() => {
    let result = Array.isArray(allProperties) ? [...allProperties] : [];

    // ---- 1) CATEGORY / PROPERTY TYPE (with aliases) ----
    if (filters.type && filters.type !== "Property Type") {
      const wanted = normalizeTypeForCompare(filters.type);
      if (wanted) {
        result = result.filter((p) => {
          const cat = normalizeTypeForCompare(p.category || p.type || "");
          return cat === wanted;
        });
      }
    }

    // ---- 2) LOCATION (with aliases) ----
    if (filters.location && filters.location !== "All Cities") {
      const wanted = normalizeLocationForCompare(filters.location);
      if (wanted) {
        result = result.filter((p) => {
          const propLocRaw = p.location || "";
          const propLoc = normalizeLocationForCompare(propLocRaw);
          return propLoc.includes(wanted);
        });
      }
    }

    // ---- 3) BEDROOMS ----
    if (filters.bedroom && filters.bedroom !== "" && filters.bedroom !== "Bedrooms") {
      const wantBeds = parseInt((filters.bedroom + "").replace(/[^0-9]/g, ""), 10);
      if (!Number.isNaN(wantBeds)) {
        result = result.filter((p) => {
          const pBeds = parseInt((p.beds ?? "").toString().replace(/[^0-9]/g, ""), 10);
          return !Number.isNaN(pBeds) && pBeds === wantBeds;
        });
      }
    }

    // ---- 4) PRICE (max price) ----
    if (filters.price && filters.price !== "") {
      const maxPrice = extractFirstNumber(filters.price);
      if (!Number.isNaN(maxPrice)) {
        result = result.filter((p) => {
          const propNum = extractFirstNumber(p.price || "");
          if (Number.isNaN(propNum)) return false;
          return propNum <= maxPrice;
        });
      }
    }

    return result;
  }, [filters]);

  return filtered;
};

export default usePropertySearch;
