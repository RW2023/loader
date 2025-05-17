'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faTruckRampBox, faTruckMoving, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { requiresSidewaysLoading } from '@/app/utils/loadLogic';

type LoadSummaryProps = {
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

    return (
        <div className="mt-8 w-full max-w-md">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-2">Summary:</h2>
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

            <div className="mt-4 space-y-1">
                <p>
                    <FontAwesomeIcon icon={faTruckRampBox} className="mr-1" />
                    Pup (max 25): {fitsIn.pup ? '✅ Fits' : '❌ Too Full'}
                </p>
                <p>
                    <FontAwesomeIcon icon={faTruckMoving} className="mr-1" />
                    50 ft (max 38): {fitsIn['50ft'] ? '✅ Fits' : '❌ Too Full'}
                </p>
                <p>
                    <FontAwesomeIcon icon={faTruck} className="mr-1" />
                    Straight Truck (max 20): {fitsIn.straight ? '✅ Fits' : '❌ Too Full'}
                </p>
            </div>

            <div className="mt-4 p-3 bg-green-100 text-green-800 font-semibold rounded">
                Recommended: {recommendation}
            </div>
        </div>
    );
}
