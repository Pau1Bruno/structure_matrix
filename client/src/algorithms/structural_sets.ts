import { separateD, sortD } from "./helpers";
import { dSet, realmB } from "types/sets";

export const generateD = (
    horArr: number[][],
    verArr: number[][],
    omega: number[],
): dSet[] => {
    const dimension = horArr.length;
    const resArr = [];
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let value: number[] = [];
            if (i !== j && omega.includes(i + 1) && omega.includes(j + 1)) {
                value = horArr[i].filter(
                    (el) => verArr[j].includes(el) && omega.includes(el),
                );
                resArr.push({ i: i + 1, j: j + 1, value: value });
            }
        }
    }
    sortD(resArr);

    return resArr;
};

export const generateOmegaMU = (
    omega10: number[],
    includedD: dSet[],
    hor: number[][],
    ver: number[][],
): realmB[] => {
    let newOmega: any;
    const newS = [...includedD];
    let stepD: any;
    const allOmegaSets = [];
    const allDSets = [];
    const realmB: realmB[] = [];
    let recordB1: number[] = [],
        recordB2: number[] = [];

    for (let i = 0; i < newS.length; i++) {
        const curRealm: any = {};
        const omegaArr: number[][] = [[...omega10]];
        const dArr = [includedD];
        const B1: number[] = [];
        let omega2: number[] = [];
        let countB1 = 0;
        stepD = newS[i];
        newOmega = [...omega10];
        // console.log("Это итерация, ", i)
        while (newOmega && newOmega.length && newS) {
            newOmega = stepD.value
                ? stepD.value.filter((value: any, i: any, array: any) => {
                      return (
                          stepD.i !== value &&
                          stepD.j !== value &&
                          newOmega.includes(array[i])
                      );
                  })
                : [];
            omegaArr.push(newOmega);
            stepD.value
                ? B1.splice(countB1, 0, stepD.i, stepD.j)
                : B1.splice(countB1, 0, stepD);

            if (!newOmega.length) break;

            //  Calculate D(1,1) equals S(1,1)
            const generatedD = generateD(hor, ver, newOmega);
            dArr.push(generatedD);

            stepD = generatedD[0] ? generatedD[0] : newOmega[0];
            countB1++;
        }
        curRealm.omega = omegaArr;
        curRealm.dSet = dArr;
        curRealm.B1 = B1;
        allOmegaSets.push(omegaArr);
        allDSets.push(dArr);

        omega2 = omega10.filter((el) => !B1.includes(el));

        let generatedD2 = generateD(hor, ver, omega2);

        const included = separateD(generatedD2);

        const B2: number[] = [];
        let countB2 = 0;

        if (!included.length) {
            B2.push(omega2[0]);
            omega2 = [];
        }

        let stepD2: dSet = included[0];
        while ((stepD2 && stepD2.value) || omega2.length) {
            if (!stepD2) {
                B2.splice(countB2, 0, omega2[0]);
                omega2.pop();
                break;
            }
            omega2 = stepD2.value.filter((value: any, i: any, array: any) => {
                return (
                    stepD2.i !== value &&
                    stepD2.j !== value &&
                    omega2.includes(array[i])
                );
            });

            B2.splice(countB2, 0, stepD2.i, stepD2.j);

            if (!omega2.length) break;

            //  Calculate D(1,1) equals S(1,1) ...
            generatedD2 = generateD(hor, ver, omega2);

            stepD2 = generatedD2[0];
            countB2++;
        }
        curRealm.B2 = B2;
        if (B1.length + B2.length > recordB1.length + recordB2.length) {
            recordB1 = B1;
            recordB2 = B2;
        }
        realmB.push(curRealm);
    }

    return realmB;
};
