import './home_page.css'
import {BasePage} from "./base_page";
import {Hero} from "../components/hero_section";

export function HomePage(props) {
    return (
        <BasePage>
            <Hero/>
        </BasePage>
    );
}
