import { FaLinkedin } from 'react-icons/fa6';

export default function LinkedinSearch({ term }) {
    return (
        <a
            className="bg-blue-600 text-xs flex items-center justify-center text-slate-50 gap-1 rounded-lg py-1 px-2"
            href={`https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(term)}`}
            target="_blank"
        >
            <FaLinkedin size={13} />
            Rechercher
        </a>
    );
}
