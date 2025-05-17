// components/LoadSummary.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruck,
    faTruckRampBox,
    faTruckMoving,
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { requiresSidewaysLoading } from '@/app/utils/loadLogic';

export type LoadSummaryProps = {
    totalCarts: number;
    bins: number;
    totalCartEquiv: number;
    fitsIn: {
        pup: boolean;
        '50ft': boolean;
        straight: boolean;
    };
    recommendation: string;
};

export default function LoadSummary({
    totalCarts,
    bins,
    totalCartEquiv,
    fitsIn,
    recommendation,
}: LoadSummaryProps) {
    const showSidewaysBadge = requiresSidewaysLoading(totalCarts, bins);

    const getRecommendationStyle = (rec: string) => {
        if (rec.includes('Pup')) return 'bg-blue-100 text-blue-800';
        if (rec.includes('50')) return 'bg-yellow-100 text-yellow-800';
        return 'bg-green-100 text-green-800';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card p-6 shadow-lg rounded-xl border border-[var(--taupe-gray)] bg-[var(--ash-gray)] dark:bg-[var(--wenge)] text-[var(--wenge)] dark:text-[var(--ash-gray)]"
        >
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">Load Summary</h2>
                {showSidewaysBadge && (
                    <span className="badge badge-warning text-xs">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
                        Sideways Loading Needed
                    </span>
                )}
            </div>

            <p>Total Carts: {totalCarts}</p>
            <p>Total Bins: {bins}</p>
            <p>Total Cart Equivalents: {totalCartEquiv}</p>

            <div className="mt-4 space-y-2">
                <motion.p
                    key={`pup-${fitsIn.pup}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FontAwesomeIcon icon={faTruckRampBox} className="mr-2 text-[var(--taupe-gray)]" />
                    Pup (max 25): {fitsIn.pup ? '✅ Fits' : '❌ Too Full'}
                </motion.p>
                <motion.p
                    key={`50ft-${fitsIn['50ft']}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <FontAwesomeIcon icon={faTruckMoving} className="mr-2 text-[var(--taupe-gray)]" />
                    50 ft (max 38): {fitsIn['50ft'] ? '✅ Fits' : '❌ Too Full'}
                </motion.p>
                <motion.p
                    key={`straight-${fitsIn.straight}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <FontAwesomeIcon icon={faTruck} className="mr-2 text-[var(--taupe-gray)]" />
                    Straight Truck (max 20): {fitsIn.straight ? '✅ Fits' : '❌ Too Full'}
                </motion.p>
            </div>

            <div className={`mt-4 p-3 font-semibold rounded ${getRecommendationStyle(recommendation)}`}>
                Recommended: {recommendation}
            </div>
        </motion.div>
    );
}