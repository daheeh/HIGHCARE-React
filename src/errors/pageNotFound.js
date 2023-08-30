import React from 'react';
import pageNotFoundImage from "../../src/images/pagenotfound.png"
import { RenderErrorImage } from './renderErrorImage';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {

    const navigate = useNavigate();  
    const onHomeBtnClick = () => {
        navigate(`/`);
    }

    return (
        <>
            <RenderErrorImage image={pageNotFoundImage} name="page-not-found-image" />
            <div container justify="center">
                <div item xs={5} sm={3}>
                    <button variant="contained" size="large" color="primary"
                        onClick={onHomeBtnClick}
                        style={{ width: '100%' }}>
                        메인으로 이동하기
                    </button>
                </div>
            </div>
        </>
    )

}