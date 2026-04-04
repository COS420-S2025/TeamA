import React, { useState } from "react";
import "../App.css";

type TextBoxProps = {
    className: string;
    placeholder: string;
};

export function TextBox({ className, placeholder }: TextBoxProps): React.JSX.Element {
    const [text, setText] = useState<string>("");

    return (
        <div className={`Textbox-Container ${className}`}>
            <div className="Textbox-Header"></div>

            <input
                className="Textbox-Input"
                placeholder={placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}