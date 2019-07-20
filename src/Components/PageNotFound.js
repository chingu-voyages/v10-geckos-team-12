import React from 'react';
import {Link} from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>
Oops, where has this page gone? You know what, go to the <Link to="/">Home page</Link> and start over while I find it out for you.
        </div>
    )
}

export default PageNotFound;