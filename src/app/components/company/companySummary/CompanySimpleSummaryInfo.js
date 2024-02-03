import { FcAbout, FcSearch } from 'react-icons/fc';

export default function CompanySimpleSummaryInfo({ category, siren }) {
    return (
        <a
            href={`/?categories=${category}`}
            className="group transition-all ease-in-out hover:translate-x-1 duration-150 flex flex-row items-center gap-1 text-xl"
        >
            <div className="group-hover:mx-1 flex justify-center items-center w-6">
                <div className="transition-all duration-150 ease-in-out group-hover:w-full w-0 flex justify-center items-center">
                    <FcSearch size={24} />
                </div>
                <div className="transition-all duration-150 ease-in-out group-hover:w-0 w-full flex justify-center items-center">
                    <FcAbout size={25} />
                </div>
            </div>
            <div className="text-ellipsis whitespace-nowrap overflow-hidden">
                <b>{category.toUpperCase()}</b>
                {' '}
                - Siren n°
                {siren}
            </div>
        </a>
    );
}
