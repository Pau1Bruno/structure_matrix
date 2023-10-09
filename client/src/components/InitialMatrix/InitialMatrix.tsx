import React, {useState} from 'react';
import Cell from "../Cell/Cell";
import styles from "./InitialMatrix.module.scss";

type InitialMatrixProps = {
    dimension: number,
    getInitialMatrix: (matrix: number[][]) => number[][]
}
const InitialMatrix = ({dimension, getInitialMatrix}: InitialMatrixProps) => {
    const inMatrix = Array.from({length: dimension},()=> Array.from({length: dimension}, () => 0))
    const [initialMatrix, setInitialMatrix] = useState(inMatrix)

    const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const row = Math.floor(i/dimension);
        const copy = [...initialMatrix];
        initialMatrix[row][i % dimension] = +e.target.value
        setInitialMatrix(copy);
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        getInitialMatrix(initialMatrix);
    }

    return (
        <div className={styles.container}>
            <h3>Задайте структурную матрицу исходной системы:</h3>
            <div
                style={{
                    gridTemplateRows: `repeat(${dimension}, 50px)`,
                    gridTemplateColumns: `repeat(${dimension}, 50px`
                }}
                className={styles.matrix}
            >
                {Array(dimension * dimension).fill(1).map((_, i) =>
                    <Cell key={i} onChange={(e) => changeInputHandler(e, i)}/>
                )}
            </div>
            <button onClick={handleClick}>Начать подсчет</button>
        </div>
    );
};

export default InitialMatrix;
