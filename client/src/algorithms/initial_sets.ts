export const horizontalSet = (matrix: number[][]) => {
    const horSet: number[][] = [];
    matrix.forEach((row, i) => {
        horSet.push([]);
        row.forEach((_, j) => {
            if (row[j] === 0) horSet[i].push(j + 1);
        });
    });

    return horSet;
};

export const verticalSet = (matrix: number[][]) => {
    const n = matrix.length;
    const verSet: number[][] = Array(n)
        .fill(0)
        .map((_) => []);
    matrix.forEach((row, i) => {
        row.forEach((_, j) => {
            if (row[j] === 0) verSet[j].push(i + 1);
        });
    });

    return verSet;
};

export const generateIm = (length: number) => {
    const Im = [];
    for (let i = 1; i < length + 1; i++) {
        Im.push(i);
    }
    
    return Im;
}

export const initialOmega = (hor: number[][]): number[] => {
    const omega: number[] = [];
    hor.map((set, index) => {
        if (set.includes(index + 1)) omega.push(index + 1);
    });

    return omega;
};
