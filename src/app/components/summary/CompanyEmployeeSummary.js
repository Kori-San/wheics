import { FcConferenceCall } from 'react-icons/fc';

import { trancheEffectifSalarie } from '@/app/data/trancheEffectifSalarie';
import { unknownString, unknownDate } from '@/app/data/globalWording';

export default function CompanyEmployeeSummary({ workforceBracket, year }) {
    const textDisplayed = workforceBracket
        ? `${trancheEffectifSalarie[workforceBracket]} (${year ?? unknownDate})`
        : unknownString;

    return (
        <div className="transition ease-in-out hover:translate-x-1 duration-300 flex flex-row items-center text-xl gap-1">
            <div className=" w-6 flex justify-center items-center">
                <FcConferenceCall size={20} />
            </div>
            <div className="text-ellipsis whitespace-nowrap overflow-hidden">
                {textDisplayed}
            </div>
        </div>
    );
}
