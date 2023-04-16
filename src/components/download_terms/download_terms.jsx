import './download_terms.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFile} from '@fortawesome/free-solid-svg-icons'
import DownloadLink from "react-download-link";
import file from '../../assets/henry-perks-BJXAxQ1L7dI-unsplash.jpg'


export function DownloadMenu(props) {
    return (
        <div className={"download-menu"}>
            <span className="material-symbols-outlined md-48">
                download
            </span>
            <div className={'pdf'}>
                <DownloadLink
                    label=<FontAwesomeIcon icon={faFilePdf}/>
                filename="blackcarbonrecruitmentterms.docx"
                exportFile={() => file}
                />
            </div>
            <div className={'word'}>
                <DownloadLink
                    label=<FontAwesomeIcon icon={faFile} />
                filename="blackcarbonrecruitmentterms.docx"
                exportFile={() => file}
                />
            </div>
            <span className="material-symbols-outlined md-48">
                download
            </span>
        </div>
    );
}



