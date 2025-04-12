'use client';

type ResetButtonProps = {
    onReset: () => void;
};

export default function ResetButton({ onReset }: ResetButtonProps) {
    return (
        <button
            onClick={onReset}
            className="btn btn-warning btn-sm mt-6 shadow hover:brightness-110 transition-all"
        >
            🔄 Reset Form
        </button>
    );
}
