import React from 'react';
import * as Sentry from '@sentry/react';

class ErrorProneComponent extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    Sentry.captureException(error, errorInfo);
  }

  render() {
    return <div>This is a test error! (Replace with your fallback UI)</div>;
  }
}

export default ErrorProneComponent;