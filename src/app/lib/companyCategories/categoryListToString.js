export default function categoryListToString(companyCategories) {
    let categories = '';
    for (let index = 0; index < companyCategories.length; index += 1) {
        categories += companyCategories[index].value;
        if (index !== companyCategories.length - 1) {
            categories += ',';
        }
    }

    return categories;
}
