import React from 'react';
import BoardNavStyle from './BulletinNavStyle.module.css'; 
import { NavLink } from 'react-router-dom';
// import {
//     callBulletinNavAPI
// } from '../../apis/BulletinAPICall';

function BulletinNav(){

	// const [modal, setModal] = useState(false);
	// const bulletins = useSelector(state => state.boardtest);
	// const dispatch = useDispatch();



	// useEffect(
	// 	() =>{
	// 		dispatch(callBulletinNavAPI());
	// 	}
	// 	,[]
	// );

	// const openModal = () => {
	// 	setModal(true);
	// };

	// const closeModal = () =>{
	// 	setModal(false);
	// };
	
// 	{Array.isArray(bulletins) && bulletins.map(
// 		(bulletin) => (
// 			<div key={bulletin.categoryCode} className={BoardNavStyle.apv_navibox_maintitle}>{bulletin.nameBoard}</div>)		
// 	)}

// 	<div className={BoardNavStyle.apv_navibox_maintitle} onClick={openModal}>게시판 추가하기</div>
// 	{modal && <Bmodal onClose={closeModal}/>}
return (
	<div className={BoardNavStyle.leftmenu}>
		
			<div className={BoardNavStyle.leftmenu2}>
				<div className={BoardNavStyle.maintitle}>
					게시판
				</div>
				<div className={BoardNavStyle.apv_navibox}>
					<div className={BoardNavStyle.apv_navibox_top}>
					<NavLink to="/bulletin/bulletinWrite">
						작성하기
						</NavLink>
					</div>
					<div className={BoardNavStyle.apv_navibox_maintitle}><NavLink to="/bulletin/board/2">인기 게시판</NavLink></div>
					<div className={BoardNavStyle.apv_navibox_maintitle}><NavLink to="/bulletin/board/1">전체 게시판</NavLink></div>
					<div className={BoardNavStyle.apv_navibox_maintitle}><NavLink to="/bulletin/board/4">공지 사항</NavLink></div>
					<div className={BoardNavStyle.apv_navibox_maintitle}><NavLink to="/bulletin/board/3">자유 게시판</NavLink></div>
					<div className={BoardNavStyle.apv_navibox_maintitle}><NavLink to="/bulletin/board/5">나의 글 보기</NavLink></div>
				</div>
			</div>
		</div>
    )
}

export default BulletinNav;