import Image from 'next/image';

export default function PagesJaunesTool({ name, address }) {
    let pagesBlanchesURL = 'https://www.pagesjaunes.fr/pagesblanches/recherche';
    pagesBlanchesURL += `?quoiqui=${encodeURIComponent(name)}`;
    pagesBlanchesURL += `&ou=${encodeURIComponent(address)}`;
    pagesBlanchesURL += '&univers=pagesblanches';

    return (
        <a
            href={pagesBlanchesURL}
            target="_blank"
            className="min-w-36 h-16 max-w-52 group transition-all duration-200 ease-in-out hover:scale-105 hover:bg-amber-500 rounded bg-yellow-500 flex flex-row items-center justify-center gap-1"
        >
            <div className="flex justify-center items-center transition-all ease-in-out duration-200">
                <Image alt="pagesjaunes" src="/images/svg/pagesjaunes.svg" height={24} width={24} />
            </div>
            <div className="w-0 transition-all duration-200 ease-in-out group-hover:w-[79px] overflow-hidden text-xs">
                PagesJaunes
            </div>
        </a>
    );
}
