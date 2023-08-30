import BoardStyle from './Bullentin.module.css';
import EditorA from './editor/EditorA';
function BullentinWrite(){
<<<<<<< HEAD
=======
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
>>>>>>> cbf19ef5f44a6282cd8ec2213664d24d83426bae
    return (
        <div className={BoardStyle.bullentin_main}>
            <div className={BoardStyle.bullentin_category}>
                <span>
                    게시판 선택
                </span>
                <select></select>
            </div>
            <div style={{width: '96%'}} className={BoardStyle.write_title}>
                <span>제목</span>
                <input type="text" style={{width: '70%'}}/>
            </div>
            {/* <EditorA/> */}
            <div className={BoardStyle.permit}>
                <span>댓글허용</span>
                <input type="radio" name="write-comment" value="ok"/>예
                <input type="radio" name="write-comment" value="no"/>아니오
            </div>
            <div className={BoardStyle.registration}>
                <button>수정</button>
                <button>삭제</button>
                <button>등록</button>
                <button>취소</button>
            </div>
        </div>
    )
}

export default BullentinWrite;