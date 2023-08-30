// class ApiErrorBoundary {

//     static getDerivedStateFromError(error: Error): State {
//         if(impossibleHandledError){
//             return {
//                 shouldHandleError: false, 
//                 shouldRethrow: true, 
//                 error,
//             };
//         }

//         return {
//             shouldHandleError: true,
//             shouldRethrow: false,
//             serializedPagewebError, 
//         };
//     }

//     render(){
//         if(this.state.shouldRethrow){
//             throw this.state.error; 
//         }
//         if(!this.state.shouldHandleError){
//             return this.props.children
//         }
//         if(loginError){
//             return (
//                 <AuthError />
//             )
//         }
//         if(networkError){
//             return (
// 				<NetworkError onClickRetry={() => this.setState({ shouldHandleError: false})} />
//             )
//         }
//         return (
// 			<UnknownError onClickRetry={() => this.setState({ shouldHandleError: false})} />
// 		)

//     }




// }