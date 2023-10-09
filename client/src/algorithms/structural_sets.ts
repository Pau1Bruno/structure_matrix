export const horizontalSet = (matrix: number[][]) => {
    var horSet: number[][] = [];
    matrix.forEach((row, i) => {
        horSet.push([]);
        row.forEach((_,j )=> {
            if (row[j] === 0) horSet[i].push(j + 1);
        });
    });

    console.log(horSet);
    return horSet;
}

export const verticalSet = (matrix: number[][]) => {
    var n = matrix.length;
    var verSet: number[][] = Array(n).fill(0).map(_ => [])
    matrix.forEach((row, i) => {
        row.forEach((_,j )=> {
            if (row[j] === 0) verSet[j].push(i + 1);
        });
    });

    console.log(verSet);
    return verSet;
}

