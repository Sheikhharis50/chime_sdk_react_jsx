import './index.scss'
import React from 'react';

export const SmallText = (props) => {
  return (
    <small
      className="ch-small"
    >{props.smallText}</small>
  )
}

export const StyledCard = (props) => {
  return (
    <div>
      {props.header && <div className="ch-header">{props.header}</div>}
      <div className="ch-body">
        <div className="ch-title">{props.title}</div>
        <div className="ch-description">{props.description}</div>
        {
          props.smallText &&
          <SmallText
            smallText={props.smallText}
          />
        }
      </div>
    </div>
  )
}
