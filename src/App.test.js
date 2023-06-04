import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";

test('render correctly text component', () => {
    render(<App />);
    expect(screen.findByText('STATUS = 0')).toMatchSnapshot();
   
});


