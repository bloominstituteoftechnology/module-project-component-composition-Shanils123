import React from "react";
import Figure from './Figure'
import styled from "styled-components";

const StyledCard = styled.div`
    padding: 2rem;
    border-radius: 12px;

    h2 {
        font-size: 2.5em;
        margin: 0 0 1rem 0;
    }

    p {
        margin: 0 0 1.5rem 0;

        &::first-letter {
            font-size: 1.5rem;
        }
    }
`

export default function Card({title, text, imageURL, date}){
    return (
    <StyledCard className='card'>
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
        
        <Figure
        imageURL = {imageURL}
        caption = {date}
    />
    </StyledCard>
    )
}