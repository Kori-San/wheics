export default function optionListToString(list) {
    let string = '';
    for (let index = 0; index < list.length; index += 1) {
        string += list[index].value;
        if (index !== list.length - 1) {
            string += ',';
        }
    }

    return string;
}
