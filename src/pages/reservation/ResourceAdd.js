import { useEffect,useRef, useState } from 'react';
import BoardStyle from '../bulletin/Bullentin.module.css';
import Bmodal from '../bulletin/bmodal/Bmodal';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../bulletin/editor/Editor';

import {
    callResAPI,
    callResRegistAPI
} from '../../apis/ResAPICall';

function ResourceAdd(){
    const dispatch =useDispatch();
    const [value, setValue] = useState('');
    const res = useSelector(state => state.resReducer);
    const resCategory = res.data;
    const [start, setStart] = useState(0);
    const [modal,setModal] = useState(false);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        resourceName: '',
        area: '',
        location: '',
        serviceGuide: '',
        startTime: '',
        endTime: '',
        categoryCode: 0
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

    const onClickResourceRegistHandler = () => {
        const formData = new FormData();

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
        dispatch(callResRegistAPI({
            form: formData
        }));
    }

    return (
        <div className={BoardStyle.content_bullentin_main}>
        <h1 className={BoardStyle.content_title}>시설추가</h1>
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
                <span onClick={openModal}style={{width:'45px', marginLeft:'20px',fontSize:'16px',padding:'2px',textAlign:'center'}}  className={BoardStyle.comment_ok}>추가</span>
            </div>
            <div>
                <span>지역</span>
                <input type="text" name='area' onChange={onChangeHandler}/>
                
             
            </div>

            <div>
                <span>시설이름</span>
                <input type="text" name='resourceName' onChange={onChangeHandler}/>
            </div>

            <div>
                <span>위치</span>
                <input type="text" name='location' onChange={onChangeHandler}/>
            </div>
            <div  className={BoardStyle.content_time} >
                <span>사용시간</span>
                <input type="text" name='startTime' onChange={onChangeHandler}/>
                -
                <input type="text" name='endTime' onChange={onChangeHandler}/>
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
            <Editor value={value} getValue={getValue}/>

            <div className={BoardStyle.button_list}>
            <button onClick={onClickResourceRegistHandler}>등록</button>
            <button>취소</button>
            </div>
        </div>
    </div>
    )
}

export default ResourceAdd;