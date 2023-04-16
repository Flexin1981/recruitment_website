import './footer.css'
import {Link} from 'react-router-dom';
import {Logo} from "./LogoComponent";
import {SocialIcon} from 'react-social-icons';
import {AnimationOnScroll} from "react-animation-on-scroll";

export function Footer(props) {
    return (
        <div className={"Footer"}>
            <div>
                <Logo fill={"white"} width={300}/>
            </div>
            <div>
                <h2>SOCIAL MEDIA</h2>
            </div>
            <div>
                <h2>QUICK LINKS</h2>
            </div>
            <div>

            </div>
            <div>
                <div>

                    <div className={"contact-details"}>
                        <p className={"address"}>
                            The Square,
                            <br/>
                            Basing View
                            <br/>
                            Basingstoke
                            <br/>
                            RG21 8EB
                            <br/>
                        </p>

                        <p className={"address"}>+44 (0)204 558 7022</p>

                        <p className={"address"}>contact@blackcarbonrecruitment.co.uk</p>
                    </div>
                </div>
            </div>
            <div className={'social-icons'}>
                <AnimationOnScroll animateIn="animate__fadeIn" delay="0">
                    <SocialIcon url="https://www.linkedin.com/company/black-carbon-recruitment"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" delay="10">
                    <SocialIcon url="https://twitter.com/jaketrent"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" delay="20">
                    <SocialIcon url="https://www.facebook.com/blackcarbon2023"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn" delay="30">
                    <SocialIcon url="https://www.instagram.com/blackcarbon_recruitment/"/>
                </AnimationOnScroll>
            </div>
            <div>
            <div className={"quick-links"}>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay="0">
                    <Link to={'/'}>Home</Link>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay="100">
                    <Link to={'/recruitment_as_a_service'}>RAAS</Link>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay="200">
                    <Link to={'/terms'}>Terms</Link>
                </AnimationOnScroll>
            </div>
            </div>
            <div>

            </div>
        </div>
    );
}

