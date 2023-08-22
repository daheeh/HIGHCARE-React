import React from 'react';
import './BulletinNavStyle.css';
import Bmodal from './bmodal/Bmodal';

const {useState} = React;
function BulletinNav(){

	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const closeModal = () =>{
		setModal(false);
	};

    return (

		<div className=" leftmenu">
		
			<div className=" leftmenu2">
				<div className=" maintitle">
					게시판
				</div>
				<div className=" apv_navibox">
					<div className=" apv_navibox_top">
						작성하기
					</div>
					<div className=" apv_navibox_emp"></div>

					<div className=" apv_navibox_maintitle">나의 글보기</div>
					<div className=" apv_navibox_emp"></div>
					<div className=" apv_navibox_emp"></div>
					<div className=" apv_navibox_maintitle">자유 게시판</div>
					<div className=" apv_navibox_emp"></div>
					<div className=" apv_navibox_maintitle" onClick={openModal}>게시판 추가하기</div>
					{modal && <Bmodal onClose={closeModal}/>}
				</div>
			</div>
		</div>
    )
}

export default BulletinNav;