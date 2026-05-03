import { render, screen } from "@testing-library/react";
import { LoadDataButton } from "./LoadDataButton";

test ("Render Load Data Button", async () => {
    const email = "john.doe@domain.org"
    render(<LoadDataButton email={email}/>)

    expect(screen.getByRole('button', {name : /Load Data/i})).toBeInTheDocument();
});