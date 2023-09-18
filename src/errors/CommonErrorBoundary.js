import { Component } from 'react';

class CommonErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  reset() {
    this.setState({ error: null });
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  render() {
    return this.props.children;
  }
}

export default CommonErrorBoundary;
