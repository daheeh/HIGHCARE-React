
const ServerErrorPage = () => {
	const handleClickHomeButton = () => {
		window.location.href = "/";
	};

	return (
		<div>
			<p >일시적 서버 장애가 발생하였습니다 </p>
			<p >잠시 후 다시 시도해주세요</p>
			<button onClick={handleClickHomeButton}>홈으로 가기</button>
		</div>
	);
};

export default ServerErrorPage;
