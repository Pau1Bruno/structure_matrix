export const horizontalSet = (matrix: number[][]) => {
    var horSet: number[][] = [];
    matrix.forEach((row, i) => {
        horSet.push([]);
        row.forEach((_, j) => {
            if (row[j] === 0) horSet[i].push(j + 1);
        });
    });

    return horSet;
}

export const verticalSet = (matrix: number[][]) => {
    var n = matrix.length;
    var verSet: number[][] = Array(n).fill(0).map(_ => [])
    matrix.forEach((row, i) => {
        row.forEach((_, j) => {
            if (row[j] === 0) verSet[j].push(i + 1);
        });
    });

    return verSet;
}

export const generateD = (horArr: number[][], verArr: number[][], omega: any) => {
    var dimension = horArr.length;
    var resArr = [];
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            var value: number[] = [];
            if (i !== j && omega.includes(i + 1) && omega.includes(j + 1)) {
                value = horArr[i]?.filter(el => verArr[j]?.includes(el) && omega.includes(el));
                resArr.push({i: i + 1, j: j + 1, value: value});
            }
        }
    }

    return resArr;
}

export const sortD = (dSets: dSet[]) => {
    return dSets.sort((a, b) => b.value?.length - a.value?.length);
}

type dSet = {
    i: number,
    j: number,
    value: number[]
}