
import GoogleSearch from '../button/GoogleSearch';
import LinkedinSearch from '../button/LinkedInSearch';

export default function CompanySummaryHeader({ name, address }) {
    return (
        <div className="flex flex-col gap-1 px-5 py-1">
            <h1 title={name} className='text-3xl overflow-hidden text-ellipsis whitespace-nowrap'>
                <b>{name}</b>
            </h1>
            <div className='flex items-center gap-2'>
                <LinkedinSearch term={name} />
                <GoogleSearch term={`${name} ${address}`} />
            </div>
        </div>
    )
}