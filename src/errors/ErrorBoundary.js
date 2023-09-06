import { useNavigate } from "react-router-dom";
import React, { Component } from "react";
import { GenericErrorMsg } from "./GenericErrorMessage";
import { PageNotFound } from "./pageNotFound";


function ErrorComponent({ error, resetErrorBoundary }) {
    const navigate = useNavigate();

    return (
        <div>
            <PageNotFound />
        </div>
    );
};

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log(`error = ${error}, errorInfo = ${JSON.stringify(errorInfo)}`)
    }

    render() {
        if (this.state.hasError) {
            return (
                <GenericErrorMsg />
            )
        }
        return this.props.children
    }
}


export { ErrorBoundary, ErrorComponent };

