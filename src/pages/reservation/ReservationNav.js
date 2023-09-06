import './ReservationNavStyle.css'
import { NavLink } from 'react-router-dom';

function ReservationNav(){
    return (
            <div class="leftmenu">
	
		    <div class="leftmenu2">
	
			<div class="maintitle">
				예약
			</div>
			<div class="apv_navibox">
				<div class="apv_navibox_maintitle"><NavLink to="/reservation">시설예약</NavLink></div>
				<div class="apv_navibox_emp"></div>
				<div class="apv_navibox_maintitle"><NavLink to="/reservation/add">시설추가</NavLink></div>
				<div class="apv_navibox_emp"></div>
				<div class="apv_navibox_maintitle"><NavLink to="/reservation/mystatus">나의 신청현황</NavLink></div>
				<div class="apv_navibox_emp"></div>
				<div class="apv_navibox_maintitle"><NavLink to="/reservation/status">신청현황</NavLink></div>
				
			</div>
		</div>
	</div>
    )
}

export default ReservationNav;