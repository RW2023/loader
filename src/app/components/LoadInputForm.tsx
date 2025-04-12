'use client';

type LoadInputFormProps = {
    laundryCarts: number;
    hmmsCarts: number;
    bins: number;
    setLaundryCarts: (val: number) => void;
    setHmmsCarts: (val: number) => void;
    setBins: (val: number) => void;
};

export default function LoadInputForm({
    laundryCarts,
    hmmsCarts,
    bins,
    setLaundryCarts,
    setHmmsCarts,
    setBins,
}: LoadInputFormProps) {
    return (
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
    );
}
