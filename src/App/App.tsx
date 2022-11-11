import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle, Wrapper } from "./App.styles";
import Header from "../components/Header";
import SuspenseFallback from "../components/SuspenseFallback";
import ErrorBoundaryFallback from "../components/ErrorBoundaryFallback";

const Home = lazy(() => import("../pages/Home"));

function App() {
  return (
    <Wrapper>
      <ErrorBoundary FallbackComponent={<ErrorBoundaryFallback />}>
        <Router>
          <GlobalStyle />
          <Header />
          <Suspense fallback={<SuspenseFallback />}>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </Wrapper>
  );
}

export default App;
