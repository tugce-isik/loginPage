import React from "react";
import PropTypes from "prop-types"
import './Button.css'

const Button = ({text,onClick}) =>{
    return(
        <button className="custom-button" onClick={onClick}>{text}</button>
    )

}


Button.propTypes={
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string
}

Button.defaultProps={
    placeholder:"Enter the value..",
    text:"Click"
}

export default Button