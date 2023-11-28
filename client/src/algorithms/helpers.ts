import { dSet } from "../types/sets";

export const sortD = (dSets: dSet[]) => {
    return dSets.sort((a, b) => b.value.length - a.value.length);
};

export const separateD = (sortedDSets: dSet[]): dSet[] => {
    return sortedDSets.filter(
        (dSet) => dSet.value.includes(dSet.i) && dSet.value.includes(dSet.j),
    );
};
