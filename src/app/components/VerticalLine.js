function isNumber(expressionToCheck) {
    /* True for numbers, false if contains an alphabetical character */
    return !Number.isNaN(+expressionToCheck);
}

export default function VerticalLine({ width, height, color }) {
    if (!width) {
        throw new Error("Missing prop 'width' on component VerticalLine.");
    } else if (!height) {
        throw new Error("Missing prop 'height' on component VerticalLine.");
    } else if (!color) {
        throw new Error("Missing prop 'color' on component VerticalLine.");
    }

    const finalWidth = isNumber(width) ? `${width}px` : width;
    const finalHeight = isNumber(height) ? `${height}px` : height;

    return (
        <div style={{
            width: finalWidth,
            height: finalHeight,
            backgroundColor: color,
        }}
        />
    );
}
