'use client';

import { useState } from 'react';

export default function Home() {
  const [laundryCarts, setLaundryCarts] = useState(0);
  const [hmmsCarts, setHmmsCarts] = useState(0);
  const [bins, setBins] = useState(0);

  const totalCarts = laundryCarts + hmmsCarts;
  const totalCartEquiv = totalCarts + bins * 0.5;

  const fitsIn = {
    pup: totalCartEquiv <= 25,
    '50ft': totalCartEquiv <= 38,
    straight: totalCartEquiv <= 20,
  };

  const recommendation = () => {
    const options = [];
    if (fitsIn.pup) options.push('Pup');
    if (fitsIn['50ft']) options.push('50 ft');
    if (fitsIn.straight) options.push('Straight Truck');
    return options.length > 0 ? options.join(', ') : 'None – exceeds all capacities';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-lg font-medium mb-1">Laundry Carts:</label>
          <input
            type="number"
            min="0"
            value={laundryCarts}
            onChange={(e) => setLaundryCarts(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter number of laundry carts"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">HMMS Carts:</label>
          <input
            type="number"
            min="0"
            value={hmmsCarts}
            onChange={(e) => setHmmsCarts(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            title="Enter number of HMMS carts"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Bins:</label>
          <input
            type="number"
            min="0"
            value={bins}
            onChange={(e) => setBins(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded"
            title="Enter number of bins"
            placeholder="Enter number of bins"
          />
        </div>
      </form>

      {/* Results */}
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Summary:</h2>
        <p>Total Carts: {totalCarts}</p>
        <p>Total Bins: {bins}</p>
        <p>Total Cart Equivalents: {totalCartEquiv}</p>

        <div className="mt-4 space-y-1">
          <p>🐶 Pup (max 25 cart equivalents): {fitsIn.pup ? '✅ Fits' : '❌ Too Full'}</p>
          <p>🚛 50 ft (max 38 cart equivalents): {fitsIn['50ft'] ? '✅ Fits' : '❌ Too Full'}</p>
          <p>🚚 Straight Truck (max 20 cart equivalents): {fitsIn.straight ? '✅ Fits' : '❌ Too Full'}</p>
        </div>

        <div className="mt-4 p-3 bg-green-100 text-green-800 font-semibold rounded">
          Recommended: {recommendation()}
        </div>
      </div>
    </div>
  );
}
