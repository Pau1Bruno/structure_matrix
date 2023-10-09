import React from 'react';
import styles from "./Cell.module.scss";

type CellProps = {
    onChange?:  React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Cell = ({onChange}: CellProps) => {
    return (
        <input
            type={"text"}
            className={styles.input}
            placeholder={"0"}
            onChange={onChange}
        />
    );
};

export default Cell;
