import Home from "@/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });
    const welcomeElement = screen.getByText(/Welcome to My Next.js App/i);
    expect(welcomeElement).toBeInTheDocument();

    expect(heading).toBeInTheDocument();
  });
});
