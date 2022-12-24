import classNames from "classnames";
import React from "react";

const Button = (props) => {

    const { className, ...otherProps } = props

    return <button {...otherProps} className={classNames("rounded medium", className)} />
}

export default Button