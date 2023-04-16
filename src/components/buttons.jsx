import './button.css'
import {Link} from "react-router-dom";
import React from "react";

export function SolidButton(props) {
    return (
        <div className={'Solid-Button'}>
            <Link to={props.destination}>
                {props.label}
            </Link>
        </div>
    );
}

export function SolidButtonForm(props) {
    return (
        <button className={'Solid-Button'} type={props.type}>{props.label}</button>
    );
}