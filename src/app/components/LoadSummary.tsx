// components/LoadSummary.tsx
'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTruck,
    faDog,
    faTruckMoving,
    faTriangleExclamation,
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
        if (rec.includes('Pup')) return 'bg-[var(--ash-gray)] text-[var(--wenge)]';
        if (rec.includes('50')) return 'bg-[var(--taupe-gray)] text-white';
        return 'bg-[var(--cadet-gray)] text-black';
    };

    const getFitBadge = (fits: boolean) =>
        `badge px-3 py-1 rounded-md text-xs ${fits ? 'bg-[var(--ash-gray-2)] text-black' : 'bg-[var(--wenge)] text-white'
        }`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md p-4 space-y-4 rounded-xl shadow bg-[var(--color-background)] text-[var(--color-foreground)] border border-[var(--ash-gray-2)]"
        >
            <h2 className="text-xl font-bold mb-2">Load Summary</h2>

            {showSidewaysBadge && (
                <div className="flex items-center gap-2 p-2 rounded-md text-sm bg-[var(--taupe-gray)] text-white">
                    <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        title="Sideways Loading Required"
                    />
                    <span>Sideways loading required</span>
                </div>
            )}

            <div className="space-y-1">
                <p>
                    Total Carts: <span className="font-semibold">{totalCarts}</span>
                </p>
                <p>
                    Total Bins: <span className="font-semibold">{bins}</span>
                </p>
                <p>
                    Total Cart Equivalents:{' '}
                    <span className="font-semibold">{totalCartEquiv}</span>
                </p>
            </div>

            <div className="space-y-2 pt-2">
                <motion.div
                    key={`pup-${fitsIn.pup}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 text-sm"
                >
                    <FontAwesomeIcon icon={faDog} className="text-[var(--ash-gray-2)]" />
                    <span>
                        Pup (max 25): <span className={getFitBadge(fitsIn.pup)}>{fitsIn.pup ? 'Fits' : 'Too Full'}</span>
                    </span>
                </motion.div>

                <motion.div
                    key={`50ft-${fitsIn['50ft']}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center gap-3 text-sm"
                >
                    <FontAwesomeIcon icon={faTruckMoving} className="text-[var(--taupe-gray)]" />
                    <span>
                        50 ft (max 38): <span className={getFitBadge(fitsIn['50ft'])}>{fitsIn['50ft'] ? 'Fits' : 'Too Full'}</span>
                    </span>
                </motion.div>

                <motion.div
                    key={`straight-${fitsIn.straight}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex items-center gap-3 text-sm"
                >
                    <FontAwesomeIcon icon={faTruck} className="text-[var(--wenge)]" />
                    <span>
                        Straight Truck (max 20): <span className={getFitBadge(fitsIn.straight)}>{fitsIn.straight ? 'Fits' : 'Too Full'}</span>
                    </span>
                </motion.div>
            </div>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`mt-4 p-3 rounded-md flex items-center gap-2 text-sm ${getRecommendationStyle(
                    recommendation
                )}`}
            >
                <FontAwesomeIcon icon={faTruck} title="Recommendation" />
                <span>Recommended: {recommendation}</span>
            </motion.div>
        </motion.div>
    );
}
