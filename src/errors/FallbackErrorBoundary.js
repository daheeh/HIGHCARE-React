import CommonErrorBoundary from './CommonErrorBoundary'
import { BadRequestErrorPage, ErrorBadResponsePage, ForbiddenErrorPage, UnauthorizedErrorPage } from './ErrorPages';
import ServerErrorPage from './ServerErrorPage';
import { PageNotFound } from './pageNotFound';

class FallbackErrorBoundary extends CommonErrorBoundary {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.error === this.state.error || !this.state.error) {
      return;
    }

    if (prevState.error !== null) {
      this.reset();
    }
  }

  render() {
    const { children } = this.props;
    const errorCode = this.state.error ? String(this.state.error.errorCode) : null;

    switch (errorCode) {
      case '400':
        return <BadRequestErrorPage />;
      case '401':
        return <UnauthorizedErrorPage />;
      case '403':
        return <ForbiddenErrorPage />;
      case '404':
        return <PageNotFound />;
      case '500':
        return <ServerErrorPage />;
      case 'ERR_BAD_RESPONSE':
        return <ErrorBadResponsePage />
      default:
        return children;
    }
  }

  // render() {
  //   const { children, serverErrorFallback, NotFoundErrorFallback } = this.props;

  //   if (this.state.error) {
  //     if (String(this.state.error.errorCode) === '500') {
  //       return serverErrorFallback;
  //     }
  //     return NotFoundErrorFallback;
  //   }

  //   return children;
  // }


}

export default FallbackErrorBoundary;
