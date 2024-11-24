import React from 'react';

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/esha-jugade-42b79b1a4/" className="home__social-icon" target='_blank'>
                <i class="uil uil-linkedin"></i>
            </a>
            
            <a href="https://github.com/ejugade" className="home__social-icon" target='_blank'>
                <i class="uil uil-github"></i>
            </a>

            <a href="mailto:ejugade@purdue.edu" className="home__social-icon" target='_blank'>
                <i class="bx bxl-gmail"></i>
            </a>

            <a href="https://scholar.google.com/citations?user=H0OmdV0AAAAJ&hl=en" className="home__social-icon" target='_blank'>
                <i class="uil uil-graduation-cap"></i>
            </a>
            
            {/* <a href="" className="home__social-icon" target='_blank'></a> */}
        </div>
    )
}

export default Social;