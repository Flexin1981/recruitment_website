import './text.css'


export function Text(props) {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    );
}



export function RegularText(props) {
    return (
       <Text classes={"regular-text"}>{props.children}</Text>
    );
}

export function MutedText(props) {
    return (
        <Text classes={"muted-text"}>{props.children}</Text>
    );
}

export function HeadingSmallText(props) {
    return (
        <Text classes={"header-small-text"}>{props.children}</Text>
    );
}


export function HeadingText(props) {
    return (
        <Text classes={"header-text"}>{props.children}</Text>
    );
}



