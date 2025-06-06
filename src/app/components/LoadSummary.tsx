// components/LoadSummary.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruck,
    faTruckRampBox,
    faTruckMoving,
} from '@fortawesome/free-solid-svg-icons';
import { AlertTriangle } from 'lucide-react';
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
        if (rec.includes('Pup')) return 'alert-info';
        if (rec.includes('50')) return 'alert-warning';
        return 'alert-success';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card bg-base-100 p-6 shadow-lg space-y-2"
        >
            <h2 className="text-xl font-bold mb-2">Load Summary</h2>
            {showSidewaysBadge && (
                <div className="alert alert-warning py-2 text-sm flex items-center gap-2">
                    <AlertTriangle size={18} />
                    <span>Sideways loading required</span>
                </div>
            )}

            <p>Total Carts: {totalCarts}</p>
            <p>Total Bins: {bins}</p>
            <p>Total Cart Equivalents: {totalCartEquiv}</p>

            <div className="mt-4 space-y-2">
                <motion.div
                    key={`pup-${fitsIn.pup}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`alert ${fitsIn.pup ? 'alert-success' : 'alert-error'} py-2 text-sm flex items-center gap-2`}
                >
                    <FontAwesomeIcon icon={faTruckRampBox} />
                    <span>Pup (max 25): {fitsIn.pup ? 'Fits' : 'Too Full'}</span>
                </motion.div>
                <motion.div
                    key={`50ft-${fitsIn['50ft']}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={`alert ${fitsIn['50ft'] ? 'alert-success' : 'alert-error'} py-2 text-sm flex items-center gap-2`}
                >
                    <FontAwesomeIcon icon={faTruckMoving} />
                    <span>50 ft (max 38): {fitsIn['50ft'] ? 'Fits' : 'Too Full'}</span>
                </motion.div>
                <motion.div
                    key={`straight-${fitsIn.straight}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={`alert ${fitsIn.straight ? 'alert-success' : 'alert-error'} py-2 text-sm flex items-center gap-2`}
                >
                    <FontAwesomeIcon icon={faTruck} />
                    <span>Straight Truck (max 20): {fitsIn.straight ? 'Fits' : 'Too Full'}</span>
                </motion.div>
            </div>

            <div className={`mt-4 alert ${getRecommendationStyle(recommendation)} flex items-center gap-2`}>
                <FontAwesomeIcon icon={faTruck} />
                <span>Recommended: {recommendation}</span>
            </div>
        </motion.div>
    );
}