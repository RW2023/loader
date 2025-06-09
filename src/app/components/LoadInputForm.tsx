'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBarsStaggered,
    faKitMedical,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

export type LoadInputFormProps = {
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
        <form className="w-full max-w-md p-4 space-y-4 rounded-xl shadow bg-[var(--color-background)] text-[var(--color-foreground)] border border-[var(--ash-gray-2)]">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg flex items-center gap-2 text-[var(--color-foreground)]">
                        <FontAwesomeIcon
                            icon={faBarsStaggered}
                            className="text-[var(--taupe-gray)]"
                            title="Laundry Carts"
                        />
                        Laundry Carts
                    </span>
                </label>
                <input
                    type="number"
                    min="0"
                    value={laundryCarts === 0 ? '' : laundryCarts}
                    onChange={(e) => setLaundryCarts(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-[var(--ash-gray-2)] rounded-md bg-transparent text-[var(--color-foreground)] placeholder-[var(--cadet-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--taupe-gray)]"
                    placeholder="0"
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg flex items-center gap-2 text-[var(--color-foreground)]">
                        <FontAwesomeIcon
                            icon={faKitMedical}
                            className="text-[var(--taupe-gray)]"
                            title="HMMS Carts"
                        />
                        HMMS Carts
                    </span>
                </label>
                <input
                    type="number"
                    min="0"
                    value={hmmsCarts === 0 ? '' : hmmsCarts}
                    onChange={(e) => setHmmsCarts(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-[var(--ash-gray-2)] rounded-md bg-transparent text-[var(--color-foreground)] placeholder-[var(--cadet-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--taupe-gray)]"
                    placeholder="0"
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg flex items-center gap-2 text-[var(--color-foreground)]">
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            className="text-[var(--taupe-gray)]"
                            title="Bins"
                        />
                        Bins
                    </span>
                </label>
                <input
                    type="number"
                    min="0"
                    value={bins === 0 ? '' : bins}
                    onChange={(e) => setBins(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-[var(--ash-gray-2)] rounded-md bg-transparent text-[var(--color-foreground)] placeholder-[var(--cadet-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--taupe-gray)]"
                    placeholder="0"
                />
            </div>
        </form>
    );
}
