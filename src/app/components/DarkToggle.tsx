'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun as SunIcon, Moon as MoonIcon, Laptop as SystemIcon } from 'lucide-react';

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

    let Icon = realTheme === 'dark' ? MoonIcon : SunIcon;
    if (theme === 'system') Icon = SystemIcon;

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
            <Icon size={20} />
        </button>
    );
}
