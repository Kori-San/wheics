import { FaLinkedin } from 'react-icons/fa6';

export default function LinkedinSearch({ term }) {
    return (
        <a
            className="bg-blue-500 text-xs flex items-center justify-center text-slate-50 gap-1 rounded-md px-2 py-1"
            href={`https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(term)}`}
            target="_blank"
        >
            <FaLinkedin />
            Rechercher
        </a>
    );
}
