import { FaLinkedin } from 'react-icons/fa6';

export default function LinkedinSearch({ term }) {
    const baseStyle = 'select-none bg-blue-600 text-xs flex items-center justify-center text-slate-50 gap-1 rounded-lg py-1 px-2';
    const hoverStyle = 'transition duration-300 ease-in-out hover:bg-blue-900 hover:scale-110';
    const style = `${baseStyle} ${hoverStyle}`;

    return (
        <a
            className={style}
            href={`https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(term)}`}
            target="_blank"
        >
            <FaLinkedin size={13} />
            Rechercher
        </a>
    );
}
