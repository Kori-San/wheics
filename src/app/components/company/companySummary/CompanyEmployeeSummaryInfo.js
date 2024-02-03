import { FcConferenceCall, FcLink } from 'react-icons/fc';

import trancheEffectifSalarie from '@/app/data/trancheEffectifSalarie';
import { unknownString, unknownDate } from '@/app/data/globalWording';

export default function CompanyEmployeeSummaryInfo({ workforceBracket, year }) {
    const textDisplayed = workforceBracket
        ? `${trancheEffectifSalarie[workforceBracket]} (${year ? `en ${year}` : unknownDate})`
        : unknownString;

    return (
        <a
            href={`/?workforce=${workforceBracket}`}
            className="group transition-all ease-in-out hover:translate-x-1 duration-150 flex flex-row items-center gap-1 text-xl"
        >
            <div className="group-hover:mx-1 flex justify-center items-center w-6">
                <div className="transition-all duration-150 ease-in-out group-hover:w-full w-0 flex justify-center items-center">
                    <FcLink size={24} />
                </div>
                <div className="transition-all duration-150 ease-in-out group-hover:w-0 w-full flex justify-center items-center">
                    <FcConferenceCall size={20} />
                </div>
            </div>
            <div className="text-ellipsis whitespace-nowrap overflow-hidden">
                {textDisplayed}
            </div>
        </a>
    );
}
