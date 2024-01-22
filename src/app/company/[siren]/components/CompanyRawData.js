import { VscJson } from 'react-icons/vsc';

export default function CompanyRawData({ company: companyData }) {
    return (
        <div className="flex justify-center flex-col w-4/5 gap-3 bg-gray-400 rounded p-5">
            <h1 className="flex items-center gap-1 w-full text-2xl p-3 rounded-md">
                <VscJson />
                {' '}
                Raw Data
            </h1>
            <pre className="bg-gray-300 p-3 rounded">
                {JSON.stringify(companyData, null, 4).replace('["]/g', '')}
            </pre>
        </div>

    );
}
