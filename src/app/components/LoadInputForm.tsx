'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faCartShopping, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

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
        <form className="w-full max-w-md space-y-4 bg-[var(--color-background)] text-[var(--color-foreground)]">
            <div>
                <label className="block text-lg font-medium mb-1">
                    <FontAwesomeIcon icon={faCartFlatbed} className="mr-2 text-[var(--taupe-gray)]" />
                    Laundry Carts:
                </label>
                <input
                    type="number"
                    min="0"
                    value={laundryCarts === 0 ? '' : laundryCarts}
                    onChange={(e) => setLaundryCarts(Number(e.target.value) || 0)}
                    className="input input-bordered w-full bg-[var(--ash-gray)] text-[var(--wenge)] dark:bg-[var(--wenge)] dark:text-[var(--ash-gray)] border border-[var(--taupe-gray)]"
                    placeholder="Enter number of laundry carts"
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">
                    <FontAwesomeIcon icon={faCartShopping} className="mr-2 text-[var(--taupe-gray)]" />
                    HMMS Carts:
                </label>
                <input
                    type="number"
                    min="0"
                    value={hmmsCarts === 0 ? '' : hmmsCarts}
                    onChange={(e) => setHmmsCarts(Number(e.target.value) || 0)}
                    className="input input-bordered w-full bg-[var(--ash-gray)] text-[var(--wenge)] dark:bg-[var(--wenge)] dark:text-[var(--ash-gray)] border border-[var(--taupe-gray)]"
                    placeholder="Enter number of HMMS carts"
                />
            </div>

            <div>
                <label className="block text-lg font-medium mb-1">
                    <FontAwesomeIcon icon={faBoxOpen} className="mr-2 text-[var(--taupe-gray)]" />
                    Bins:
                </label>
                <input
                    type="number"
                    min="0"
                    value={bins === 0 ? '' : bins}
                    onChange={(e) => setBins(Number(e.target.value) || 0)}
                    className="input input-bordered w-full bg-[var(--ash-gray)] text-[var(--wenge)] dark:bg-[var(--wenge)] dark:text-[var(--ash-gray)] border border-[var(--taupe-gray)]"
                    placeholder="Enter number of bins"
                />
            </div>
        </form>
    );
}
