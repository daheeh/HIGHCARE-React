import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { useEffect, useState, useRef } from "react";
import { decodeJwt } from "../../utils/decodeJwt";

// import "./mymain.css";

import { callMypageProfileSelectAPI } from '../../apis/MypageApiCalls';
import { callProfileInsertAPI } from '../../apis/MypageApiCalls';


function Profile() {

    const dispatch = useDispatch();
    const employee = useSelector(state => state.authes); // 회원번호 employee.empNo auth에 있는 계정정보를 다 담고 있음

        // mypage에 담긴 값 가져오기
        const mypage = useSelector(state => state.mypage);
        console.log("mypage", mypage);

     // employee empNo로 조회
     useEffect(
        () => {
            dispatch(callMypageProfileSelectAPI(employee.empNo));       // 나중에 mypage에서 불러오는걸로 바꿔보기
            /// empNo로 불러오기
        }
        , []); // 빈배열이면 랜더링 한번 되고 Apicalls를 준다.  

        // useEffect(() => {
        //     async function fetchData() {
        //       // You can await here
        //       const response = await MyAPI.getData(someId);
        //       // ...
        //     }
        //     fetchData();
        //   }, [someId]);    

    // useEffect(() => {
    //         async function fetchData() {
    //           // You can await here
    //           const response = await callMypageProfileSelectAPI.getData(employee.empNo);
    //         //   await  dispatch({ type: GET_MYPAGE_SELECT, payload: result });
    //         //   // ...
    //         // return response;

    //         }
    //         fetchData();
    //       }, []);    

    //     useEffect(() => {
    // async function fetchData() {
    //     try {
    //     // 함수 내에서 await를 사용하여 데이터를 가져옵니다.
    //     const response = await callMypageProfileSelectAPI.getData(employee.empNo);
        
    //     // 데이터를 사용하는 코드를 이곳에 추가하세요.
    //     // 예를 들어, 데이터를 Redux에 저장하거나 다른 작업을 수행할 수 있습니다.
    //     } catch (error) {
    //     // 오류 처리 코드를 추가할 수도 있습니다.
    //     console.error(error);
    //     }
    // }
    
    // // fetchData 함수를 호출합니다.
    // fetchData();
    // }, []);

   

    const [image, setImage] = useState(null);   // 값 변경이 있으니까 이것을 APICall로 넘겨주기 때문에 ApiCalls로 값을 넘겨준다 한다.
    const [imageUrl, setImageUrl] = useState(`{http://localhost:8080/images/basic.jpg}`);
    // const [modifyMode, setModifyMode] = useState(false);

    const imageInput = useRef();


    const id = decodeJwt(window.localStorage.getItem("accessToken")).sub;
    console.log("아이디",id);


    console.log('profile firslt :');



    const myInfo = mypage?.data?.myEmployee;

    // const myProfileFile = mypage?.data?.myProfileFile;
    const picture = mypage?.data?.myProfileFile;

    console.log("myInfo", myInfo);
    console.log("업데이트 사진", picture.chName);
    console.log("기본이미지유알엘", imageUrl);



    //이미지
    useEffect(
        () => {
            if (image) {
                const fileReader = new FileReader();

                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        setImageUrl(result);
                    }

                }
                fileReader.readAsDataURL(image);
            }
        },
        [image]);




    // 이미지 바뀌면 로드
    const onChangeImageUpload = (e) => {

        const image = e.target.files[0];

        if (image) {
            setImageUrl(image);
            console.log('Img URL:', image);
        }
    };

    // 이미지클릭
    const onClickImageUpload = (e) => {
        imageInput.current.click();


    };

    // 사진 등록
    const onClickRegistHandler = () => {

        const formData = new FormData();
        formData.append("code", mypage?.data.code);


        console.log("formData", formData);
        console.log("image", image);

        if (image) {
            formData.append("profileImage", image);
        }

        console.log('!!!!!ImageRegistration RegistrationHandler', formData.get("profileImage"));

        dispatch(callProfileInsertAPI({
            form: formData
        }));


    };


    return (
        <>
            <section>
                <div className="leftmenu">
                    <div className="leftmenu1"></div>
                    <div className="leftmenu2">
                        <div className="mainlogo">
                            <img src="/" />

                        </div>
                        <div className="maintitle">
                            <a href="#">마이페이지</a>
                        </div>
                        <div className="apv-navibox">
                            <div className="apv-navibox-top">
                                <a href="#">프로필수정</a>
                            </div>
                            <ul className="apv-navibox-ul">
                                <li>수집명함 등록</li>
                                <li>수집명함 조회</li>
                            </ul>
                            <div className="apv-navibox-emp"></div>
                            <div className="apv-navibox-maintitle">
                                <a href="#">나의근태조회</a>
                            </div>
                            <div className="apv-navibox-emp"></div>
                            <div className="apv-navibox-maintitle">
                                <a href="/HTML/approval/receivebox.html">나의연차조회</a>
                            </div>
                            <div className="apv-navibox-emp"></div>
                            <div className="apv-navibox-maintitle">마이템플릿</div>
                            <ul className="apv-navibox-ul">
                                <li><a href="/HTML/approval/hrm1.html">업무일지</a></li>
                                <li><a href="/HTML/approval/exp1.html">상담일지</a></li>
                            </ul>
                            <div className="apv-navibox-emp"></div>
                            <div className="apv-navibox-maintitle">
                                <a href="">캘린더</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 아이디 주민번호 입사일 직급 --> */}
                <div className="profile-form">
                    <div className="double">
                        <div className="content">

                            <h3>프로필사진</h3>
                            <div className="profileRegistration"
                            >
                                {imageUrl && <img
                                    className=""
                                    src={picture.chName !== undefined ? `http://localhost:8080/images/${picture.chName}` : imageUrl}
                                    alt="preview"
                                    style={{ width: 180, height: 120 }}
                                />}
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    name='profileImage'
                                    accept='image/jpg,image/png,image/jpeg,image/gif'
                                    onChange={onChangeImageUpload}
                                    ref={imageInput}
                                />
                                <button style={{ fontSize: 16, width: 120, height: 30 }}
                                    onClick={onClickImageUpload}
                                >이미지업로드
                                </button>
                                <button style={{ fontSize: 16, width: 120, height: 30 }}
                                    onClick={onClickRegistHandler}
                                >사진등록

                                </button>
                            </div>

                            {/* <!--  프로필사진을 클릭하면 수정 가능 --> */}
                            <div >
                            </div>
                            <h3>이름</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                readOnly maxlength="20" value={myInfo?.name} />
                            <h3>직급</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                readOnly maxlength="20" value={myInfo?.job.name} />
                            <h3>전화번호</h3>
                            <input type="tel" id="user_ph" className="text-field" maxlength="16" readOnly value={myInfo?.phone} />
                        </div>


                        <div className="content2">
                            <h3>아이디</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                maxlength="20" readOnly value={id}/>
                            <h3>부서</h3>
                            <input type="text" name="user_pw" id="user_pw" className="text-field" readOnly
                                maxlength="20" value={myInfo?.dep.name} />
                            <h3>부서번호</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                maxlength="20" readOnly value={myInfo?.tel} />
                            <h3>이메일</h3>
                            <div className="email-form">
                                <input type="text" name="user_name" id="user_name" className="text-field" value={myInfo?.email} maxlength="20" readOnly />
                            </div>
                            <h3>주소</h3>
                            <div className="address-form">
                                <input type="text" name="user_name" id="user_name" className="text-field" value={myInfo?.address} maxlength="20" readOnly />
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}


// }

export default Profile;