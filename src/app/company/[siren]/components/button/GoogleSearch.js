import { FcGoogle } from "react-icons/fc";

export default function GoogleSearch({ term }) {
    return (
        <a
            className=" bg-slate-700 text-xs flex items-center justify-center text-slate-50 gap-1 rounded-lg py-1 px-2"
            href={`https://www.google.com/search?q=${encodeURIComponent(term)}`}
            target="_blank"
        >
            <FcGoogle size={13}/>
            Rechercher
        </a>

    );
}
