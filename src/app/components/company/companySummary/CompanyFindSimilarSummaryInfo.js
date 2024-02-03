import { FcBinoculars, FcSearch } from 'react-icons/fc';

export default function CompanyFindSimilarSummaryInfo({
    name,
    workforceBracket,
    category,
    section,
}) {
    let query = '/?';
    query += section ? `&sections=${section}` : '';
    query += workforceBracket ? `&workforce=${workforceBracket}` : '';
    query += category ? `&categories=${category}` : '';

    return (
        <a
            href={query}
            className="group bg-gray-300 p-3 rounded-lg transition-all ease-in-out duration-150 text-xl flex items-center gap-1"
        >
            <div className="group-hover:mx-1 flex justify-center group-hover:translate-x-1 items-center w-6">
                <div className="transition-all duration-150 ease-in-out group-hover:w-full w-0 flex justify-center items-center">
                    <FcSearch size={24} />
                </div>
                <div className="transition-all duration-150 ease-in-out group-hover:w-0 w-full flex justify-center items-center">
                    <FcBinoculars size={20} />
                </div>
            </div>
            <div className="group-hover:translate-x-1 transition-all text-slate-700 duration-150 ease-in-out text-ellipsis whitespace-nowrap overflow-hidden">
                Entreprises similaire à
                {' '}
                <b>{name}</b>
            </div>
        </a>
    );
}
