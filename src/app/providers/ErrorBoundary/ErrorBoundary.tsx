import { Component, type ErrorInfo } from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 12px;
`;

const Message = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 24px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0b835b;
  }
`;

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("ErrorBoundary global ", error, errorInfo);
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    return this.state.hasError ? (
      <Container>
        <Title>Что-то пошло не так</Title>
        <Message>{this.state.error?.message || "Неизвестная ошибка"}</Message>
        <Button onClick={this.resetError}>Попробовать снова</Button>
      </Container>
    ) : (
      this.props.children
    );
  }
}
