import BoardStyle from './Bullentin.module.css';
import Editor from './editor/Editor';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import {
    callRegisterAPI
} from '../../apis/BulletinAPICall';


function BullentinWrite(){
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const board = useSelector(state => state.boardtest);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        categoryCode: 3,
        content: '',
        title: '',
        allowComments: '',
        empNo: empNo
    });
    useEffect(() =>{
        if(board.status == 201){
            navigate("/bulletin/board/1",{replace: true})
        }
    },
    [board]);


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
    const onClickBackHandler = () => {
        navigate("/bulletin/board/1",{replace: true})
    }

    function changeFn(){
		var categoryCodea  = document.getElementById("categoryCode");
		setForm({
           ...form, 
           categoryCode :(categoryCodea.options[categoryCodea.selectedIndex].value)
        })
        console.log('함수 categorycode : ' , form.categoryCode);
	};
    return (
        <div className={BoardStyle.bullentin_main}>
            <div className={BoardStyle.bullentin_category}>
                <span>
                    게시판 선택
                </span>
                <select id='categoryCode' name='categoryCode' onChange={changeFn}>
                        <option value={3}>자유게시판</option>   
                        <option value={4}>공지사항</option>   
             
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
                <button onClick={onClickBackHandler}>취소</button>
            </div>
        </div>
    )
}

export default BullentinWrite;