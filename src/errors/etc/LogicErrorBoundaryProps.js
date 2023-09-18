import axios from 'axios';

export function fetchData() {
  return axios.get('/api/data');
}

export function sendRequest() {
  return axios.post('/api/request');
}

export function CustomError(message, code) {
  this.message = message;
  this.code = code;
}

export function ErrorBoundaryState() {
  return {
    error: null,
  };
}

export function LogicErrorBoundaryProps() {
  return {
    showSnackBar: null,
    navigate: null,
    mutateDeleteRefreshToken: null,
  };
}

export function FallbackErrorBoundaryProps() {
  return {
    serverErrorFallback: null,
    NotFoundErrorFallback: null,
  };
}
