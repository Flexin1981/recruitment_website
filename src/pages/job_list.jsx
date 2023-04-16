import './job_page.css'



export function JobPostingCarousel(props) {
    return (
        <div>
            <input type="radio" name="position" checked/>
            <input type="radio" name="position"/>
            <input type="radio" name="position"/>
            <input type="radio" name="position"/>
            <input type="radio" name="position"/>
            <main id="carousel">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </main>
        </div>

    );
}
