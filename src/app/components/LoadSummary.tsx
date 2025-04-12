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
    return (
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
                Recommended: {recommendation}
            </div>
        </div>
    );
}
