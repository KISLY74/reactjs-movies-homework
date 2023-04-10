import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("render Header component on the Main-page", () => {
    render(<Header title="Main" />);
    expect(screen.getByPlaceholderText('Movies, person, movie theaters')).toBeInTheDocument();
    expect(screen.getByText(/Main/i)).toBeInTheDocument();
  })
  it("render Header component on the Movie-page", () => {
    render(<Header title="Movie details" />);
    expect(screen.getByPlaceholderText('Movies, person, movie theaters')).toBeInTheDocument();
    expect(screen.getByText(/Movie details/i)).toBeInTheDocument();
  })
  it("render Header component on the Actor-page", () => {
    render(<Header title="Actor profile" />);
    expect(screen.getByPlaceholderText('Movies, person, movie theaters')).toBeInTheDocument();
    expect(screen.getByText(/Actor profile/i)).toBeInTheDocument();
  })
})