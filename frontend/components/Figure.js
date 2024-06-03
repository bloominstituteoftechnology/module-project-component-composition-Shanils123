import React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure `
    max-width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    figcaption{
        font-style: italic;
    }
`

export default function Figure({imageURL, caption}){
    return (
    <figure>
        <img src={imageURL}/>
        <figcaption className="imageDetails">📷Taken on: {caption}</figcaption>
        </figure>
    )
}