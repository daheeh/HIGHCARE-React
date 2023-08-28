import BoardStyle from './Bullentin.module.css';
import Editor from './editor/Editor';
import { useEffect, useState } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import {
    callBulletinNavAPI,
    callRegisterAPI
} from '../../apis/BulletinAPICall';
function BullentinWrite(){
    const bulletins = useSelector(state => state.boardtest);
    const dispatch = useDispatch();
	useEffect(
		() =>{
			dispatch(callBulletinNavAPI());
		}
		,[]
	);
    const [form, setForm] = useState({
        categoryCode: 1,
        content: '',
        title: '',
        allowComments: ''
    });
    const [value, setValue] = useState('');
    const getValue = (x) =>{
        setValue(x)
        setForm({
            ...form,
            content: x
        });
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };   
    const onClickWrite = () =>{
        dispatch(callRegisterAPI({
            form:form
        }));
    }

    function changeFn(){
		var categoryCodea  = document.getElementById("categoryCode");
		setForm({
           ...form, 
           categoryCode :(categoryCodea.options[categoryCodea.selectedIndex].value)
        })
	};
    return (
        <div className={BoardStyle.bullentin_main}>
            <div className={BoardStyle.bullentin_category}>
                <span>
                    게시판 선택
                </span>
                <select id='categoryCode' name='categoryCode' onChange={changeFn}>
                {Array.isArray(bulletins) && bulletins.map(
                    (bulletin) => (
                        <option key={bulletin.categoryCode} value={bulletin.categoryCode}>{bulletin.nameBoard}</option>   
                    )
                )}
                </select>
       
            </div>
            <div style={{width: '96%'}} className={BoardStyle.write_title}>
                <span>제목</span>
                <input type="text" onChange={onChangeHandler} style={{width: '70%'}} name='title' />
            </div>
            {/* <EditorA/> */}
            <Editor value={value} getValue={getValue}/>
            <div className={BoardStyle.permit}>
                <span>댓글허용</span>
                <input type="radio" name="allowComments" value="Y" onClick={onChangeHandler}/>예
                <input type="radio" name="allowComments" value="N" onClick={onChangeHandler}/>아니오
            </div>
            <div className={BoardStyle.registration}>
                <button onClick={onClickWrite}>등록</button>
                <button>취소</button>
            </div>
        </div>
    )
}

export default BullentinWrite;