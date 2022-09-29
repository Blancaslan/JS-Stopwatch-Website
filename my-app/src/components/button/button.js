import './button.css'

export default function CustomButton({mainText}) {
    return (
        <button className="outerbox" onClick={watchfunction}>
            <h1 className="startstop">{mainText}</h1>
        </button>
    )
}

function watchfunction() { 
    alert("Hello")
}