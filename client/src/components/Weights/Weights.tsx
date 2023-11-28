import React from "react";
import Cell from "../Cell/Cell";
import styles from "./Weights.module.scss";

type WeightsProps = {
    dimension: number;
};

const Weights = ({ dimension }: WeightsProps) => {
    return (
        <div className={styles.container}>
            <h2>Задайте веса:</h2>
            <div className={styles.weights}>
                {Array(dimension)
                    .fill(1)
                    .map((_, i) => (
                        <Cell key={"cell " + i} />
                    ))}
            </div>
        </div>
    );
};

export default Weights;
