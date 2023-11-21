import React from "react";
import Cell from "../Cell/Cell";
import styles from "./Weights.module.scss";

type WeightsProps = {
    dimension: number;
};

const Weights = ({ dimension }: WeightsProps) => {
    return (
        <div className={styles.container}>
            <h3>Задайте веса:</h3>
            <div className={styles.weights}>
                {Array(dimension)
                    .fill(1)
                    .map((_, i) => (
                        <div key={i}>
                            {`w${i + 1}`}
                            <Cell />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Weights;
