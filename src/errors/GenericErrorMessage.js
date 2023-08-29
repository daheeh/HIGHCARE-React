import React from 'react'

export const GenericErrorMsg = () => {

    console.log('[GenericErrorMsg] Rendering GenericErrorMsg Component');
    return (
        <div container justify="center" style={{paddingTop: "2rem", fontSize: "3rem"}}>
            <p>Oops! Something went wrong....</p>
        </div>
    )
}