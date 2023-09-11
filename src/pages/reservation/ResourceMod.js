import { useEffect,useRef, useState } from 'react';
import BoardStyle from '../bulletin/Bullentin.module.css';
import Bmodal from '../bulletin/bmodal/Bmodal';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../bulletin/editor/Editor';
import { NavLink } from 'react-router-dom';

import {
    callResAPI,
    callResModAPI,
    callDeleteAPI
} from '../../apis/ResAPICall';

function ResourceMod(){
    const dispatch =useDispatch();
    const res = useSelector(state => state.resReducer);
    const resCategory = res.data;
    const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;
    const [value, setValue] = useState( content.serviceGuide);
    const [start, setStart] = useState(0);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();
    const navigate = useNavigate();

    console.log('contentresourceCode : ' , content.resourceCode);
    const [form, setForm] = useState({
        resourceCode: content.resourceCode,
        resourceName: content.resourceName,
        area: content.area,
        location: content.location,
        serviceGuide: content.serviceGuide,
        startTime: content.startTime,
        endTime: content.startTime,
        categoryCode: content.categoryCode
    });
    useEffect(
        () => {
            dispatch(callResAPI());
            setStart(0);
        },[start]
    );
    useEffect(() => {
        if(image){
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if( result ){
                    setImageUrl(result);
                }
            }
            fileReader.readAsDataURL(image);
        }
    },
    [image]);

    const onChangeImageUpload = (e) => {

        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        imageInput.current.click();
    }




    const getValue = (x) =>{
        setValue(x)
        setForm({
            ...form,
            serviceGuide: x
        });
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickDeleteHandler = ()=>{
        if(window.confirm("시설을 삭제 하시겠습니까?")){
        dispatch(callDeleteAPI({
            resourceCode:content.resourceCode
        }));
              navigate(`/reservation`, { replace: false });
        window.location.reload()
    }
    }

    const onClickResourceModHandler = () => {
          if(form.startTime <0 || form.endTime <=0 || form.startTime >= form.endTime || form.startTime >=24 || form.endTime > 24){
            alert('시간을 다시입력해주세여');
        }else{
        const formData = new FormData();
        formData.append("resourceCode", form.resourceCode);
        formData.append("resourceName", form.resourceName);
        formData.append("area", form.area);
        formData.append("location", form.location);
        formData.append("serviceGuide", form.serviceGuide);
        formData.append("startTime", form.startTime);
        formData.append("endTime", form.endTime);
        formData.append("categoryCode", form.categoryCode);
        if(image){
            formData.append("image", image);
        }
        
        if(form.categoryCode == 0 || form.resourceName == '' || form.area == '' || form.location == '' || form.serviceGuide == '' || form.startTime == ''|| form.endTime == ''){
            alert('공백이 있습니다')
            console.log('form ', form)
        }else{
        dispatch(callResModAPI({
            form: formData
            
        })); 
        navigate(`/reservation`, { replace: false });
        window.location.reload()
    }
    }
    }

    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>시설관리</h1>
        <div className={BoardStyle.add_content}>
            <div>
                <span>시설그룹</span>
                <select name="categoryCode" onChange={onChangeHandler}>
                        <option value='0' selected>--선택--</option>
                    {Array.isArray(resCategory) && resCategory.map(
                        (Category) => (
                            <option value={Category.categoryCode}>{Category.name}</option>
                        )
                    )}
                </select>
            </div>
            <div>
                <span>지역</span>
                <input type="text" name='area' defaultValue={content.area} onChange={onChangeHandler}/>
                
             
            </div>

            <div>
                <span>시설이름</span>
                <input type="text" name='resourceName'defaultValue={content.resourceName}  onChange={onChangeHandler}/>
            </div>

            <div>
                <span>위치</span>
                <input type="text" name='location' defaultValue={content.location} onChange={onChangeHandler}/>
            </div>
            <div className={BoardStyle.content_time}> 
                <span>사용시간</span>
                <input type="text" name='startTime' defaultValue={content.startTime} onChange={onChangeHandler} style={{marginRight:"2px"}}/>
                시-
                <input type="text" name='endTime' defaultValue={content.endTime} onChange={onChangeHandler} style={{marginRight:"2px"}}/>시
            </div>
            <div>
            { imageUrl && <img 
                           src={ imageUrl } 
                           className={BoardStyle.Image}
                            alt="preview"
                            style={{width:"400px", height:"200px"}}
                        />}
                          <input                
                            style={ { display: 'none' }}
                            type="file"
                            name='productImage' 
                            accept='image/jpg,image/png,image/jpeg,image/gif'
                            onChange={ onChangeImageUpload }
                            ref={ imageInput }
                        />
                               <div 
                            onClick={ onClickImageUpload } 
                            className={BoardStyle.comment_ok}
                            style={{width:"100px", fontSize:"16px"}} 
                        >
                            이미지 선택
                            </div>
            </div>
            <span>이용안내</span>
            <Editor value={value}  getValue={getValue}/>

            <div className={BoardStyle.button_list}>
            <button onClick={onClickResourceModHandler}>수정</button>
            <button onClick={onClickDeleteHandler}>삭제</button>
            <button><NavLink to="/reservation">취소</NavLink></button>
            </div>
        </div>
    </div>
    )
}

export default ResourceMod;