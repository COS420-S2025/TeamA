import "../App.css";

type TextBoxProps = {
    className: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
};

export function TextBox({ className, placeholder, value, onChange }: TextBoxProps): React.JSX.Element {
    return (
        <div className={`Textbox-Container ${className}`}>
            <div className="Textbox-Header"></div>

            <input
                className="Textbox-Input"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}