'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartFlatbed,
    faCartShopping,
    faBoxOpen,
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
        <form className="card bg-base-100 p-4 shadow space-y-4 w-full max-w-md">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faCartFlatbed}
                            className="text-[var(--taupe-gray)]"
                        />
                        Laundry Carts
                    </span>
                </label>
                <input
                    type="number"
                    min="0"
                    value={laundryCarts === 0 ? '' : laundryCarts}
                    onChange={(e) =>
                        setLaundryCarts(Number(e.target.value) || 0)
                    }
                    className="input input-bordered"
                    placeholder="0"
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="text-[var(--taupe-gray)]"
                        />
                        HMMS Carts
                    </span>
                </label>
                <input
                    type="number"
                    min="0"
                    value={hmmsCarts === 0 ? '' : hmmsCarts}
                    onChange={(e) =>
                        setHmmsCarts(Number(e.target.value) || 0)
                    }
                    className="input input-bordered"
                    placeholder="0"
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faBoxOpen}
                            className="text-[var(--taupe-gray)]"
                        />
                        Bins
                    </span>
                </label>
                <input
                    type="number"
                    min="0"
                    value={bins === 0 ? '' : bins}
                    onChange={(e) => setBins(Number(e.target.value) || 0)}
                    className="input input-bordered"
                    placeholder="0"
                />
            </div>
        </form>
    );
}
