import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle, Wrapper } from "./App.styles";
import Header from "../components/Header";
import SuspenseFallback from "../components/SuspenseFallback";
import ErrorBoundaryFallback from "../components/ErrorBoundaryFallback";
import { getData } from "../redux/slices/dataSlice";
import { AppDispatch } from "../redux/store";

const Home = lazy(() => import("../pages/Home"));
const Destination = lazy(() => import("../pages/Destination"));
const Crew = lazy(() => import("../pages/Crew"));

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Wrapper>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <Router>
          <GlobalStyle />
          <Header />
          <Suspense fallback={<SuspenseFallback />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/crew" element={<Crew />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </Wrapper>
  );
}

export default App;
