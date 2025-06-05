'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

type ResetButtonProps = {
    onReset: () => void;
};

export default function ResetButton({ onReset }: ResetButtonProps) {
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="btn btn-warning btn-sm mt-6 shadow"
            type="button"
        >
            <FontAwesomeIcon icon={faArrowRotateLeft} className="mr-2" />
            Reset Form
        </motion.button>
    );
}
