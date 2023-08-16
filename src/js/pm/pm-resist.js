import React from 'react';
import '../pm/css/pm-member.css'
import "../commons/leftnavibar.css"
import PmNav from './pmNav';

function PmMemberResist() {
	return (
<section>
<PmNav/>
<div className="apv-navibox">
        <div className="pm-de-top">
            <div className="pm-div-font">사원 상세 조회</div>
            </div>
            <br />
            <div>
                    <div class="pm-section">
                        <div className='div4'>
                        <div className='div5'>
                        <div className="pm-photobox"></div>
                        <div>
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">이름</div>
                            <input className="pm-input"/>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">주민등록번호</div>
                            <input className="pm-input"/>
                            </div>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">전화번호</div>
                            <input className="pm-input"/>
                            </div>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">생년월일</div>
                            <input className="pm-input"/>
                            </div>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">주소</div>
                            <input className="pm-input"/>
                            </div>
                        </div>
                        <div className="pm-flex">
                            <div className="pm-content">
                            <div className="pm-memberinfo-title">이메일</div>
                            <input className="pm-input"/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div>
                        <div className="pm-content2">
                            <div className="pm-titlebox">가족</div>
                            <div>
                                <div className="pm-titlefontbox">관계</div>
                                <div className="pm-titlefontbox2"></div>
                                <div className="pm-titlefontbox2"></div>
                                <div className="pm-titlefontbox2"></div>
                            </div>
                            <div>
                                <div className="pm-titlefontbox">성명</div>
                                <div className="pm-titlefontbox2"></div>
                                <div className="pm-titlefontbox2"></div>
                                <div className="pm-titlefontbox2"></div>
                            </div>
                            <div>
                                <div className="pm-titlefontbox">생년월일</div>
                                <div className="pm-titlefontbox2"></div>
                                <div className="pm-titlefontbox2"></div>
                                <div className="pm-titlefontbox2"></div>
                            </div>
                            <div>
                                <div className="pm-titlefontbox">학력</div>
                                <div className="pm-titlefontbox2"></div>
                                <div className="pm-titlefontbox2"></div>
                                <div className="pm-titlefontbox2"></div>
                            </div>
                            <div>
                                <div className="pm-titlefontbox4">연락처</div>
                                <div className="pm-titlefontbox3"></div>
                                <div className="pm-titlefontbox3"></div>
                                <div className="pm-titlefontbox3"></div>
                            </div>
                            </div>
                        </div>

                        <div>
                            <div className="pm-content2">
                                <div className="pm-titlebox">학력사항</div>
                                <div>
                                    <div className="pm-titlefontbox">재학기간</div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                </div>
                                <div>
                                    <div className="pm-titlefontbox">학교명</div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                </div>
                                <div>
                                    <div className="pm-titlefontbox">전공</div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                </div>
                                <div>
                                    <div className="pm-titlefontbox">졸업일</div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                </div>
                                <div>
                                    <div className="pm-titlefontbox4">성적</div>
                                    <div className="pm-titlefontbox3"></div>
                                    <div className="pm-titlefontbox3"></div>
                                    <div className="pm-titlefontbox3"></div>
                                </div>
                                </div>
                            </div>

                        <div>
                            <div className="pm-content2">
                                <div className="pm-titlebox">경력사항</div>
                                <div>
                                    <div className="pm-titlefontbox">근무기간</div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                </div>
                                <div>
                                    <div className="pm-titlefontbox">회사명</div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                </div>
                                <div>
                                    <div className="pm-titlefontbox">직위</div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                </div>
                                <div>
                                    <div className="pm-titlefontbox">담당업무</div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                    <div className="pm-titlefontbox2"></div>
                                </div>
                                <div>
                                    <div className="pm-titlefontbox4">퇴사사유</div>
                                    <div className="pm-titlefontbox3"></div>
                                    <div className="pm-titlefontbox3"></div>
                                    <div className="pm-titlefontbox3"></div>
                                </div>
                                </div>
                            </div>

                            <div>
                                <div className="pm-content2">
                                    <div className="pm-titlebox">기타사항</div>
                                    <div>
                                        <div className="pm-titlefontbox">자격증이름</div>
                                        <div className="pm-titlefontbox2"></div>
                                        <div className="pm-titlefontbox2"></div>
                                        <div className="pm-titlefontbox2"></div>
                                    </div>
                                    <div>
                                        <div className="pm-titlefontbox">발급기관명</div>
                                        <div className="pm-titlefontbox2"></div>
                                        <div className="pm-titlefontbox2"></div>
                                        <div className="pm-titlefontbox2"></div>
                                    </div>
                                    <div>
                                        <div className="pm-titlefontbox">발급일자</div>
                                        <div className="pm-titlefontbox2"></div>
                                        <div className="pm-titlefontbox2"></div>
                                        <div className="pm-titlefontbox2"></div>
                                    </div>
                                    <div>
                                        <div className="pm-titlefontbox">만료일자</div>
                                        <div className="pm-titlefontbox2"></div>
                                        <div className="pm-titlefontbox2"></div>
                                        <div className="pm-titlefontbox2"></div>
                                    </div>
                                    <div>
                                        <div className="pm-titlefontbox4">활용수준</div>
                                        <div className="pm-titlefontbox3"></div>
                                        <div className="pm-titlefontbox3"></div>
                                        <div className="pm-titlefontbox3"></div>
                                    </div>
                                    </div>
                                </div>
                    </div>
                    <h6 className="pm-font"> 상기 내용은 사실과 다름없음을 확인합니다.</h6>
                    <h6 className="pm-font">년      월      일</h6>
                    <h6 className="pm-font2">작성자:     (인)</h6>
                </div>
            </div>
            </div>
            <br></br>
                <div className="paging">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
        </div>
    </section>
	);
}

export default PmMemberResist;
