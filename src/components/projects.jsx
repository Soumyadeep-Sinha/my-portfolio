import React from 'react';
const Projects = (props) => {
    return (
        <div className="container">
            <a href={props.link} target="_blank" rel="noopener noreferrer"><img className="image" src={props.image} alt="pro-img" /></a>
            <div className="desc">
                <h2>{props.name}</h2>
                <p>{props.about}</p>
            </div>
        </div>
    );
}

export default Projects;