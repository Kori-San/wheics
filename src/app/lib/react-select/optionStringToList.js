export default function optionStringToList(string, optionList) {
    const initialList = string.split(',');
    const finalList = [];

    for (let index = 0; index < initialList.length; index += 1) {
        for (
            let secondIndex = 0;
            secondIndex < optionList.length;
            secondIndex += 1
        ) {
            if (initialList[index] === optionList[secondIndex].value) {
                finalList.push(optionList[secondIndex]);
                break;
            }
        }
    }

    return finalList;
}
