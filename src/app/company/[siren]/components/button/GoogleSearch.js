import { FcGoogle } from 'react-icons/fc';

export default function GoogleSearch({ term }) {
    const baseStyle = 'select-none bg-slate-700 text-xs flex items-center justify-center text-slate-50 gap-1 rounded-lg py-1 px-2';
    const hoverStyle = 'transition ease-in-out hover:scale-110 hover:bg-slate-800 duration-300';
    const style = `${baseStyle} ${hoverStyle}`;

    return (
        <a
            className={style}
            href={`https://www.google.com/search?q=${encodeURIComponent(term)}`}
            target="_blank"
        >
            <FcGoogle size={13} />
            Rechercher
        </a>

    );
}
