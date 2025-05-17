export default function Footer() {
    return (
        <footer className="w-full border-t border-[var(--taupe-gray)] bg-[var(--color-background)] text-[var(--color-foreground)] py-6 text-sm text-center">
            <div className="max-w-4xl mx-auto">
                <p className="opacity-70">
                    © {new Date().getFullYear()} Built by Ryan Wilson with <span className="text-red-500">❤️</span>
                </p>
            </div>
        </footer>
    );
  }