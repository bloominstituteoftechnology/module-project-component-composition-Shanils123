import React from "react";


export default function Figure({imageURL, caption}){
    return (
    <figure>
        <img src={imageURL}/>
        <figcaption className="imageDetails">📷Taken on: {caption}</figcaption>
        </figure>
    )
}