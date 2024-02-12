import { FcMoneyTransfer } from 'react-icons/fc';

import { unknownString } from '@/app/data/globalWording';

export default function CompanyMoneySummaryInfo({ finances }) {
    const financesKeys = Object.keys(finances);
    const lastYear = financesKeys[0];
    const money = financesKeys.length > 0 ? finances[lastYear].ca : null;

    const ca = new Intl.NumberFormat('fr-FR', { notation: 'compact', style: 'currency', currency: 'EUR' }).format(
        money,
    );

    const textDisplayed = money ? `${ca} (en ${lastYear})` : unknownString;

    return (
        <div
            className="group transition-all ease-in-out hover:translate-x-1 duration-150 text-xl flex items-center gap-1"
        >
            <div className="group-hover:mx-1 flex justify-center items-center w-6">
                <div className="transition-all duration-150 ease-in-out w-full flex justify-center items-center">
                    <FcMoneyTransfer size={20} />
                </div>
            </div>
            <div className="transition-all duration-300 ease-in-out text-ellipsis whitespace-nowrap overflow-hidden">
                {textDisplayed}
            </div>
        </div>
    );
}
