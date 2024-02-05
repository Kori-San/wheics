import { IoIosInformationCircleOutline } from 'react-icons/io';

export default function CompanyLastUpdateSummaryInfo({ date }) {
    const lastUpdate = new Date(date);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const displayedDate = lastUpdate.toLocaleDateString(undefined, options);

    return (
        <div className="w-full flex flex-row items-center justify-end">
            <div className="select-none w-fit group rounded-full py-1 px-3 gap-1 flex flex-row items-center bg-sky-700">
                <p className="gap-1 transition-all ease-in-out duration-300 w-0 overflow-hidden whitespace-nowrap group-hover:w-[345px] text-ellipsis text-white text-xs flex items-center justify-center">
                    Mise à jour le
                    {' '}
                    <i>{displayedDate}</i>
                    {' '}
                    <b>(Toolbox exclue)</b>
                </p>
                <IoIosInformationCircleOutline size={20} fill="#ffffff" />
            </div>
        </div>
    );
}
