export type Neighborhood = {
  name: string;
  region: string;
  character: string;
  housing: string;
  consideration: string;
};

// Timeless, fair-housing-compliant descriptions. No market statistics, prices,
// days-on-market, or language implying preference or limitation by protected class.
export const NEIGHBORHOODS: Neighborhood[] = [
  {
    name: "University Heights",
    region: "Uptown",
    character:
      "A compact, walkable uptown neighborhood with historic housing stock and independent cafés and restaurants along Park Boulevard and Adams Avenue.",
    housing: "Craftsman bungalows, Spanish revival, condos, and smaller multi-unit buildings.",
    consideration: "Owner-occupant and income property types sit side by side; zoning and lot sizes vary block to block.",
  },
  {
    name: "Normal Heights",
    region: "Central",
    character:
      "An established residential setting organized around the walkable Adams Avenue commercial corridor.",
    housing: "Bungalows, Spanish-style homes, and small multifamily properties.",
    consideration: "A neighborhood where value-add and small-multifamily opportunities appear within an intact residential fabric.",
  },
  {
    name: "North Park",
    region: "Central",
    character:
      "One of San Diego's most walkable urban neighborhoods, with a dense commercial core and a strong mix of historic and newer housing.",
    housing: "Craftsman bungalows, Spanish revival, condos, mixed-use, and small apartment buildings.",
    consideration: "Active infill and redevelopment interest; zoning supports added density in parts of the neighborhood.",
  },
  {
    name: "Hillcrest",
    region: "Uptown",
    character:
      "An uptown hub with walkable commercial corridors and a mix of residential and mixed-use buildings.",
    housing: "Condos, apartments, historic homes, and mixed-use properties.",
    consideration: "Higher-density zoning along commercial streets; a blend of for-sale and rental product.",
  },
  {
    name: "Bankers Hill",
    region: "Uptown",
    character:
      "An elevated neighborhood between downtown and Balboa Park, known for views, historic homes, and mid-rise residences.",
    housing: "Luxury condos, historic homes, and mid-rise buildings.",
    consideration: "View orientation and HOA structure are central to evaluating condo opportunities.",
  },
  {
    name: "Mission Hills",
    region: "Uptown",
    character:
      "A leafy, established uptown neighborhood with period architecture and a quiet residential setting near walkable pockets.",
    housing: "Spanish revival, craftsman, and other period homes.",
    consideration: "Renovation and preservation considerations come with the historic housing stock.",
  },
  {
    name: "South Park",
    region: "Central",
    character:
      "A small, walkable neighborhood with craftsman homes and a compact commercial node near Balboa Park.",
    housing: "Craftsman bungalows and period cottages.",
    consideration: "Tight inventory and a preservation-minded buyer pool.",
  },
  {
    name: "Point Loma",
    region: "Coastal",
    character:
      "A coastal peninsula with bay and ocean access, ranging from modest cottages to view-oriented homes.",
    housing: "Cottages, mid-century homes, custom view homes, and condos.",
    consideration: "Coastal overlays and view corridors influence both value and improvement potential.",
  },
  {
    name: "La Jolla",
    region: "Coastal",
    character:
      "A coastal community with a village commercial core, a dramatic coastline, and a wide range of residential property types.",
    housing: "Coastal estates, condos, village cottages, and custom homes.",
    consideration: "Coastal regulations, view corridors, and condo/HOA nuances warrant careful diligence.",
  },
  {
    name: "Pacific Beach",
    region: "Coastal",
    character:
      "A coastal neighborhood blending beach cottages, condos, and multi-unit properties near the boardwalk.",
    housing: "Beach cottages, condos, and small multifamily buildings.",
    consideration: "Rental demand and coastal short-term-rental rules are worth reviewing before acquisition.",
  },
  {
    name: "Del Mar",
    region: "Coastal North County",
    character:
      "A small coastal town with a village setting, beach access, and a limited supply of housing.",
    housing: "Coastal homes, custom builds, and condos.",
    consideration: "Limited inventory paired with rigorous coastal and design review.",
  },
  {
    name: "Encinitas",
    region: "Coastal North County",
    character:
      "A coastal North County community spanning beachfront blocks and established inland residential areas.",
    housing: "Beach homes, ranch-style residences, newer subdivisions, and condos.",
    consideration: "A broad range of property types from beachfront to inland residential settings.",
  },
  {
    name: "Carlsbad",
    region: "Coastal North County",
    character:
      "A coastal North County city with beaches, lagoons, and a range of residential and master-planned areas.",
    housing: "Coastal homes, master-planned communities, condos, and newer construction.",
    consideration: "Newer-construction and resale stock; HOA and Mello-Roos factors apply in planned areas.",
  },
];
