function isNumber(expressionToCheck) {
    /* True for numbers, false if contains an alphabetical character */
    return !isNaN(+expressionToCheck);
}

export default function VerticalLine({ width, height, color }) {
    if (!width) {
        throw new Error("Missing prop 'width' on component VerticalLine.");
    } else if (!height) {
        throw new Error("Missing prop 'height' on component VerticalLine.");
    } else if (!color) {
        throw new Error("Missing prop 'color' on component VerticalLine.");
    }

    if (isNumber(width)) {
        width = `${width}px`;
    }

    if (isNumber(height)) {
        height = `${height}px`;
    }

    return (
        <div style={{
            width,
            height,
            backgroundColor: color,
        }}
        />
    );
}
