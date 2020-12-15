import React from 'react';
import './Title.css'

const Title = (props) => {
    return (
        <div>
            <h1 className="main-title">{props.title}</h1>
        </div>
    )
}

export default Title