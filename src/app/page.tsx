// page.tsx
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

import { motion } from 'framer-motion';

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
    <div className="flex flex-col items-center justify-start min-h-screen py-10 px-4 gap-y-10 bg-[var(--color-background)] text-[var(--color-foreground)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <LoadInputForm
          laundryCarts={laundryCarts}
          hmmsCarts={hmmsCarts}
          bins={bins}
          setLaundryCarts={setLaundryCarts}
          setHmmsCarts={setHmmsCarts}
          setBins={setBins}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="card w-full max-w-md shadow-lg p-6 space-y-4 border border-[var(--taupe-gray)] bg-[var(--ash-gray)] text-[var(--wenge)] dark:bg-[var(--wenge)] dark:text-[var(--ash-gray)] rounded-xl"
      >
        <LoadSummary
          totalCarts={totalCarts}
          bins={bins}
          totalCartEquiv={totalCartEquiv}
          fitsIn={fitsIn}
          recommendation={recommendation}
        />
        <div className="flex justify-end">
          <ResetButton onReset={handleReset} />
        </div>
      </motion.div>
    </div>
  );
}