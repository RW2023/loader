'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full p-2 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-3 max-w-4xl mx-auto">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/logo.png"
                        alt="Trailer Load Planner logo"
                        width={80}
                        height={80}
                        className="rounded"
                    />
                    <span className="text-xl font-bold">Trailer Load Planner</span>
                </Link>
            </div>
        </header>
    );
}
