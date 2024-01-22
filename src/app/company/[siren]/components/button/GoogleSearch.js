import { FaGoogle } from 'react-icons/fa6';

export default function GoogleSearch({ term }) {
    return (
        <a
            className=" bg-red-900 text-xs flex items-center justify-center text-slate-50 gap-1 rounded-md px-2 py-1"
            href={`https://www.google.com/search?q=${encodeURIComponent(term)}`}
            target="_blank"
        >
            <FaGoogle />
            Rechercher
        </a>

    );
}
