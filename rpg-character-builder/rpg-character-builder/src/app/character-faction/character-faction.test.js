import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import CharacterFaction from "./CharacterFaction";
import "@testing-library/jest-dom";

// Mock server setup
const server = setupServer(
  rest.get("http://localhost:3000/api/character-factions", (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: "Warriors" }, { id: 2, name: "Mages" }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("CharacterFaction Component", () => {
  // Test 1: Should handle errors when data is not found
  it("should display an error message if the server is down", async () => {
    // Override the server response to simulate an error
    server.use(
      rest.get("http://localhost:3000/api/character-factions", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<CharacterFaction />);

    // Check if the error message appears
    const errorMessage = await screen.findByText(/Unable to fetch character factions/i);
    expect(errorMessage).toBeInTheDocument();
  });

  // Test 2: Should correctly fetch a list of character factions
  it("should fetch and display a list of character factions", async () => {
    render(<CharacterFaction />);

    // Wait for the list items to appear
    const factions = await screen.findAllByRole("listitem");
    expect(factions).toHaveLength(2);

    // Verify the displayed faction names
    expect(factions[0]).toHaveTextContent("Warriors");
    expect(factions[1]).toHaveTextContent("Mages");
  });

  // Test 3: Should update the characterFactions div when data is found
  it("should update the characterFactions div with the fetched data", async () => {
    render(<CharacterFaction />);

    const characterFactionsDiv = await screen.findByTestId("character-factions");
    expect(characterFactionsDiv).toBeInTheDocument();

    // Ensure it contains the fetched faction data
    expect(characterFactionsDiv).toHaveTextContent("Warriors");
    expect(characterFactionsDiv).toHaveTextContent("Mages");
  });
});
