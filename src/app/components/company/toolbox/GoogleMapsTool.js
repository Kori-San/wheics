import { FaLocationDot } from 'react-icons/fa6';

export default function GoogleMapsTool({ name, address }) {
    const query = `${address} ${name}`;
    const googleMapsURL = address && name ? `https://maps.google.com?q=${encodeURIComponent(query)}` : undefined;

    return (
        <a
            className="h-16 max-w-80 bg-slate-400 rounded flex items-center justify-center group hover:bg-slate-900 transition-all duration-200 ease-in-out hover:scale-105 gap-1 flex-row"
            target="_blank"
            href={googleMapsURL}
        >
            <div className="flex justify-center items-center transition-all ease-in-out duration-200">
                <FaLocationDot size={24} style={{ fill: 'red' }} />
            </div>
            <div className="w-0 transition-all duration-200 ease-in-out group-hover:w-[32px] overflow-hidden text-xs text-slate-100">
                Maps
            </div>
        </a>
    );
}
