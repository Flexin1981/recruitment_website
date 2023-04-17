import './base.css'
import {Header} from "../components/header";
import {NavigationMenu} from "../components/navigation_menu/navigation_menu";
import ReactGA from 'react-ga';

export function BasePage(props) {

    ReactGA.initialize('G-3PVZ08E2BZ');

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
