import React from 'react';
import loadingHOC from './LoadingHOC'

function People(props) {
    let people = props.people.map((e, i) => (
        <div key={i}>
            <p>{e.name}</p>
            <p>{e.hair_color}</p>
            <p>{e.eye_color}</p>
            <p>{e.height}</p>
        </div>
    ))
    return (
        <div>
            {people}
            
        </div>
    )
}
export default loadingHOC(People)