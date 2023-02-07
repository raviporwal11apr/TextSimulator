import React from 'react'

const Alert = (props) => {
    return (
        <div style={{ height: "50px" }}>
            {props.alert ? <div className={`alert alert-${props.alert.type} align-items-center`} role="alert" >
                <div>
                    {props.alert.message}
                </div>
            </div> : null}
        </div>
    )
}

export default Alert
