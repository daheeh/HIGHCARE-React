// 특정 리듀서 제거 => 호출할때 ReduxReset("리듀서이름"); <- 리듀서이름 "문자열"로 호출하여 사용하면 됨
export function ReduxReset(reduxName) {

    // 1. 로컬 스토리지에서 reduxState 데이터 가져오기
    const storedReduxState = localStorage.getItem('reduxState');
    const parsedStoredState = storedReduxState ? JSON.parse(storedReduxState) : {};

    // 2. 특정 리듀서 상태 부분 제거
    const updatedStateWithout = { ...parsedStoredState };
    delete updatedStateWithout[reduxName];

    // 3. 특정 리듀서 제거된 데이터 로컬 스토리지에 다시 저장
    localStorage.setItem('reduxState', JSON.stringify(updatedStateWithout));
}