export type FitsIn = {
  pup: boolean;
  '50ft': boolean;
  straight: boolean;
};

export function getTotalCarts(laundryCarts: number, hmmsCarts: number) {
  return laundryCarts + hmmsCarts;
}

export function getTotalCartEquiv(totalCarts: number, bins: number) {
  return totalCarts + bins * 0.5;
}

export function getFitsIn(totalCartEquiv: number): FitsIn {
  return {
    pup: totalCartEquiv <= 25,
    '50ft': totalCartEquiv <= 38,
    straight: totalCartEquiv <= 20,
  };
}

export function getRecommendation(fitsIn: FitsIn): string {
  const options = [];
  if (fitsIn.pup) options.push('Pup');
  if (fitsIn['50ft']) options.push('50 ft');
  if (fitsIn.straight) options.push('Straight Truck');

  const allFit = fitsIn.pup && fitsIn['50ft'] && fitsIn.straight;
  if (allFit) return 'Any Available';

  return options.length > 0 ? options.join(', ') : 'None – exceeds all capacities';
}

export function requiresSidewaysLoading(totalCarts: number, bins: number): boolean {
  const totalSlots = totalCarts + bins * 0.5;
  return totalSlots % 4 !== 0;
  // Needs to be a multiple of 4 and whole number to be evenly distributed
  return totalSlots % 4 !== 0;
}







