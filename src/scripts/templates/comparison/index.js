/* eslint-disable */
import { h, render } from "preact";
import Comparison from "./Comparison";

const comparisonBlock = document.querySelector(".comparison-block");

if (comparisonBlock) {
    render(<Comparison />, comparisonBlock);
}
