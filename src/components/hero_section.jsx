import './hero-section.css'
import {SolidButton} from "./buttons";
import {Link} from "react-router-dom";

export function Hero(props) {
    return (
        <div className={'Hero-Section animate__animated animate__fadeIn animate__slower'}>
            <div className={'Heading'}>
                <h1 className={'close-spacing'}>Top quality <span className={'linear-gradient-span'}>candidates</span></h1>
                <h1 className={'close-spacing'}>with no large fees.</h1>
            </div>
            <div className={'Sub-Heading'}>
                <p>Let us head hunt top quality people for you.</p>
            </div>
            <div className={"buttons"}>
                <SolidButton destination={"/recruitment_as_a_service"} label={"LEARN MORE"}/>
                <SolidButton destination={"/core_values"} label={"CORE VALUES"}/>
            </div>
        </div>
    );
}
