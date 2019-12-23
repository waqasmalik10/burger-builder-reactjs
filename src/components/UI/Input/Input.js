import React from 'react'
import classes from './Input.module.css'

const input = (props) => {
    let inputElement = null;
    switch(props.elementtype) {
        case 'input':
            inputElement = <input 
                                onChange={props.changed}
                                value={props.value}
                                className={classes.InputElement} 
                                {...props.elementConfig} />;
            break;
        case 'textarea': 
            inputElement = <textarea 
                                onChange={props.changed}
                                className={classes.InputElement} 
                                {...props.elementConfig} />;
            break;
        case 'select': 
            inputElement = (
                            <select
                                onChange={props.changed}
                                className={classes.InputElement} 
                                value={props.value}>
                                    {props.elementConfig.options.map(option => (
                                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                                    ))}
                            </select>
            );
            break;
        default:
            inputElement = <input 
                                onChange={props.changed}
                                value={props.value}
                                className={classes.InputElement} 
                                {...props} />
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;