'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

type ResetButtonProps = {
    onReset: () => void;
};

export default function ResetButton({ onReset }: ResetButtonProps) {
    return (
        <button
            onClick={onReset}
            className="btn btn-warning btn-sm mt-6 shadow hover:brightness-110 transition-all"
            type="button"
        >
            <FontAwesomeIcon icon={faArrowRotateLeft} className="mr-2" />
            Reset Form
        </button>
    );
}
