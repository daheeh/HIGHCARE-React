import React from 'react';
import BoardNavStyle from './BulletinNavStyle.module.css'; 
import Bmodal from './bmodal/Bmodal';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react'; 

import {
    callBulletinNavAPI
} from '../../apis/BulletinAPICall';

function BulletinNav(){

	const [modal, setModal] = useState(false);
	const bulletins = useSelector(state => state.boardReducer);
	const dispatch = useDispatch();

	let i = true;
	console.log('bulletins', bulletins);

	useEffect(
		() =>{
			dispatch(callBulletinNavAPI());
		}
		,[i]
	);

	const openModal = () => {
		setModal(true);
	};

	const closeModal = () =>{
		setModal(false);
	};

    return (

		<div className={BoardNavStyle.leftmenu}>
		
			<div className={BoardNavStyle.leftmenu2}>
				<div className={BoardNavStyle.maintitle}>
					게시판
				</div>
				<div className={BoardNavStyle.apv_navibox}>
					<div className={BoardNavStyle.apv_navibox_top}>
						작성하기
					</div>
					{Array.isArray(bulletins) && bulletins.map(
						(bulletin) => (
							<div key={bulletin.categoryCode} className={BoardNavStyle.apv_navibox_maintitle}>{bulletin.nameBoard}</div>)		
					)}

					<div className={BoardNavStyle.apv_navibox_maintitle} onClick={openModal}>게시판 추가하기</div>
					{modal && <Bmodal onClose={closeModal}/>}
				</div>
			</div>
		</div>
    )
}

export default BulletinNav;