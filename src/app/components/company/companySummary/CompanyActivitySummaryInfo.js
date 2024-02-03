import { FcFactory, FcLink } from 'react-icons/fc';

import nomenclatureActivitesFrancaise from '@/app/data/nomenclatureActivitesFrancaise';
import { unknownString } from '@/app/data/globalWording';

export default function CompanyActivitySummaryInfo({ nafCode, section }) {
    const textDisplayed = nafCode ? nomenclatureActivitesFrancaise[nafCode] : unknownString;

    return (
        <a
            href={`/?sections=${section}`}
            target="_blank"
            className="group transition-all ease-in-out hover:translate-x-1 duration-150 text-xl flex items-center gap-1"
        >
            <div className="group-hover:mx-1 flex justify-center items-center w-6">
                <div className="transition-all duration-150 ease-in-out group-hover:w-full w-0 flex justify-center items-center">
                    <FcLink size={24} />
                </div>
                <div className="transition-all duration-150 ease-in-out group-hover:w-0 w-full flex justify-center items-center">
                    <FcFactory size={20} />
                </div>
            </div>
            <div className="transition-all duration-300 ease-in-out text-ellipsis whitespace-nowrap overflow-hidden">
                {textDisplayed}
            </div>
        </a>
    );
}
