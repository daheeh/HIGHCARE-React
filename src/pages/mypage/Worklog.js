import "./Worklog.css";

function Worklog() {

    return (

        <div classNameName="packing">
            <div>
                <h1 className="title">업무일지</h1>
            </div>
            <div className="submit-button">
                <button type="submit">등록</button>
                <button type="submot">수정</button>
                <button type="submot">삭제</button>
            </div>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>진행상황</th>
                        <th>업무내용</th>
                        <th>시작일</th>
                        <th>종료일</th>
                        <th>만기일</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                            <select className="categorystate">
                                <option>진행전</option>
                                <option>진행중</option>
                                <option>진행완료</option>진행중
                            </select>
                        </td>
                        <td><input type="text" className="workinput" placeholder="입력" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>

                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                            <select className="categorystate">
                                <option>진행전</option>
                                <option>진행중</option>
                                <option>진행완료</option>진행중
                            </select>
                        </td>
                        <td><input type="text" className="workinput" placeholder="입력" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                            <select className="categorystate">
                                <option>진행전</option>
                                <option>진행중</option>
                                <option>진행완료</option>진행중
                            </select>
                        </td>
                        <td><input type="text" className="workinput" placeholder="입력" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                            <select className="categorystate">
                                <option>진행전</option>
                                <option>진행중</option>
                                <option>진행완료</option>진행중
                            </select>
                        </td>
                        <td><input type="text" className="workinput" placeholder="입력" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>
                            <select className="categorystate">
                                <option>진행전</option>
                                <option>진행중</option>
                                <option>진행완료</option>진행중
                            </select>
                        </td>
                        <td><input type="text" className="workinput" placeholder="입력" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                        <td className="column2"><input className="input1" type="date" /></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )

}


export default Worklog;