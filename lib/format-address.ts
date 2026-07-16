/**
 * Strips the house/lot number from a raw address, leaving street name + suburb.
 * Handles: "44 Kidd Circuit Goulburn NSW", "32-34 Torkington Rd ...",
 *          "33A Hunter St ...", "Lot 125 - 25 Mullholland Pkwy ...", "Lot 8 - Fifteenth Ave ..."
 */
export function formatAddress(address: string): string {
  return address
    .replace(/^Lot\s+\d+\s*[-–]\s*\d+\s+/i, "")  // "Lot 125 - 25 ..."
    .replace(/^Lot\s+\d+\s*[-–]\s*/i, "")           // "Lot 8 - ..." / "Lot 2169 - ..."
    .replace(/^\d+[-–]?\d*[A-Za-z]?\s+/, "");        // "44 ", "32-34 ", "33A "
}
