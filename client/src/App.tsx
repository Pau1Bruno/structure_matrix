import React, { useState } from "react";
import Header from "./components/Header/Header";
import Dimension from "./components/Dimension/Dimension";
import Weights from "./components/Weights/Weights";
import InitialMatrix from "./components/InitialMatrix/InitialMatrix";
import { horizontalSet, verticalSet } from "./algorithms/structural_sets";
import Sets from "./components/Sets/Sets";

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
        <Dimension dimension={dimension} setDimension={setDimension} />
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          Размерность не задана
        </h1>
      </div>
    );

  return (
    <div>
      <Header />
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
  );
}

export default App;
