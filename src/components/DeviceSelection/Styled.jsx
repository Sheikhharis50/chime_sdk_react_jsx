import './index.scss';

export const title = {
  textTransform: "uppercase",
  fontSize: "1rem !important",
  marginBottom: "1.75rem"
}

export const StyledPreviewGroup = (props) => {
  return (
    <div className="StyledPreviewGroup">
      {props.children}
    </div>
  )
}

export const StyledWrapper = (props) => {
  return (
    <div className="StyledWrapper" >
      {props.children}
    </div>
  )
}

export const StyledAudioGroup = (props) => {
  return (
    <div className="StyledAudioGroup" >
      {props.children}
    </div>
  )
}

export const StyledVideoGroup = (props) => {
  return (
    <div className="StyledVideoGroup" >
      {props.children}
    </div>
  )
}

export const StyledInputGroup = (props) => {
  return (
    <div className="StyledInputGroup" >
      {props.children}
    </div>
  )
}
