import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Dimension from "./components/Dimension/Dimension";
import Weights from "./components/Weights/Weights";
import InitialMatrix from "./components/InitialMatrix/InitialMatrix";
import {horizontalSet, verticalSet} from "./algorithms/structural_sets";

function App() {
    const [dimension, setDimension] = useState<number>(0);
    const getInitialMatrix = (matrix: number[][]) => {
        horizontalSet(matrix);
        verticalSet(matrix);
        return (matrix);
    }



    if (!dimension) return (
        <div>
            <Header/>
            <Dimension dimension={dimension} setDimension={setDimension}/>
            <h1 style={{textAlign: "center", marginTop: "100px"}}>Размерность не задана</h1>
        </div>
    )

    return (
        <div>
            <Header/>
            <Dimension dimension={dimension} setDimension={setDimension}/>
            <Weights dimension={dimension}/>
            <InitialMatrix dimension={dimension} getInitialMatrix={getInitialMatrix}/>

        </div>
    );
}

export default App;
