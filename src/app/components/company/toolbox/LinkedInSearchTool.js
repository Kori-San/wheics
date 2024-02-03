import { BsLinkedin } from 'react-icons/bs';

export default function LinkedInSearchTool({ term }) {
    return (
        <a
            className="h-16 max-w-80 bg-blue-600 rounded flex items-center justify-center group hover:bg-blue-700 transition-all duration-200 ease-in-out hover:scale-105 gap-1 flex-row"
            target="_blank"
            href={`https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(term)}`}
        >
            <div className="flex justify-center items-center transition-all ease-in-out duration-200">
                <BsLinkedin size={24} style={{ fill: 'white' }} />
            </div>
            <div className="w-0 transition-all duration-200 ease-in-out group-hover:w-[60px] overflow-hidden text-xs text-slate-200">
                Entreprise
            </div>
        </a>
    );
}
