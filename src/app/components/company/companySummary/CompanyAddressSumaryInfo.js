import { FaLocationDot } from 'react-icons/fa6';
import { FcLink } from 'react-icons/fc';
import { unknownString } from '@/app/data/globalWording';

export default function CompanyAddressSumaryInfo({ name, address }) {
    const query = `${address} ${name}`;
    const googleMapsURL = address && name ? `https://maps.google.com?q=${encodeURIComponent(query)}` : undefined;

    return (
        <a
            href={googleMapsURL}
            target="_blank"
            className="group transition-all ease-in-out hover:translate-x-1 duration-150 text-xl flex items-center gap-1"
        >
            { address && name ? (
                <div className="group-hover:mx-1 flex justify-center items-center w-6">
                    <div className="transition-all duration-150 ease-in-out group-hover:w-full w-0 flex justify-center items-center">
                        <FcLink size={24} />
                    </div>
                    <div className="transition-all duration-150 ease-in-out group-hover:w-0 w-full flex justify-center items-center">
                        <FaLocationDot size={20} style={{ fill: 'red' }} />
                    </div>
                </div>
            ) : (
                <div className="w-6 flex justify-center items-center">
                    <FaLocationDot size={20} style={{ fill: 'red' }} />
                </div>
            )}
            <div className="transition-all duration-300 ease-in-out text-ellipsis whitespace-nowrap overflow-hidden">
                {address ?? unknownString}
            </div>
        </a>
    );
}
