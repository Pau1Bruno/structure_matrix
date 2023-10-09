import React from 'react';
import styles from "./Sets.module.scss";
import {generateD, sortD} from "../../algorithms/structural_sets";

type SetsProps = {
    horizontalSets: number[][],
    verticalSets: number[][]
}

const Sets = ({horizontalSets, verticalSets}: SetsProps) => {
    const omega10: any = horizontalSets.map((set, index) => {
        if (set.includes(index + 1)) return index + 1;
    }).filter(val => val);

    const dSets = generateD(horizontalSets, verticalSets, omega10);
    console.log(sortD(dSets));
    console.log([].length, "dlina")


    return (
        <div className={styles.container}>
            <div className={styles.sets}>
                <div>
                    <h2>Горизонтальные множества:</h2>
                    {horizontalSets.map((set, i) =>
                        <h4 key={i}>E<sub>{i + 1}</sub> = {set.length ? `{${set}}` : "{ \u2205 }"}</h4>
                    )}
                </div>
                <div>
                    <h2>Вертикальные множества:</h2>
                    {verticalSets.map((set, i) =>
                        <h4 key={i}>H<sub>{i + 1}</sub> = {set.length ? `{${set}}` : "{ \u2205 }"}</h4>
                    )}
                </div>
            </div>

            <div className={styles.omega}>
                <div>
                    <h3>{"\u{03A9}"}<sup>(1,0)</sup> = {omega10.length ? `{${omega10}}` : "{ \u2205 }"}</h3>
                </div>
            </div>
        </div>
    );
};

export default Sets;
