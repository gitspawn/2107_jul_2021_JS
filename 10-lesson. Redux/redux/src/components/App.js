import React from "react";
import Timer from "./Timer";
import StepSelector from "./StepSelector";

let stepOpt = [5, 10, 20, 25, 30];

export default function App() {
    return (
        <div>
            <StepSelector options={stepOpt} />
            <Timer />
        </div>
    );
}
