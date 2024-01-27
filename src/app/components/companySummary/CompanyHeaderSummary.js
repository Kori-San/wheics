import VerticalLine from '@/app/components/VerticalLine';
import GoogleSearch from '../button/GoogleSearch';
import LinkedinSearch from '../button/LinkedInSearch';

export default function CompanySummaryHeader({ name, address }) {
    return (
        <div className="flex flex-row items-center hover:translate-x-1.5 transition duration-300 ease-in-out">
            <div className="w-6 flex justify-center items-center">
                <VerticalLine width={3} height={75} color="#475569" />
            </div>
            <div className="flex flex-col gap-1 py-1 px-2.5 text-ellipsis whitespace-nowrap overflow-hidden">
                <h1 title={name} className="text-3xl overflow-hidden text-ellipsis whitespace-nowrap">
                    <b>{name}</b>
                </h1>
                <div className="flex items-center gap-2">
                    <LinkedinSearch term={name} />
                    <GoogleSearch term={`${name} ${address}`} />
                </div>
            </div>
        </div>
    );
}
