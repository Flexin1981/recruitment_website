import "./job_short.css"

export function JobShort(props) {

    let query = '{ boards (limit:5) {name id} }';

    fetch ("https://api.monday.com/v2", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'YOUR_API_KEY_HERE'
        },
        body: JSON.stringify({
            'query' : query
        })
    })
        .then(res => res.json())
        .then(res => console.log(JSON.stringify(res, null, 2)));


    return (
        <div className={"job-short"}>
            <div className={"job-short-header"}>
                Job Posting
            </div>

            <div className={"job-short-heading"}>
                {props.heading}
            </div>
            <div className={"job-short-salary"}>
                {props.renumeration}
            </div>
            <div className={"job-short-description"}>
                {props.description}
            </div>
        </div>
    );
}
