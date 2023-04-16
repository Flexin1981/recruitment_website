import './card.css'
import img from "../assets/henry-perks-BJXAxQ1L7dI-unsplash.jpg";
import React from "react";

export function Card(props) {
    return (
        <div className={'card'}>
            {props.children}
        </div>
    );
}

export function CardHeading(props) {
    return (
        <h2 className={"card-heading"}>{props.children}</h2>
    );
}

export function CardBody(props) {
    return (
        <div className={"card-body"}>{props.children}</div>
    );
}

export function CardImage(props) {
    return (
        <img className={'card-img'} src={props.img}/>
    );
}