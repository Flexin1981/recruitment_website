import './explainer_section.css'
import img from "../assets/annie-spratt-QckxruozjRg-unsplash.jpg"
import {SolidButton} from "./buttons";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Link} from "react-router-dom";

export function ExplainerSection(props) {
    return (
        <div className={"explainer-section"}>

            <AnimationOnScroll animateIn="animate__fadeInUp" delay="0">
                <div className={"explainer-text"}>
                    <h1 className={"explainer-header"}><span className={'linear-gradient-span'}>Why</span> we do what we do.</h1>
                    <p className={"explainer-paragraph"}>
                        At our company, we don't just believe in teams - we know they're the driving force behind any successful project. We understand the importance of hiring the right people, which is why we've made it our mission to revolutionize the recruitment sector.
                        <br/><br/>
                        Unlike other agencies, we don't just charge exorbitant one-time fees and leave you with little to no guarantees of finding that perfect candidate. We've built our brand on value, and we're committed to injecting real process and innovation back into the industry.
                        <br/><br/>
                        So if you're looking for a recruitment partner that truly cares about your success, look no further than us. Let us show you how we can help you build the dream team you've always wanted.
                    </p>
                    <div className={"explainer-call-to-action"}>
                        <SolidButton destination={"/"} label={"CONTACT US"}/>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRightBig" delay="0">
                <img src={img} alt={"Image"} className={'explainer-image'}/>
            </AnimationOnScroll>
        </div>
    );
}

