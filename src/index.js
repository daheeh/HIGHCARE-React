import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store';
import Modal from 'react-modal';
import FallbackErrorBoundary from './errors/FallbackErrorBoundary'

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));


const UnhandledRejection = (event) => {
  console.log('Unhandled promise rejection: event', event);
  // console.log('Unhandled promise rejection: event', event.reason.message);
  const error = event.reason;
  // console.error('Unhandled promise rejection:', error);

  if (error instanceof Error) {
    console.log('Unhandled promise rejection:', error);
    alert(error.message)
    // window.location.href ="/";

  } else if (error instanceof Response) {
    // Fetch 응답 에러 처리
    const status = error.status;
    if (status === 400) {
      // window.location.href = "/error/400";
      console.log("400 error ");
      // alert(error.message);

    } else if (status === 401) {
      console.log("권한이 없습니다.");

    } else if (status === 403) {
      console.log("인증되지 않은 사용자입니다.");

    } else if (status === 404) {
      window.location.href="/error/404"

    } else if (status === 500) {
      console.log("서버 에러 --------> " , error.message);

    } else if (status === 1001) {
      alert("해당 요청에 대한 권한이 없습니다.")
      // HTTP 상태 코드 1001 처리
      // 에러 메시지를 가져와서 alert로 표시

      error.text().then((responseText) => {
        alert(`HTTP Error! Status: ${status}, Response: ${responseText}`);
      });
    }
  }
};

window.addEventListener('unhandledrejection', UnhandledRejection);

root.render(

    <Provider store={store}>
      
        <FallbackErrorBoundary
        >
                <App />
        </FallbackErrorBoundary>

    </Provider>
);
