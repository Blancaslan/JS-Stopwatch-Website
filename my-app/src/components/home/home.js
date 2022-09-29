import './home.css'
import CustomButton from '../button/button';

export default function Home() {
    return(
        <div className="Grid">
            <CustomButton mainText={"Start/Stop"}></CustomButton>
            <CustomButton mainText={"Reset"}></CustomButton>
        </div>
    )
}