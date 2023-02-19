import React from 'react';
import styles from './TextAreaControl.module.css'

type TextAreaPropsType = {}

const TextAreaControl = ({input, meta, ...props}: any) => {
    let hasError = meta.error && meta.touched && styles.error
    return (
        <div>
            <div>
                <textarea className={hasError ? styles.error : 'form'} {...props} {...input}> </textarea>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    );
};

export default TextAreaControl;