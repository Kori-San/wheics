import { VscJson } from 'react-icons/vsc';
import { nordTheme } from '@uiw/react-json-view/nord';
import { TriangleSolidArrow } from '@uiw/react-json-view/triangle-solid-arrow';

import JsonView from '@uiw/react-json-view';

export default function CompanyRawData({ company: companyData }) {
    return (
        <div className="flex justify-center flex-col w-4/5 gap-3 bg-gray-300 rounded p-5">
            <h1 className="flex items-center gap-1 w-full text-2xl p-3 rounded-md">
                <VscJson />
                {' '}
                Raw Data
            </h1>
            <JsonView
                keyName={companyData.nom_complet}
                value={companyData}
                className="p-5 rounded"
                style={nordTheme}
                collapsed={1}
                indentWidth={20}
                enableClipboard
                displayDataTypes={false}
                displayObjectSize={false}
                highlightUpdates={false}
                objectSortKeys={false}
                shortenTextAfterLength={1000}
            >
                <JsonView.Quote render={() => <span />} />
                <JsonView.Arrow>
                    <TriangleSolidArrow />
                </JsonView.Arrow>
                <JsonView.Colon> -&gt; </JsonView.Colon>
            </JsonView>
        </div>

    );
}
