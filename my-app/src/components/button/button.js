import './button.css'

export default function Button({text, onClick, backgroundColor}) {
    return (
        <button className="box" onClick={onClick} style={{backgroundColor:backgroundColor}}>
            <h1 className="text">{text}</h1>
        </button>
    )
}