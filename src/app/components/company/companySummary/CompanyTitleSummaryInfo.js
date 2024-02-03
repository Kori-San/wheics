import VerticalLine from '@/app/components/VerticalLine';

export default function CompanyTitleSummaryInfo({ name }) {
    return (
        <div className="flex flex-row items-center">
            <div className="w-6 flex justify-center items-center">
                <VerticalLine width={3} height={50} color="#475569" />
            </div>
            <div className="flex flex-col gap-1 py-1 px-2.5">
                <h1 title={name} className="text-3xl overflow-hidden text-ellipsis whitespace-nowrap">
                    <b>{name}</b>
                </h1>
            </div>
        </div>
    );
}
