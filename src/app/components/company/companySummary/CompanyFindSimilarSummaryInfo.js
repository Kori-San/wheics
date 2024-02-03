import { FcBinoculars, FcLink } from 'react-icons/fc';

export default function CompanyFindSimilarSummaryInfo({
    name,
    workforceBracket,
    category,
    section,
}) {
    return (
        <a
            href={`/?sections=${section}&workforce=${workforceBracket}&categories=${category}`}
            className="group bg-gray-300 hover:bg-slate-700 p-3 rounded-lg transition-all ease-in-out hover:translate-x-1 duration-150 text-xl flex items-center gap-1"
        >
            <div className="group-hover:mx-1 flex justify-center items-center w-6">
                <div className="transition-all duration-150 ease-in-out group-hover:w-full w-0 flex justify-center items-center">
                    <FcLink size={24} />
                </div>
                <div className="transition-all duration-150 ease-in-out group-hover:w-0 w-full flex justify-center items-center">
                    <FcBinoculars size={20} />
                </div>
            </div>
            <div className="transition-all text-slate-700 group-hover:text-gray-300 duration-300 ease-in-out text-ellipsis whitespace-nowrap overflow-hidden">
                Rechercher une entreprise similaire à
                {' '}
                <b>{name}</b>
            </div>
        </a>
    );
}
