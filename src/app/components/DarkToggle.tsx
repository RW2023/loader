'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faLaptop } from '@fortawesome/free-solid-svg-icons';

const modes = ['light', 'dark', 'system'] as const;
type Mode = typeof modes[number];

export default function DarkToggle() {
    const { theme, systemTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent SSR hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    const realTheme = theme === 'system' ? systemTheme : theme;

    let icon = faSun;
    if (realTheme === 'dark') icon = faMoon;
    if (theme === 'system') icon = faLaptop;

    const handleClick = () => {
        const nextIndex = (modes.indexOf(theme as Mode) + 1) % modes.length;
        setTheme(modes[nextIndex]);
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Toggle theme"
            className="p-2 hover:opacity-80 transition"
        >
            <FontAwesomeIcon icon={icon} size="lg" />
        </button>
    );
}
