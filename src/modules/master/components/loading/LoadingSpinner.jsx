import React from 'react'

const LoadingSpinner = (props) => {
    const loadingText = (typeof props.text === 'undefined' || props.text === null) ? "Loading..." : props.text;
    return ( 
        <div>
            <p className="text-center">{loadingText}</p>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
     );
}
 
export default LoadingSpinner;