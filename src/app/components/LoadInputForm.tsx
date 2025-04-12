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
                    value={laundryCarts === 0 ? '' : laundryCarts}
                    onChange={(e) => setLaundryCarts(Number(e.target.value) || 0)}
                    className="input input-bordered w-full"
                    placeholder="Enter number of laundry carts"
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">HMMS Carts:</label>
                <input
                    type="number"
                    min="0"
                    value={hmmsCarts === 0 ? '' : hmmsCarts}
                    onChange={(e) => setHmmsCarts(Number(e.target.value) || 0)}
                    className="input input-bordered w-full"
                    placeholder="Enter number of HMMS carts"
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">Bins:</label>
                <input
                    type="number"
                    min="0"
                    value={bins === 0 ? '' : bins}
                    onChange={(e) => setBins(Number(e.target.value) || 0)}
                    className="input input-bordered w-full"
                    placeholder="Enter number of bins"
                />
            </div>
        </form>
    );
}
