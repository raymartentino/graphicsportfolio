import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="text-center space-y-6">
        <h1 className="text-6xl">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
        <p className="text-gray-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block border border-black px-12 py-4 text-sm tracking-widest hover:bg-black hover:text-white transition-colors mt-8"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}
