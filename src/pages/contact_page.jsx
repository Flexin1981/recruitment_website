import './contact_page.css'
import {Card, CardBody, CardHeading, CardImage} from '../components/card'
import img from '../assets/henry-perks-BJXAxQ1L7dI-unsplash.jpg'
import mail from '../assets/stephen-phillips-hostreviews-co-uk-3Mhgvrk4tjM-unsplash.jpg'
import call from '../assets/taylor-grote-L3qUP8MpExc-unsplash.jpg'
import {BasePage} from "./base_page";

import React, { useState } from "react";
import {SolidButton, SolidButtonForm} from "../components/buttons";
import {CardImg} from "react-bootstrap";

export function ContactPage(props) {
    return (
        <div className={"container"}>
            <BasePage>
                <div className={"contact-page"}>
                    <svg className={"wave"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,160L40,149.3C80,139,160,117,240,117.3C320,117,400,139,480,160C560,181,640,203,720,224C800,245,880,267,960,256C1040,245,1120,203,1200,202.7C1280,203,1360,245,1400,266.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    <div className={"wave block"}></div>

                    <div className={"card-grid"}>
                        <Card>
                            <CardImage img={call}/>
                            <span className="material-symbols-outlined md-48">
                                call
                            </span>
                            <CardHeading>
                                Call Us Today
                            </CardHeading>
                            <CardBody>
                                <p>020 8078 4034</p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImage img={mail}/>
                            <span className="material-symbols-outlined md-48">
                                mail
                            </span>
                            <CardHeading>
                                Send Us A Mail
                            </CardHeading>
                            <CardBody>
                                <p>contact@blackcarbonrecruitment.co.uk</p>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardImage img={img}/>
                            <span className="material-symbols-outlined md-48">
                            home
                        </span>
                            <CardHeading>
                                Where We Live
                            </CardHeading>
                            <CardBody>
                                <p>
                                    The Square
                                    <br/>
                                    Basing View
                                    <br/>
                                    Basingstoke
                                    <br/>
                                    RG21 4EB
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </BasePage>
        </div>
    );
}
