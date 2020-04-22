export interface Rgb {
    red: number;
    green: number;
    blue: number;
}

export function computeColorRange(color1: Rgb, color2: Rgb, steps: number): Rgb[] {
    const stepFactor = 1 / (steps - 1);
    const colorRange: Rgb[] = [];

    for (let i = 0; i < steps; i++) {
        colorRange.push(
            interpolateColor(rgbToArray(color1), rgbToArray(color2), stepFactor * i)
        );
    }
    return colorRange;
}

function interpolateColor(
    color1: number[],
    color2: number[],
    factor: number
): Rgb {
    if (arguments.length < 3) {
        factor = 0.5;
    }
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return {
        red: result[0],
        green: result[1],
        blue: result[2],
    };
}

export function rgbToString({red, green, blue}: Rgb): string {
    return `rgb(${red}, ${green}, ${blue})`;
}

function rgbToArray(color: Rgb): number[] {
    return [color.red, color.green, color.blue];
}
