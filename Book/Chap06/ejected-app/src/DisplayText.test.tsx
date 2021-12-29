import React from "react";
import { 
    render,
    fireEvent,
    cleanup,
    waitFor
 } from "@testing-library/react";
import DisplayText from "./DisplayText";
import "@testing-library/jest-dom/extend-expect";

jest.mock("./UserTodos");

afterEach(cleanup);

describe("Test Displaytext", () => {

    const userFullName = "John Tester";

    /*
        Questa funzione prende "username" come parametro, come nella vera funzione,
        e ritorna una promise e un oggetto Mock.
    */
    const getUserFullnameMock = (username: string): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
        /*
            Creo una promise
        */
        const promise = new Promise<string>((res, rej) => {
            res(userFullName);
        });

        /*
            Faccio il mock della funzione
        */
        const getUserFullname = jest.fn(
            async (username: string): Promise<string> => {
                return promise;
            }
        );

        // Ritorno la promise e la funzione "moccata"
        return [promise, getUserFullname];
    }


    it("renders without crashing", () => {
        const username = "testuser";
        const [promise, getUserFullname] = getUserFullnameMock(username);

        const { baseElement } = render(<DisplayText getUserFullname={getUserFullname} />);

        expect(baseElement).toBeInTheDocument();
    });

    it("matches snapshot", () => {
        const username = "testuser";
        const [promise, getUserFullname] = getUserFullnameMock(username);

        const { baseElement } = render(<DisplayText getUserFullname={getUserFullname} />);

        expect(baseElement).toMatchSnapshot();
    });

    it("receives input text", () => {
        const username = "testuser";
        const [promise, getUserFullname] = getUserFullnameMock(username);
        
        const { getByTestId } = render(<DisplayText getUserFullname={getUserFullname} />);
        const input = getByTestId("user-input");

        fireEvent.change(input, { target: {value: username }});

        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(username);
    });

    it("shows welcome message", async () => {
        const username = "testuser";
        const [promise, getUserFullname] = getUserFullnameMock(username);
        const msg = `Welcome to React testing, ${userFullName}`;
        
        const { getByTestId } = render(<DisplayText getUserFullname={getUserFullname} />);
        const input = getByTestId("user-input");
        const label = getByTestId("final-msg");
        const btn = getByTestId("input-submit");

        fireEvent.change(input, {target: { value: username}});
        fireEvent.click(btn);

        expect(label).toBeInTheDocument();
        await waitFor(() => promise);
        expect(label.innerHTML).toBe(msg);
    });
});