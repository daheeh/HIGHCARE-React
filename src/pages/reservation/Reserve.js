import BoardStyle from '../bulletin/Bullentin.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Calendar from './Calendar/Calendar';
import Rmodal from './modal/Rmodal';
import { NavLink } from 'react-router-dom';
function Reserve(){

    const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;
    const dateres = useSelector(state => state.dateReducer);
    const [modal,setModal] = useState(false);
    const daterese = dateres.data;
    const [data, setData] = useState('');
    const openModal = () =>{
        console.log('data' , data);
        setModal(true);
    }
    const closeModal = () =>{
		setModal(false);
  
	};
    return (
        <div class={BoardStyle.content_bullentin_main}>
            <h1 class={BoardStyle.content_title}>신청하기</h1>
            {modal && <Rmodal onClose={closeModal} data={data}/>}
           <div className={BoardStyle.applay_main}>
               <div className={BoardStyle.apply_content}>
                <img src="../../img/dog.jpg" alt="" width="400px" height="200px"/>
                        <div>
                            <div>시설명 : <span>{content.resourceName}</span></div>
                            <div>지역 : <span>{content.area}</span></div>
                            <div>위치 : <span>{content.location}</span></div>
                            <div>사용시간 : <span>{content.startTime}:00 - {content.endTime}:00</span></div>
                            <div><NavLink to="/reservation/mod">관리</NavLink></div>
                        </div>
                  </div>
                    <div style={{display: 'flex'}}>
                        <div id='calendar' style={{width: '80%'}}>
                            <Calendar setData={setData}/>
                        </div>
                        <div id="reservation-status">
                            <h3>예약현황</h3>{ Array.isArray(daterese) && daterese.map(
                                (res)=>(
                            <div>{res.startTime}:00-{res.endTime}:00</div>
                                ))
                        }
                            <button onClick={openModal}>예약하기</button>
                        </div>
                    </div>
                          <div className={BoardStyle.content_main_main} dangerouslySetInnerHTML={{__html:content.serviceGuide}}></div>
        </div>
    </div>
   
    )
}

export default Reserve;