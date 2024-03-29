import { FcConferenceCall } from 'react-icons/fc';

import trancheEffectifSalarie from '@/app/data/trancheEffectifSalarie';
import { unknownString } from '@/app/data/globalWording';

export default function CompanyEmployeeCardInfo({ workforceBracket }) {
    const textDisplayed = workforceBracket
        ? trancheEffectifSalarie[workforceBracket]
        : unknownString;

    return (
        <div className="flex flex-row items-center text-xs gap-1">
            <div className=" w-5 flex justify-center items-center">
                <FcConferenceCall size={15} />
            </div>
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap" title={textDisplayed}>
                {textDisplayed}
            </div>
        </div>
    );
}
