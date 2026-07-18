import { AppRouter } from "./router";

import { ErrorBoundary } from "./providers/ErrorBoundary";

import "normalize.css";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </>
  );
}

export default App;
