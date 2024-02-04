import {
    FaXmark,
    FaTree,
    FaMasksTheater,
    FaStaffSnake,
    FaBuildingColumns,
    FaHands,
    FaScaleBalanced,
} from 'react-icons/fa6';
import { IoMdCheckmark, IoMdFlower, IoIosSchool } from 'react-icons/io';
import { FcLandscape, FcLike, FcBusinessman } from 'react-icons/fc';
import { ImManWoman } from 'react-icons/im';
import { MdSoupKitchen } from 'react-icons/md';
import { RiSparkling2Fill } from 'react-icons/ri';
import titleCase from '@/app/lib/titleCase';

const iconSize = 15;

const complementsDisplayName = {
    collectivite_territoriale: [
        <FcLandscape key="collectivite-icon" size={iconSize} />,
        'Collectivité territoriales',
    ],
    egapro_renseignee: [
        <ImManWoman key="egapro-icon" size={iconSize} style={{ fill: '#8c7ae6' }} />,
        'Égapro renseigné',
    ],
    est_association: [
        <FcLike key="association-icon" size={iconSize} />,
        'Association',
    ],
    est_bio: [
        <IoMdFlower key="bio-icon" size={iconSize} style={{ fill: '#f1c40f' }} />,
        "Certifié par l'agence Bio",
    ],
    est_entrepreneur_individuel: [
        <FcBusinessman key="entrepreneur-individuel-icon" size={iconSize} />,
        'Entrepreneur individuel',
    ],
    est_entrepreneur_spectacle: [
        <FaMasksTheater key="entrepreneur-spectacle-icon" size={iconSize} style={{ fill: '#f9ca24' }} />,
        'Entrepreneur spectacle',
    ],
    est_ess: [
        <MdSoupKitchen key="sociale-solidaire-icon" size={iconSize} style={{ fill: '#bdc3c7' }} />,
        'Économie sociale et solidaire',
    ],
    est_finess: [
        <FaStaffSnake key="sanitaire-social-icon" size={iconSize} style={{ fill: '#27ae60' }} />,
        'Domaine du sanitaire et social',
    ],
    est_organisme_formation: [
        <IoIosSchool key="organisme-formation-icon" size={iconSize} style={{ fill: '#1e272e' }} />,
        'Organisme de formation',
    ],
    est_qualiopi: [
        <RiSparkling2Fill key="qualiopi-icon" size={iconSize} style={{ fill: '#fdcb6e' }} />,
        'Qualiopi',
    ],
    est_rge: [
        <FaTree key="bio-icon" size={iconSize} style={{ fill: '#16a085' }} />,
        "Garante de l'environnement",
    ],
    est_service_public: [
        <FaBuildingColumns key="service-public-icon" size={iconSize} style={{ fill: '#ffffff' }} />,
        'Service public',
    ],
    est_societe_mission: [
        <FaHands key="societe-mission-icon" size={iconSize} style={{ fill: '#f39c12' }} />,
        'Sociétés à mission',
    ],
    est_uai: [
        <FaScaleBalanced key="uai-icon" size={iconSize} style={{ fill: '#ffc048' }} />,
        'Unité administrative',
    ],
};

export default function CompanyComplementCardSummaryInfo({ complement, value }) {
    return (
        <div className="select-none bg-gray-600 h-10 px-2 py-1 rounded flex flex-row items-center justify-between">
            <div className="p-1 w-10/12">
                <p className="text-gray-200 text-xs flex flex-row items-center justify-start gap-2">
                    { complementsDisplayName[complement] ?? titleCase(complement) }
                </p>
            </div>
            <div className="w-1/12 flex justify-end">
                { value ? <IoMdCheckmark size={20} style={{ fill: 'green' }} /> : <FaXmark size={18} style={{ fill: 'red' }} />}
            </div>
        </div>
    );
}
