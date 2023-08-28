import React from 'react';
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ChattingMainCSS from './ChattingMain.module.css';
import Draggable from 'react-draggable';
import ChattingHeader from '../../component/ChattingHeader';
import ChattingFooter from '../../component/ChattingFooter';

    function ChattingMain({ onClose }) {


        return (
            <>
                <Draggable 
                    handle={`.${ChattingMainCSS.chattingHeader}`}
                    bounds="body"
                >
                <div className={ChattingMainCSS.chattingMain}>
                    <ChattingHeader onClose={onClose} /> 
                        <div className={ChattingMainCSS.searchHeader}>
                            <div className={ChattingMainCSS.searchMember}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <input type="search" className={ChattingMainCSS.searchBox} placeholder="이름, 부서명, 전화번호 검색"/>
                            </div>
                        </div>
                    <div className={ChattingMainCSS.mainContents}>
                        <img className={ChattingMainCSS.treeviewImg} src='images/treeview_sample.PNG' alt='treeview'/>
                    </div>
                    <ChattingFooter/>
                </div>
                </Draggable>
            </>
        );
    }

    export default ChattingMain;

