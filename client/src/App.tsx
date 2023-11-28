import React, { useState } from "react";
import Header from "./components/Header/Header";
import Dimension from "./components/Dimension/Dimension";
import Weights from "./components/Weights/Weights";
import InitialMatrix from "./components/InitialMatrix/InitialMatrix";
import { horizontalSet, verticalSet } from "./algorithms/initial_sets";
import Sets from "./components/Sets/Sets";
import "./global.scss";
import styles from "./App.module.scss";

function App() {
    const [dimension, setDimension] = useState<number>(0);
    const [horSet, setHorSet] = useState<number[][]>();
    const [verSet, setVerSet] = useState<number[][]>();

    const getInitialMatrix = (matrix: number[][]) => {
        setHorSet(horizontalSet(matrix));
        setVerSet(verticalSet(matrix));
        return matrix;
    };

    if (!dimension)
        return (
            <div>
                <Header />
                <div className={styles.page}>
                    <Dimension
                        dimension={dimension}
                        setDimension={setDimension}
                    />
                    <h1 className={styles.errorDimension}>Размерность не задана</h1>
                </div>
            </div>
        );

    return (
        <div>
            <Header />
            <div className={styles.page}>
                <Dimension dimension={dimension} setDimension={setDimension} />
                <Weights dimension={dimension} />
                <InitialMatrix
                    dimension={dimension}
                    getInitialMatrix={getInitialMatrix}
                />
                {verSet && horSet && (
                    <Sets horizontalSets={horSet} verticalSets={verSet} />
                )}
            </div>
        </div>
    );
}

export default App;
