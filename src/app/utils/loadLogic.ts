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
  const cartSlots = totalCarts * 4;
  const binSlots = bins; // 1 bin = 1 slot
  const totalSlots = cartSlots + binSlots;

  // If total slots used is divisible by 4, no sideways loading needed
  return totalSlots % 4 !== 0;
}






