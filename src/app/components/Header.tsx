'use client';

import Image from 'next/image';
import Link from 'next/link';

import DarkToggle from './DarkToggle';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full p-2 border-b border-[var(--taupe-gray)] bg-[var(--color-background)] text-[var(--color-foreground)] shadow-sm">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/logo.png"
                        alt="Trailer Load Planner logo"
                        width={48}
                        height={48}
                        className="rounded"
                    />
                    <span className="text-xl font-bold">Trailer Load Planner</span>
                </Link>
                <DarkToggle />
            </div>
        </header>
    );
}
