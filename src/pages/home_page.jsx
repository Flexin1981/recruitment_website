import './home_page.css'
import {BasePage} from "./base_page";
import {Hero} from "../components/hero_section";
import ReactGA from 'react-ga';


export function HomePage(props) {

    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <BasePage>
            <Hero/>
        </BasePage>
    );
}
