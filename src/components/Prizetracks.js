import React from 'react';
import Iframe from 'react-iframe'
import '../styles/Prizetracks.css';
//import Fade from 'react-reveal/Fade';

function Prizetracks() {
    return (
        <center>
            <Iframe url="https://upgood.org/"
                id="schedule"
                width="100%"
                height="750px"
            />
        </center>
    )
}

export default Prizetracks;
