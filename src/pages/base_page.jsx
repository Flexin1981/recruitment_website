import './base.css'
import {Header} from "../components/header";
import {NavigationMenu} from "../components/navigation_menu/navigation_menu";

export function BasePage(props) {
    return (
        <>
            <Header></Header>
            <div className={"container"}>
                {props.children}
            </div>
            <NavigationMenu/>
        </>
    );
}
