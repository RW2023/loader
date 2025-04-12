'use client';

import { useState } from 'react';
import LoadInputForm from '@/app/components/LoadInputForm';
import LoadSummary from '@/app/components/LoadSummary';
import ResetButton from '@/app/components/ResetButton';

import {
  getTotalCarts,
  getTotalCartEquiv,
  getFitsIn,
  getRecommendation,
} from '@/app/utils/loadLogic';

export default function Home() {
  const [laundryCarts, setLaundryCarts] = useState(0);
  const [hmmsCarts, setHmmsCarts] = useState(0);
  const [bins, setBins] = useState(0);

  const handleReset = () => {
    setLaundryCarts(0);
    setHmmsCarts(0);
    setBins(0);
  };

  const totalCarts = getTotalCarts(laundryCarts, hmmsCarts);
  const totalCartEquiv = getTotalCartEquiv(totalCarts, bins);
  const fitsIn = getFitsIn(totalCartEquiv);
  const recommendation = getRecommendation(fitsIn);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <LoadInputForm
        laundryCarts={laundryCarts}
        hmmsCarts={hmmsCarts}
        bins={bins}
        setLaundryCarts={setLaundryCarts}
        setHmmsCarts={setHmmsCarts}
        setBins={setBins}
      />

      <LoadSummary
        totalCarts={totalCarts}
        bins={bins}
        totalCartEquiv={totalCartEquiv}
        fitsIn={fitsIn}
        recommendation={recommendation}
      />

      <ResetButton onReset={handleReset} />
    </div>
  );
}
