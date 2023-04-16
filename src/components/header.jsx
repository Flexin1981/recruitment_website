import {Logo} from "./LogoComponent";
import './header.css'
import {SolidButton} from "./buttons";
import {Link} from "react-router-dom";


export function Header(props) {
    return (
        <div className={'Navigation-Bar'}>
            <div className={'Branding'}>
                <Logo fill={'black'} width={255}/>
            </div>
        </div>
    );
}
