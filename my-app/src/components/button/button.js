import './button.css'

export default function Button({text, onClick}) {
    return (
        <button className="box" onClick={onClick}>
            <h1 className="text">{text}</h1>
        </button>
    )
}