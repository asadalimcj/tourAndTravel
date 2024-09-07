import React from 'react';

export default function Header(props) {
    return (
        <>
        <div className={props.cName}>
            <img  src={props.imag} alt='hero'></img>
            <div className='hero-text'>
                <h1>{props.H1}</h1>
                <p>{props.Para}</p>
                <a href={props.url} className={props.btnclass}>{props.address}</a>
            </div>
        </div>
        </>
      )
}


