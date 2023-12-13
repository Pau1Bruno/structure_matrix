import React from "react";
import styles from "./Sets.module.scss";
import { separateD } from "../../algorithms/helpers";
import { generateIm, initialOmega } from "../../algorithms/initial_sets";
import { generateD, generateOmegaMU, generatePermutation } from "../../algorithms/structural_sets";

type SetsProps = {
    horizontalSets: number[][];
    verticalSets: number[][];
};

const Sets = ({ horizontalSets, verticalSets }: SetsProps) => {
    const omega10: number[] = initialOmega(horizontalSets);

    const dSets = generateD(horizontalSets, verticalSets, omega10);

    // includedD - S: dSet[]
    const includedD = separateD(dSets);
    
    const Im = generateIm(horizontalSets.length);

    const realmBArr = generateOmegaMU(
        omega10,
        includedD,
        horizontalSets,
        verticalSets,
    );
    
    const permutation = generatePermutation(
        realmBArr.records.B1,
        realmBArr.records.B2,
        Im,
        horizontalSets,
        verticalSets
    )
    
    return (
        <div className={styles.container}>
            <div className={styles.sets}>
                <div>
                    <h2>Горизонтальные множества:</h2>
                    {horizontalSets.map((set, i) => (
                        <h3 key={"hor" + i}>
                            E<sub>{i + 1}</sub> ={" "}
                            {set.length ? `{${set.join(", ")}}` : "{ \u2205 }"}
                        </h3>
                    ))}
                </div>
                <div>
                    <h2>Вертикальные множества:</h2>
                    {verticalSets.map((set, i) => (
                        <h3 key={"ver" + i}>
                            H<sub>{i + 1}</sub> ={" "}
                            {set.length ? `{${set.join(", ")}}` : "{ \u2205 }"}
                        </h3>
                    ))}
                </div>
            </div>

            <div className={styles.omega}>
                <h2>
                    {"\u{03A9}"}
                    <sup>(1,0)</sup> ={" "}
                    {omega10.length ? `{${omega10.join(", ")}}` : "{ \u2205 }"}
                </h2>
            </div>

            <div className={styles.records}>
                <h2>{`B1 = {${realmBArr.records.B1}}`}</h2>
                <h2>{`B2 = {${realmBArr.records.B2}}`}</h2>
            </div>
            
            <div className={styles.permutation}>
                <h1>Перестановка: </h1>
                <h2>{`${Im.join(" ")}`}</h2>
                <h2>{`${permutation.join(" ")}`}</h2>
            </div>
        </div>
    );
};

export default Sets;
