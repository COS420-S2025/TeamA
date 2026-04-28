import { render, screen, fireEvent, waitFor} from "@testing-library/react"
import { PdfView } from "./PdfView";

// AI was used in the creation of this file

beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => "mock-url")
    global.URL.revokeObjectURL = jest.fn()
});


test("render pdfview", async () => {
    const files= [
        new File(["placeholder"], "file1.pdf", { type: "application/pdf"}),
        new File(["placeholder"], "file2.pdf", { type: "application/pdf"}),
    ];

    render(<PdfView files={files}/>);
    
    await waitFor(() => {
        const iframe = screen.getByTitle("pdf-0");
        expect(iframe).toHaveAttribute("src", "mock-url");
    });
});

test("pdf switching", () => {
    const files= [
        new File(["placeholder"], "file1.pdf", { type: "application/pdf"}),
        new File(["placeholder"], "file2.pdf", { type: "application/pdf"}),
    ];

    render(<PdfView files={files}/>);

    fireEvent.click(screen.getByText("Next"));

    const iframe = screen.getByTitle("pdf-1");
    expect(iframe).toBeInTheDocument();
});


