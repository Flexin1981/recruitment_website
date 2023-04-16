import "./navigation_menu.css"
import {Link} from "react-router-dom";

export function NavigationMenu(props) {
    return (
        <div className={"navigation-menu"}>
            <div className={"nav-item"}><Link to={'/'}>HOME</Link></div>
            <div className={"nav-item"}><Link to={'/contact'}>CONTACT</Link></div>
            <div className={"nav-item"}><Link to={'/recruitment_as_a_service'}>RAAS</Link></div>
            <div className={"nav-item"}><Link to={'/terms'}>TERMS</Link></div>
        </div>
    );
}





