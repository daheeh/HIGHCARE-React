import BoardStyle from '../bulletin/Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Calendar from './Calendar/Calendar';
import Rmodal from './modal/Rmodal';
import { NavLink } from 'react-router-dom';
function Reserve(){
    const navigate = useNavigate();
    const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;
    const dateres = useSelector(state => state.dateReducer);
    const [modal,setModal] = useState(false);
    const daterese = dateres.data;
    const authes = useSelector(state => state.authes);
    const role = authes.role;
    const [data, setData] = useState('');
    const openModal = () =>{

        if(data==''){
            alert('날짜를 선택해주세요.');
        }else{
            console.log('data' , data);
            setModal(true);
        }
    }
    const closeModal = () =>{
		setModal(false);
  
	};
    const onClickMod = () =>{
        if(role.includes('ROLE_ADMIN')){
        navigate("/reservation/mod",{replace: true})

        }else{
            alert('권한이 없습니다.');
        }
    }

    function dateRe(data){
        var dateObj = new Date(data);

        var year = dateObj.getFullYear(); 
        var month = dateObj.getMonth() + 1;
        var day = dateObj.getDate();
        var formattedDate = year + '년 ' + month + '월 ' + day + '일';

        return formattedDate;
    }
    console.log('daterese',daterese);
    return (
        <div class={BoardStyle.content_bullentin_main}>
            <h1 class={BoardStyle.content_title}>신청하기</h1>
            {modal && <Rmodal onClose={closeModal} data={data}/>}
           <div className={BoardStyle.applay_main}>
               <div className={BoardStyle.apply_content}>
                <img src={content.fileUrl} alt="" width="400px" height="200px"/>
                        <div>
                            <div>시설명 : <span>{content.resourceName}</span></div>
                            <div>지역 : <span>{content.area}</span></div>
                            <div>위치 : <span>{content.location}</span></div>
                            <div>사용시간 : <span>{content.startTime}:00 - {content.endTime}:00</span></div>
                            <div className={BoardStyle.comment_ok} style={{width:"30px",height:"30px",fontSize:"14px",paddingBottom:"0px"}} onClick={onClickMod}>관리</div>
                        </div>
                  </div>
                    <div style={{display: 'flex'}}>
                        <div id='calendar' style={{width: '100%'}}>
                            <Calendar setData={setData}/>
                        </div>
                        <div className={BoardStyle.reservation_status}>
                            <h3>예약현황</h3>
                            <div>{data != '' && dateRe(data)}</div>{ Array.isArray(daterese) && daterese.map(
                                (res)=>(
                            <div>{res.startTime}:00-{res.endTime}:00</div>
                                ))
        
                        }{
                            Array.isArray(daterese) && daterese.length === 0 &&
                            <span style={{fontSize:'16px'}}>예약자가 없습니다</span>
                        }
                            <br></br>
                            <button onClick={openModal} style={{marginTop:"30px",fontSize:'16px',height:'30px'}}>예약</button>
                        </div>
                    </div>
                          <div className={BoardStyle.content_main_main} dangerouslySetInnerHTML={{__html:content.serviceGuide}}></div>
        </div>
    </div>
   
    )
}

export default Reserve;