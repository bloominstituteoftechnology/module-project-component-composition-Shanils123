import React from "react";
import Figure from './Figure'

export default function Card({title, text, imageURL, date}){
    return (
    <div className='card'>
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
        
        <Figure
        imageURL = {imageURL}
        caption = {date}
    />
    </div>
    )
}