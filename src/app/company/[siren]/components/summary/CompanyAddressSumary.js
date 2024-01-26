import { FaLocationDot } from 'react-icons/fa6';
import { unknownString } from '@/app/data/globalWording';

export default function CompanyAddressSumary({ address }) {
    const googleMapsURL = address ? `https://maps.google.com?q=${encodeURIComponent(address)}` : undefined;

    return (
        <a
            href={googleMapsURL}
            target="_blank"
            className="transition ease-in-out hover:translate-x-1 duration-300 text-xl flex items-center gap-1"
        >
            <div className="w-6 flex justify-center items-center">
                <FaLocationDot size={20} style={{ fill: 'red' }} />
            </div>
            <div className="text-ellipsis whitespace-nowrap overflow-hidden">
                {address ?? unknownString}
            </div>
        </a>
    );
}
