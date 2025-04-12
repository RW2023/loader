export default function Footer() {
    return (
        <footer className="w-full p-4 text-sm text-center text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
            © {new Date().getFullYear()} Built by You with ❤️ + Next.js
        </footer>
    );
}
