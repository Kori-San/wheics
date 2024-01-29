import categorieEntrepriseOptions from '../../data/select/categorieEntreprise';

export default function categoryStringToList(companyCategories) {
    const initialList = companyCategories.split(',');
    const finalList = [];

    for (let index = 0; index < initialList.length; index += 1) {
        for (
            let secondIndex = 0;
            secondIndex < categorieEntrepriseOptions.length;
            secondIndex += 1
        ) {
            if (initialList[index] === categorieEntrepriseOptions[secondIndex].value) {
                finalList.push(categorieEntrepriseOptions[secondIndex]);
                break;
            }
        }
    }

    return finalList;
}
