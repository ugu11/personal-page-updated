import React from 'react'

function Socials() {
    return (
        <div className="socials">
            <div><a href="https://github.com/Hugand"><img src={require('../assets/img/github_logo.svg')} alt="github" /></a></div>
            <div><a href="mailto:hugoasgomes@hotmail.com"><img src={require('../assets/img/email_logo.svg')} alt="email" /></a></div>
            <div><a href="https://medium.com/@hugand"><img src={require('../assets/img/medium_logo.svg')} alt="medium" /></a></div>
        </div>
    )
}

export default Socials