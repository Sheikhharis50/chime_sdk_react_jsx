import React from 'react';
import { StyledCard } from "./Styled";

const Card = (props) => {
    return (
        <StyledCard
            header={props.header}
            title={props.title}
            description={props.description}
            smallText={props.smallText}
        />
    );
}

export default Card;
