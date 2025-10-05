import { useMemo } from "react";
import { properties as allProperties } from "../data/properties";
import { LOCATION_ALIASES } from "../utils/locationAliases";

/**
 * Extracts the first numeric value found in the string and returns as number.
 * Returns NaN if no number found.
 */
const extractFirstNumber = (str) => {
  if (!str) return NaN;
  // Replace commas and non-digit/dot chars, but keep sequences of digits
  // We'll capture first sequence of digits (optionally with commas/dots)
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

/**
 * Attempts to map a freeform location to a normalized value using aliases.
 * Returns normalized string (lowercase).
 */
const normalizeLocationForCompare = (raw) => {
  if (!raw) return "";
  const low = normalize(raw);
  const alias = LOCATION_ALIASES[low];
  return alias ? normalize(alias) : low;
};

const usePropertySearch = (filters = {}) => {
  const filtered = useMemo(() => {
    // clone original
    let result = Array.isArray(allProperties) ? [...allProperties] : [];

    // ---- 1) CATEGORY / PROPERTY TYPE ----
    if (filters.type && filters.type !== "Property Type") {
      const wanted = normalize(filters.type);
      result = result.filter((p) => {
        // some items use `category`, some might use `type` or `title` — prefer category
        const cat = normalize(p.category || p.type || "");
        return cat.includes(wanted);
      });
    }

    // ---- 2) LOCATION (with aliases) ----
    if (filters.location && filters.location !== "All Cities") {
      const wanted = normalizeLocationForCompare(filters.location);
      if (wanted) {
        result = result.filter((p) => {
          // normalize property location and try alias mapping for property too
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
      // Accept user input like: "N300000000", "300,000,000", "$3000000", or plain number
      const maxPrice = extractFirstNumber(filters.price);
      if (!Number.isNaN(maxPrice)) {
        result = result.filter((p) => {
          // If a property has multiple numbers (e.g. "N1,400,000 / SQM") we still extract first numeric value.
          const propNum = extractFirstNumber(p.price || "");
          if (Number.isNaN(propNum)) {
            // If property price is non-numeric (like "Price on application"), skip it (treat as not matching)
            return false;
          }

          // NOTE: This compares numeric values ignoring currency. For mixed currencies (N vs $)
          // it will compare raw numbers; if you need currency-aware comparison, we need currency normalization.
          return propNum <= maxPrice;
        });
      }
    }

    // final result
    return result;
  }, [filters]);

  return filtered;
};

export default usePropertySearch;

