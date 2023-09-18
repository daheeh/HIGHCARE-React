import { useNavigate } from "react-router-dom";
import React, { Component, useState } from "react";
import { PageNotFound } from "../pageNotFound";
import { Modal } from "@mui/material";


function ErrorComponent({ error, resetErrorBoundary }) {
    return (
        <div>
            <PageNotFound />
        </div>
    );
};

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    // 에러가 발생됐을 때 호출되는 메서드 
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    // 에러를 로깅하거나 에러 리포팅 서비스에 보낼 수 있음 
    componentDidCatch(error, errorInfo) {
        console.log(`error = ${error}, errorInfo = ${JSON.stringify(errorInfo)}`)
        // 에러 리포팅 서비스에 에러를 보내는 코드 추가 가능 
    }

    render() {
        if (this.state.hasError) {
            // 에러가 발생한 경우 모달 컴포넌트를 렌더링
            return (
                <Modal
                    isOpen={true} // 모달을 열기
                    onRequestClose={() => {
                        // 모달을 닫기 (상태 업데이트)
                        this.setState({ hasError: false });
                    }}
                    contentLabel="Error Modal"
                >
                    <h2>Error</h2>
                    <p>{this.props.error}</p>
                    <button
                        onClick={() => {
                            // 모달을 닫기 (상태 업데이트)
                            this.setState({ hasError: false });
                        }}
                    >
                        Close
                    </button>
                </Modal>
            );
        }
        // 정상적인 컴포넌트 내용을 렌더링 
        return this.props.children;
    }
}

export { ErrorBoundary, ErrorComponent };
