import { useEffect,useRef, useState } from 'react';
import BoardStyle from '../bulletin/Bullentin.module.css';
import Bmodal from '../bulletin/bmodal/Bmodal';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../bulletin/editor/Editor';

import {
    callResAPI,
    callResModAPI
} from '../../apis/ResAPICall';

function ResourceMod(){
    const dispatch =useDispatch();
    const res = useSelector(state => state.resReducer);
    const resCategory = res.data;
    const resContent = useSelector(state => state.resContentReducer);
    const content = resContent.data;
    const [value, setValue] = useState( content.serviceGuide);
    const [start, setStart] = useState(0);
    const [modal,setModal] = useState(false);
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


    	const openModal = () => {
		setModal(true);
	};

	const closeModal = () =>{
		setModal(false);
        setStart(start+1);
	};

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

    const onClickResourceModHandler = () => {
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
        dispatch(callResModAPI({
            form: formData
        }));
    }

    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>시설관리</h1>
            {modal && <Bmodal onClose={closeModal}/>}
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
                <span onClick={openModal}>추가하기</span>
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
            <div>
                <span>사용시간</span>
                <input type="text" name='startTime' defaultValue={content.startTime} onChange={onChangeHandler}/>
                -
                <input type="text" name='endTime' defaultValue={content.endTime} onChange={onChangeHandler}/>
            </div>
            <div>
            { imageUrl && <img 
                           src={ imageUrl } 
                           className={BoardStyle.Image}
                            alt="preview"
                        />}
                          <input                
                            style={ { display: 'none' }}
                            type="file"
                            name='productImage' 
                            accept='image/jpg,image/png,image/jpeg,image/gif'
                            onChange={ onChangeImageUpload }
                            ref={ imageInput }
                        />
                        <button 
                            onClick={ onClickImageUpload } 
                        >
                            이미지 업로드
                            </button>
            </div>
            <span>이용안내</span>
            <Editor value={value}  getValue={getValue}/>

            <div className={BoardStyle.button_list}>
            <button onClick={onClickResourceModHandler}>수정</button>
            <button>삭제</button>
            <button>취소</button>
            </div>
        </div>
    </div>
    )
}

export default ResourceMod;