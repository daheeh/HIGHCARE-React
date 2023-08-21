import './BulletinNavStyle.css';

function BulletinNav(){
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
					<div className=" apv_navibox_maintitle">게시판 추가하기</div>
				</div>
			</div>
		</div>
    )
}

export default BulletinNav;