import { FcCommandLine } from 'react-icons/fc';
import { nordTheme } from '@uiw/react-json-view/nord';
import { TriangleSolidArrow } from '@uiw/react-json-view/triangle-solid-arrow';

import JsonView from '@uiw/react-json-view';

export default function CompanyRawData({ company }) {
    return (
        <div className="flex justify-center flex-col w-4/5 gap-3 bg-slate-600 rounded p-5">
            <h1 className="text-gray-300 flex items-center gap-1 w-full text-2xl p-3 rounded-md">
                <FcCommandLine size={50} />
                {' '}
                Raw Data
            </h1>
            <JsonView
                keyName={company.nom_complet}
                value={company}
                className="p-1 md:p-3 lg:p-5 rounded"
                style={nordTheme}
                collapsed={1}
                indentWidth={10}
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
