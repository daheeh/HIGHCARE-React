import React from 'react';

export const RenderErrorImage = (props) => {

    return (
        <div container justify={"center"} alignItems={"center"}
              style={{alignContent: "center", minHeight: "60vh"}}>
            <div item xs={12} sm={9} lg={5}>
                <img src={props.image} alt={props.name} style={{height: "50vh", width: "100%"}}/>
            </div>
        </div>
    );
};