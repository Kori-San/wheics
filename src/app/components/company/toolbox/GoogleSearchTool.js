import { FcGoogle } from 'react-icons/fc';

export default function GoogleSearchTool({ term }) {
    return (
        <a
            className="w-36 h-16 bg-slate-600 rounded flex items-center justify-center group hover:bg-slate-700 transition-all duration-200 ease-in-out hover:scale-105 gap-1 flex-row"
            target="_blank"
            href={`https://www.google.com/search?q=${encodeURIComponent(term)}`}
        >
            <div className="flex justify-center items-center transition-all ease-in-out duration-200">
                <FcGoogle size={24} />
            </div>
            <div className="w-0 transition-all duration-200 ease-in-out group-hover:w-[75px] overflow-hidden text-xs text-slate-200">
                Rechercher
            </div>
        </a>
    );
}
