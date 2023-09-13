import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import { useEffect, useState, useRef } from "react";
import { decodeJwt } from "../../utils/decodeJwt";

// import "./mymain.css";

import { callMypageProfileSelectAPI } from '../../apis/MypageApiCalls';
import { callProfileInsertAPI } from '../../apis/MypageApiCalls';
import MypageNav from './MypageNav';


function Profile() {
   

    <MypageNav />
    const dispatch = useDispatch();
    const employee = useSelector(state => state.authes); // 회원번호 employee.empNo auth에 있는 계정정보를 다 담고 있음
    const [image, setImage] = useState(null);   
    
    const [imageUrl, setImageUrl] = useState(null);
    const imageInput = useRef();    // 이미지 업 데이트 
    const id = decodeJwt(window.localStorage.getItem("accessToken")).sub;
    const mypage = useSelector(state => state.mypage);
    const [imageLink, setImageLink] = useState('');
    
    console.log("아이디 : ", id);
    console.log("마이페이지에 담긴 정보 : ", mypage);
   
    useEffect(
        () => {
            dispatch(callMypageProfileSelectAPI(employee.empNo));       
          
        }
        , []); 


    const myInfo = mypage?.data?.myEmployee;       
   
    const picture = mypage?.data?.myProfileFile;
    

    console.log("myInfo", myInfo);
    console.log("업데이트 사진", picture?.chName);
    console.log("기본이미지유알엘", imageLink);      
    console.log("이미지유알엘", imageUrl);
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
                        setImageLink(result);
                    }

                }
                fileReader.readAsDataURL(image)
            }
            console.log('check------->',mypage);
            setImageUrl(mypage?.data?.myProfileFile);
            console.log(`=============>  ${mypage?.data?.myProfileFile?.chName}`)
            if(!imageLink){
                    
                setImageLink(`http://localhost:8080/images/${mypage?.data?.myProfileFile?.chName}`);
            } 
        },
        [image]);


    // 이미지 바뀌면 로드
    const onChangeImageUpload = (e) => {

        const image2 = e.target.files[0];
        console.log('image check ', image2)
        if (image2) {
         
          
            setImage(image2);
            console.log('Img URL:', image2);
            
        }
       
    };
     
    const onClickImageUpload = (e) => {

        imageInput.current.click();
        
    };

    // 사진 등록
    const onClickRegistHandler = () => {

        const formData = new FormData();
        formData.append("code", mypage?.data.code); 

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
                <MypageNav />
                
                <div className="profile-form">
                    <div className="double">
                        <div className="content">

                            <h3>프로필사진</h3>
                            <div className="profileRegistration"
                            >
                              
                                { console.dir('check imageUrl ==============> ', `${imageUrl?.chName}`)}
            
                                  <img
                                    className=""
                                    src={imageLink}
                  
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