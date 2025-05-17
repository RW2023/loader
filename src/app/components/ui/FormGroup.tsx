// components/ui/FormGroup.tsx
'use client';

import { ReactNode } from 'react';

type FormGroupProps = {
    icon: ReactNode;
    label: string;
    children: ReactNode;
};

export default function FormGroup({ icon, label, children }: FormGroupProps) {
    return (
        <div className="space-y-1">
            <label className="block text-lg font-medium flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="flex items-center gap-2">
                    {icon}
                    {label}
                </span>
            </label>
            {children}
        </div>
    );
} 
