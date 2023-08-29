import BoardStyle from './Bullentin.module.css';
import Editor from './editor/Editor';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import {
    callUpdateAPI,
    callBoardDetailAPI,
    callDeleteAPI
} from '../../apis/BulletinAPICall';


function BullentinMod(){
    const authes = useSelector(state => state.authes);
    const empNo = authes.empNo;
    const bulletinCode = useParams().bulletinCode;
    const board = useSelector(state => state.boardtest);
    const boardDetail = board.data;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        content: boardDetail.content,
        title: boardDetail.title,
        empNo: empNo,
        bulletinCode: bulletinCode
    });
    useEffect(() =>{
        dispatch(callBoardDetailAPI({
            bulletinCode: bulletinCode
        }));
    },
    []);
    
    
    const [value, setValue] = useState(boardDetail.content);
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
    const onClickUpdate = () =>{
        dispatch(callUpdateAPI({
            form:form
        }));
            navigate("/bulletin/board/1",{replace: true})
        
    }
    const onClickDelete = () =>{
        dispatch(callDeleteAPI({
            form:form
        }));
        navigate("/bulletin/board/1",{replace: true})
    }


    const onClickBackHandler = () => {
        navigate("/bulletin/board/1",{replace: true})
    }


    return (
        <div className={BoardStyle.bullentin_main}>
           
            <div style={{width: '96%'}} className={BoardStyle.write_title}>
                <span>제목</span>
                <input type="text" onChange={onChangeHandler} style={{width: '70%'}} name='title' defaultValue={boardDetail.title}/>
            </div>
            {/* <EditorA/> */}
            <Editor value={value} getValue={getValue}/>
            <div className={BoardStyle.registration}>
                 <button onClick={onClickUpdate}>수정</button>
                <button onClick={onClickDelete}>삭제</button> 
                <button onClick={onClickBackHandler}>취소</button>
            </div>
        </div>
    )
}

export default BullentinMod;