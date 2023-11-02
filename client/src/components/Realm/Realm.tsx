import React from 'react';
import {dSet, realmB} from "../../algorithms/structural_sets";
import styles from "./Realm.module.scss";

type RealmProps = {
    realmBArr: realmB[]
}

const Realm = ({realmBArr}: RealmProps) => {
    console.log(realmBArr);

    var possiblePairs = (dSet: dSet[]) => {
        return dSet.map((set: dSet) => ` (${set.i}, ${set.j})`);
    }

    return (
        <div className={styles.realms}>
            <h3>Множества {"\u{03A9}"} и S (возможных продолжений)</h3>
            {realmBArr.map(realm =>
                <div className={styles.realm}>
                    {realm.omega.map((omega: number[], index: number) =>
                        <div className={styles.omega}>
                            <h3>omega <sup>(1, {index})</sup> = </h3>
                            <div>{omega.length ? `{${omega}}` : "{ \u2205 }"}</div>
                        </div>
                    )}

                    {realm.dSet?.map((dSet: dSet[], index: number) =>
                        <div>
                            <div>
                                <h3>D <sup>(1, {index})</sup> = </h3>
                                <div>{dSet.length ? `{${possiblePairs(dSet)}}` : "{ \u2205 }"}</div>
                            </div>
                        </div>
                    )}


                    <h3>B<sub>1</sub> equals </h3>
                    <div>{`{${realm.B}}`}</div>
                </div>
            )}
        </div>
    )
}


export default Realm;
