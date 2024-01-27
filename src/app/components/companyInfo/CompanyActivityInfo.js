import { FcFactory } from 'react-icons/fc';

import nomenclatureActivitesFrancaise from '@/app/data/nomenclatureActivitesFrancaise';
import { unknownString } from '@/app/data/globalWording';

export default function CompanyActivityInfo({ NAFCode }) {
    const textDisplayed = NAFCode ? nomenclatureActivitesFrancaise[NAFCode] : unknownString;

    return (
        <div className="text-xs flex items-center gap-1 " title={textDisplayed}>
            <div className=" w-5 flex justify-center items-center">
                <FcFactory size={15} />
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                {textDisplayed}
            </div>
        </div>
    );
}
