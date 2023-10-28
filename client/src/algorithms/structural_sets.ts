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

export const generateD = (horArr: number[][], verArr: number[][], omega: Array<number | undefined>): dSet[] => {
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
    return dSets.sort((a, b) => b.value.length - a.value.length);
}

export const separateD = (sortedDSets: Array<dSet>): dSet[][] => {
    const includedSetD = sortedDSets.filter((dSet) => dSet.value.includes(dSet.i) && dSet.value.includes(dSet.j));
    const notIncludedSetD = sortedDSets.filter((dSet) => !(dSet.value.includes(dSet.i) && dSet.value.includes(dSet.j)));

    return [includedSetD, notIncludedSetD];
}

export const generateOmegaMU = (omega10: Array<number | undefined>, includedD: dSet[], hor: number[][], ver: number[][]): realmB[] => {
    var newOmega: any;
    var newS = [...includedD];
    var stepD: any;
    var allOmegaSets = [];
    var allDSets = [];
    var realmB: realmB[] = [];

    for (let i = 0; i < newS.length; i++) {
        var curRealm: any = {};
        var omegaArr: Array<Array<number | undefined>> = [omega10];
        var dArr = [includedD];
        var B: number[] = [];
        var countB = 0;
        stepD = newS[i]
        newOmega = [...omega10];
        console.log("Это итерация, ", i)
        while (newOmega && newOmega.length && newS) {
            console.log(stepD)
            newOmega = stepD.value
                ? stepD.value.filter((value: any, i: any, array: any) => {
                    return (stepD.i !== value && stepD.j !== value) &&
                        newOmega.includes(array[i])
                })
                : [];
            stepD.value
                ? B.splice(countB, 0, stepD.i, stepD.j)
                : B.splice(countB, 0, stepD);

            if (!newOmega) break;

            //  Calculate D(1,1) equals S(1,1)
            var generatedD = generateD(hor, ver, newOmega);
            sortD(generatedD);

            omegaArr.push(newOmega);
            dArr.push(generatedD);

            stepD = generatedD[0] ? generatedD[0] : newOmega[0];
            countB++;
        }
        curRealm.omega = omegaArr;
        curRealm.dSet = dArr;
        curRealm.B = B;
        allOmegaSets.push(omegaArr);
        allDSets.push(dArr);
        realmB.push(curRealm);
    }

    return realmB;
}

export type realmB = {
    B: number[] | null,
    omega: any | null,
    dSet: dSet[][] | null
}

export type dSet = {
    i: number,
    j: number,
    value: number[]
}