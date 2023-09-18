import { BadRequestErrorPage, ErrorBadResponsePage, ForbiddenErrorPage, UnauthorizedErrorPage } from "./ErrorPages";
import ServerErrorPage from "./ServerErrorPage";
import { PageNotFound } from "./pageNotFound";

window.addEventListener('unhandledrejection', (event) => {
  const error = event.reason;
  if (error instanceof Response) {
    // Fetch 응답 에러 처리
    // 에러 코드에 따라 분기 처리
    const status = error.status;
    if (status === 400) {
      window.location.href = "/error/400"
    } else if (status === 401) {
      window.location.href = "/error/401"
    } else if (status === 403) {
      window.location.href = "/error/403"
    } else if (status === 404) {
      window.location.href = "/error/404"
    } else if (status === 500) {
      window.location.href = "/error/500"
    } else if (status === 1001) {
      alert("5000000000" , error.message);
    }
  }
});




// // fetch 호출을 감싸는 함수
// function fetchWithHandling(url, options) {
//   return fetch(url, options)
//     .then((response) => {
//       if (response.status === 1001) {
//         alert(response.data.message);

//       } else if (!response.ok) {
//         throw new Error(`HTTP Error! Status: ${response.status}`);
//       }
//       return response.json();
//     });
// }