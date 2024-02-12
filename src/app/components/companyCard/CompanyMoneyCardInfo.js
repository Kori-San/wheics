import { FcMoneyTransfer } from 'react-icons/fc';
import { unknownString } from '@/app/data/globalWording';

export default function CompanyMoneyCardInfo({ finances }) {
    const financesKeys = Object.keys(finances);
    const lastYear = financesKeys[0];
    const money = financesKeys.length > 0 ? finances[lastYear].ca : null;

    const ca = new Intl.NumberFormat('fr-FR', { notation: 'compact', style: 'currency', currency: 'EUR' }).format(
        money,
    );

    const textDisplayed = money ? `${ca} (en ${lastYear})` : unknownString;

    return (
        <div className="text-xs flex items-center gap-1 " title={textDisplayed}>
            <div className=" w-5 flex justify-center items-center">
                <FcMoneyTransfer size={15} style={{ fill: 'red' }} />
            </div>
            <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {textDisplayed}
            </div>
        </div>
    );
}
