import React, { useState } from "react";
import styles from "./Dimension.module.scss";

type DimensionProps = {
    dimension: number;
    setDimension: React.Dispatch<React.SetStateAction<number>>;
};

const Dimension = ({  setDimension }: DimensionProps) => {
    const [inputValue, setInputValue] = useState<number>(0);

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.target.value));
    };
    const changeDimension = () => {
        setDimension(inputValue);
    };

    return (
        <div className={styles.container}>
            <h2>Задайте размерность: </h2>
            <input type={"text"} onChange={changeInput} />
            <button onClick={changeDimension}>Выбрать</button>
        </div>
    );
};

export default Dimension;
