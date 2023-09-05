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
    const [image, setImage] = useState(null);   
    // const [imageUrl, setImageUrl] = useState(`{http://localhost:8080/images/basic.jpg}`);
    const [imageUrl, setImageUrl] = useState(null);
    const imageInput = useRef();    // 이미지 업 데이트 
    const id = decodeJwt(window.localStorage.getItem("accessToken")).sub;

    const mypage = useSelector(state => state.mypage);

    console.log("아이디 : ", id);
    console.log("마이페이지에 담긴 정보 : ", mypage);

    //  employee empNo로 조회
    useEffect(
        () => {
            dispatch(callMypageProfileSelectAPI(employee.empNo));       
            /// empNo로 불러오기
        }
        , []); // 빈배열이면 랜더링 한번 되고 Apicalls를 준다.  


    const myInfo = mypage?.data?.myEmployee;        // myEmployee에 담긴 값 
    // const picture = mypage?.data?.myProfileFile;    // myprofileFile에 담긴 값
    const picture = mypage?.data?.myProfileFile;
    // 데이터를 비동기적으로 가져오는 경우 이미지URL이 아직 로드되지 않았을 수 있음 -> 오류 발생
    // 이미지URL을 로드할때 이미지가 사용 가능한 경우에만 렌더링하도록 해서 해결할 수 있음

    console.log("myInfo", myInfo);
    console.log("업데이트 사진", picture?.chName);
    console.log("기본이미지유알엘", imageUrl);      // useEffect 위로 올리면 null로 들어옴
    // //이미지
    useEffect(
        () => {
            if (image) {
                const fileReader = new FileReader();

                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        console.log('check result : ', result)
                        setImageUrl(result);    // payload의 결과
                    }

                }
                fileReader.readAsDataURL(image)
            }
        },
        [image]);


    // 이미지 바뀌면 로드
    const onChangeImageUpload = (e) => {

        const image2 = e.target.files[0];
        console.log('image check ', image2)
        if (image2) {
         
            // setImageUrl(image2);
            setImage(image2);
            console.log('Img URL:', image2);
        }
        // setImage(imageUrl);
    };

    // 이미지업로드 클릭
    const onClickImageUpload = (e) => {

        imageInput.current.click();
        
    };

    // 사진 등록
    const onClickRegistHandler = () => {

        const formData = new FormData();
        formData.append("code", mypage?.data.code); // 코드필드값을 가져오는것
        // data 객체의 필드명이 code인거같은데 필드명을 어디서 확인할 수 있는지 물어보기

        if (imageUrl) {
            formData.append("profileImage", image);
        }

        console.log('!!!!!ImageRegistration RegistrationHandler', formData.get("code"));
        console.log('formData check : ', image);
        // 넘길 값 추가해보기
        dispatch(callProfileInsertAPI({
            form : formData
        }));

    };

        console.log();
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
                                {/* { console.log('check ==============> ',picture.chName)} */}
                                { console.log('check imageUrl ==============> ', imageUrl)}
                                {
                                    // d이미지유알엘이 빈값이라 진입못함
                                  <img
                                    className=""
                                    src={imageUrl ? imageUrl :  `http://localhost:8080/images/${picture?.chName}`}
                                    // src={picture.chName !== undefiend? `http://localhost:8080/images/${picture.chName}` : imageUrl}
                                    // src = {imageUrl}
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
                                readOnly maxLength="20" value={myInfo?.name} />
                            <h3>직급</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                readOnly maxLength="20" value={myInfo?.job.name} />
                            <h3>전화번호</h3>
                            <input type="tel" id="user_ph" className="text-field" maxLength="16" readOnly value={myInfo?.phone} />
                        </div>


                        <div className="content2">
                            <h3>아이디</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                maxLength="20" readOnly value={id} />
                            <h3>부서</h3>
                            <input type="text" name="user_pw" id="user_pw" className="text-field" readOnly
                                maxLength="20" value={myInfo?.dep.name} />
                            <h3>부서번호</h3>
                            <input type="text" name="user_name" id="user_name" className="text-field"
                                maxLength="20" readOnly value={myInfo?.tel} />
                            <h3>이메일</h3>
                            <div className="email-form">
                                <input type="text" name="user_name" id="user_name" className="text-field" value={myInfo?.email} maxLength="20" readOnly />
                            </div>
                            <h3>주소</h3>
                            <div className="address-form">
                                <input type="text" name="user_name" id="user_name" className="text-field" value={myInfo?.address} maxLength="20" readOnly />
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