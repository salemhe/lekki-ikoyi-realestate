// ✅ Import residential property images
import fullyDetachedImg from '../assets/images/fully-detached.png';
import semiDetachedImg from '../assets/images/semi_detached.jpg';
import apartmentImg from '../assets/images/apartment.jpg';
import terracedDuplexImg from '../assets/images/terrace.jpg';

// ✅ Import city images
import lagosIslandImg from '../assets/images/ikoyi.jpg';
import ibadanImg from '../assets/images/Lekki.jpg';
// import propertyOne from '../assets/images/prop1.jpeg';
// import propertyTwo from '../assets/images/prop2.jpeg';
// import propertyThree from '../assets/images/prop3.jpeg';
// import propertyFour from '../assets/images/prop4.jpeg';
// import propertyFive from '../assets/images/prop5.jpeg';
// import propertySix from '../assets/images/prop6.jpeg';

// ✅ Import new images for popular areas
import bananaImg from '../assets/images/bannana-island.jpg';
import ikoyiImg from '../assets/images/ikoyi.jpg';
import ikotaLekkiImg from '../assets/images/lekki2.jpg';
import lekkiPhase1Img from '../assets/images/lekki.jpg';


export const residentialProperties = [
  {
    id: 1,
    title: 'Fully Detached Duplex',
    propertiesCount: '27 Properties',
    image: fullyDetachedImg,
  },
  {
    id: 2,
    title: 'Semi Detached Duplex',
    propertiesCount: '20 Properties',
    image: semiDetachedImg,
  },
  {
    id: 3,
    title: 'Apartment',
    propertiesCount: '20 Properties',
    image: apartmentImg,
  },
  {
    id: 4,
    title: 'Terraced Duplex',
    propertiesCount: '15 Properties',
    image: terracedDuplexImg,
  },
];

export const cityProperties = [
  {
    id: 1,
    title: 'Ikoyi',
    propertiesCount: '17 Properties',
    image: lagosIslandImg,
  },
  {
    id: 2,
    title: 'Lekki',
    propertiesCount: '3 Properties',
    image: ibadanImg,
  },
];

export const featuredProperties = [
  {
    id: 1,
    // image: propertyOne,
    title: '2-Bed Luxury Apartment With Modern Finishes In Ikoyi, Lagos',
    price: '₦120,000,000',
    beds: 2,
    baths: 2.5,
    status: ['FOR SALE', 'NEW LISTING'],
  },
  {
    id: 2,
    // image: propertyTwo,
    title: 'Ikoyi Luxury Apartment - Stunning 5-Bed Home For Rent',
    price: 'Price Available Upon Request',
    beds: 5,
    baths: 5.5,
    status: ['FOR SALE', 'NEW LISTING', 'HOT OFFER'],
  },
  {
    id: 3,
    // image: propertyThree,
    title: 'Discover This Jaw-Dropping Smart Mansion In Lekki, Lagos',
    price: '₦1,000,000,000',
    beds: 5,
    baths: 5.5,
    status: ['FOR SALE', 'NEW LISTING', 'READY TO MOVE IN'],
  },
  {
    id: 4,
    // image: propertyFour,
    title: 'Modern 4-Bedroom Semi-Detached Home In Ajah',
    price: '₦180,000,000',
    beds: 4,
    baths: 4.5,
    status: ['FOR SALE', 'NEW LISTING', 'HOT OFFER'],
  },
  {
    id: 5,
    // image: propertyFive,
    title: 'Fully Furnished, 5-Bedroom Detached House In Oniru',
    price: '₦2,300,000,000',
    beds: 5,
    baths: 5.5,
    status: ['FOR SALE', 'NEW LISTING'],
  },
  {
    id: 6,
    // image: propertySix,
    title: 'Modern 2-Bedroom Apartments At Urban Nest, Lekki',
    price: '₦80,000,000',
    beds: 2,
    baths: 2.5,
    status: ['FOR SALE', 'NEW LISTING', 'HOT OFFER'],
  },
];

export const popularAreas = [
  {
    id: 1,
    title: 'Banana Island',
    propertiesCount: '9 Properties',
    image: bananaImg,
  },
  {
    id: 2,
    title: 'Ikoyi',
    propertiesCount: '13 Properties',
    image: ikoyiImg,
  },
  {
    id: 3,
    title: 'Ikota Lekki',
    propertiesCount: '29 Properties',
    image: ikotaLekkiImg,
  },
  {
    id: 4,
    title: 'Lekki Phase 1',
    propertiesCount: '12 Properties',
    image: lekkiPhase1Img,
  },
];



