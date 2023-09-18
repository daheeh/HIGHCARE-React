class LogicErrorBoundary extends CommonErrorBoundary {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(_, prevState) {
		if (prevState.error === this.state.error || !this.state.error) {
			return;
		}

		const { showSnackBar, navigate } = this.props;

		const errorCode = this.state.error.errorCode;

		if (
			typeof errorCode === 'undefined' ||
			typeof showSnackBar === 'undefined' ||
			typeof navigate === 'undefined'
		) {
			throw new CustomError('9999', '빠진 인자가 없는지 확인해주세요');
		}
		const errorMessage = ErrorMessage[errorCode];

		if (isExpiredTokenError(errorCode)) {
			navigate(URL.REFRESH_TOKEN_HANDLER);
		}

		if (isVoteError(errorCode)) {
			navigate(-1);
		}

		if (isNotAccessVoteError(errorCode)) {
			navigate(URL.CATEGORY_DISCUSSION);
		}

		if (isCommentError(errorCode)) {
			queryClient.invalidateQueries('comments');
		}

		if (isAlreayLoginRefreshTokenError(errorCode)) {
			navigate(URL.HOME);
		}

		if (isInvalidRefreshTokenError(errorCode)) {
			localStorage.removeItem(ACCESSTOKEN_KEY);
			window.location.href = URL.HOME;
		}
      // 모든 에러에 대해서는 스낵바를 보여준다.
		showSnackBar(errorMessage);

      // Server에러나 NotFound에러는 LogicErrorBoundary의 부모인 FallbackErrorBoundary에게 에러를 던져 처리를 위임한다.
		if (isServerError(errorCode) || isNotFoundArticleError(errorCode)) {
			throw new CustomError(errorCode);
		}

		if (this.state.error !== null && prevState.error !== null) {
			this.reset();
		}
	}
}
