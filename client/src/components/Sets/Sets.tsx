import React from 'react';
import styles from "./Sets.module.scss";
import {generateD, generateOmegaMU, separateD, sortD} from "../../algorithms/structural_sets";

type SetsProps = {
    horizontalSets: number[][],
    verticalSets: number[][]
}

const Sets = ({horizontalSets, verticalSets}: SetsProps) => {
    const omega10: Array<number | undefined> = horizontalSets.map((set, index) => {
        if (set.includes(index + 1)) return index + 1;
    }).filter(val => val !== undefined);

    const dSets = generateD(horizontalSets, verticalSets, omega10);
    sortD(dSets);

    // includedD - S: dSet[]
    var [includedD, notIncludedD] = separateD(dSets);

    var realmBArr = generateOmegaMU(omega10, includedD, horizontalSets, verticalSets);

    return (
        <div className={styles.container}>
            <div className={styles.sets}>
                <div>
                    <h2>Горизонтальные множества:</h2>
                    {horizontalSets.map((set, i) =>
                        <h4>E<sub>{i + 1}</sub> = {set.length ? `{${set}}` : "{ \u2205 }"}</h4>
                    )}
                </div>
                <div>
                    <h2>Вертикальные множества:</h2>
                    {verticalSets.map((set, i) =>
                        <h4>H<sub>{i + 1}</sub> = {set.length ? `{${set}}` : "{ \u2205 }"}</h4>
                    )}
                </div>
            </div>

            <div className={styles.omega}>
                <div>
                    <h3>{"\u{03A9}"}<sup>(1,0)</sup> = {omega10.length ? `{${omega10}}` : "{ \u2205 }"}</h3>
                </div>
            </div>

            <div className={styles.dSets}>
                <h3>Множества D:</h3>
                <div className={styles.sets}>
                    {includedD.map((dSet: any) =>
                        <h4>
                            D
                            <p>(1,0)</p>
                            <p>({dSet.i},{dSet.j})</p>
                            <div>= {`{${dSet.value}}`}
                            </div>
                        </h4>
                    )}
                </div>

                <h3>Множества D, не включающие в себя {"{i, j}"}</h3>
                <div className={styles.sets}>
                    {notIncludedD.map((dSet: any) =>
                        <h4>
                            D
                            <p>(1,0)</p>
                            <p>({dSet.i},{dSet.j})</p>
                            <div>= {dSet.value.length ? `{${dSet.value}}` : "{ \u2205 }"}
                            </div>
                        </h4>
                    )}
                </div>

                <div className={styles.possiblePairs}>
                    <h3>Множества {"\u{03A9}"} и S (возможных продолжений)</h3>
                    {realmBArr.map(realm =>
                        <div>Omega equals {realm.omega}</div>
                    )}
                </div>


            </div>
        </div>
    );
};

export default Sets;
