import React from "react";
import styles from "./Sets.module.scss";

import { separateD } from "algorithms/helpers";
import { dSet } from "types/sets";
import { initialOmega } from "algorithms/initial_sets";
import { generateD, generateOmegaMU } from "algorithms/structural_sets";
import Realm from "../Realm/Realm";

type SetsProps = {
    horizontalSets: number[][];
    verticalSets: number[][];
};

const Sets = ({ horizontalSets, verticalSets }: SetsProps) => {
    const omega10: number[] = initialOmega(horizontalSets);

    const dSets = generateD(horizontalSets, verticalSets, omega10);

    // includedD - S: dSet[]
    const includedD = separateD(dSets);

    const realmBArr = generateOmegaMU(
        omega10,
        includedD,
        horizontalSets,
        verticalSets,
    );

    console.log(realmBArr);
    return (
        <div className={styles.container}>
            <div className={styles.sets}>
                <div>
                    <h2>Горизонтальные множества:</h2>
                    {horizontalSets.map((set, i) => (
                        <h4 key={"hor" + i}>
                            E<sub>{i + 1}</sub> ={" "}
                            {set.length ? `{${set}}` : "{ \u2205 }"}
                        </h4>
                    ))}
                </div>
                <div>
                    <h2>Вертикальные множества:</h2>
                    {verticalSets.map((set, i) => (
                        <h4 key={"ver" + i}>
                            H<sub>{i + 1}</sub> ={" "}
                            {set.length ? `{${set}}` : "{ \u2205 }"}
                        </h4>
                    ))}
                </div>
            </div>

            <div className={styles.omega}>
                <div>
                    <h3>
                        {"\u{03A9}"}
                        <sup>(1,0)</sup> ={" "}
                        {omega10.length ? `{${omega10}}` : "{ \u2205 }"}
                    </h3>
                </div>
            </div>

            <div className={styles.dSets}>
                <h3>Множества D:</h3>
                <div className={styles.sets}>
                    {includedD.map((dSet: dSet, i) => (
                        <h4 key={"dSet" + i}>
                            D<p>(1,0)</p>
                            <p>
                                ({dSet.i},{dSet.j})
                            </p>
                            <div>= {`{${dSet.value}}`}</div>
                        </h4>
                    ))}
                </div>

                <Realm realmBArr={realmBArr} />
            </div>
        </div>
    );
};

export default Sets;
