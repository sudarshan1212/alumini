import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Volunteer from "./pages/Volunteer";
import Alumini from "./pages/Alumini";
import Board from "./pages/Board";
import Events from "./pages/Events";
import Student from "./pages/Student";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header2 from "./components/Header2";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const userInfo = useSelector((state) => state.userAlumini.user);
  return userInfo ? children : <Navigate to="/" replace />;
};
function App() {
  const location = useLocation();
  const userInfo = useSelector((state) => state.userAlumini.user);
  const showHeader2 =
    location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <>
      <div>
        <ScrollToTop />
        {showHeader2 ? <Header2 /> : <Header />}

        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/engage-volunteer" element={<Volunteer />} />
            <Route path="/alumni-association" element={<Alumini />} />
            <Route path="/alumni-board" element={<Board />} />
            <Route path="/alumni-events" element={<Events />} />
            <Route path="/refer-student" element={<Student />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* <Routes>
            <Route
              path="/"
              element={userInfo == null ? <Login /> : <Navigate to="/home" />}
            />
            <Route
              path="/sign-up"
              element={
                userInfo == null ? <Register /> : <Navigate to="/home" />
              }
            />

            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/engage-volunteer"
              element={
                <ProtectedRoute>
                  <Volunteer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alumni-association"
              element={
                <ProtectedRoute>
                  <Alumini />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alumni-board"
              element={
                <ProtectedRoute>
                  <Board />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alumni-events"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
            <Route
              path="/refer-student"
              element={
                <ProtectedRoute>
                  <Student />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gallery"
              element={
                <ProtectedRoute>
                  <Gallery />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact-us"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
          </Routes> */}
        </main>
        {!showHeader2 && <Footer />}
      </div>
    </>
  );
}

export default App;
