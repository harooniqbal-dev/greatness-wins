import { h } from "preact";
import uuid from "react-uuid";

const Chevron = () => (
    <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="16.000000pt"
        height="10.000000pt"
        viewBox="0 0 16.000000 10.000000"
        preserveAspectRatio="xMidYMid meet"
        id={`icon__chevron--${uuid()}`}
    >
        <g
            transform="translate(0.000000,10.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
        >
            <path d="M117 63 l-37 -37 -35 34 c-19 18 -37 31 -40 29 -2 -3 13 -23 35 -44 l40 -39 42 41 c23 23 40 45 37 47 -3 3 -22 -11 -42 -31z" />
        </g>
    </svg>
);

export default Chevron;
