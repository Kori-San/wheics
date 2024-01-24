import { FaLocationDot } from 'react-icons/fa6';
import { unknownString } from '@/app/data/globalWording';

export default function CompanyAddressInfo({ address }) {
    const textDisplayed = address || unknownString;

    return (
        <div className="text-xs flex items-center gap-1 " title={textDisplayed}>
            <div className=" w-5 flex justify-center items-center">
                <FaLocationDot size={15} style={{ fill: 'red' }} />
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                {textDisplayed}
            </div>
        </div>
    );
}
