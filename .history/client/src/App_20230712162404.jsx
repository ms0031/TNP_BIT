import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar/Navbar";
import Gallery from "./components/Gallery/Gallery";
import Landing from "./components/Landing/Landing";
import StudentDashboard from "./components/StudentDashBoard/studentDashboard";
import RegisterStudent from "./components/Registers/RegisterStudent";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Router,
  Routes,
  ScrollRestoration,
} from "react-router-dom";

import Notifications from "./components/StudentDashBoard/Notifications/Notifications";
import { Root } from "postcss";
import LoginStudent from "./components/Logins/LoginStudent";
import LoginRecruiter from "./components/Logins/LoginRecruiter";
import Contact from "./components/Contact/Contact";
import Profile from "./components/StudentDashBoard/Profile/Profile";
import PrivateRoute from "./PrivateRoutes";
import Stats from "./components/Stats/Stats";
import Notice from "./components/StudentDashBoard/Notice/Notice";
import AddAcdemics from "./components/StudentDashBoard/Profile/AddAcademics/AddAcdemics";
import TaskList from "./components/StudentDashBoard/TaskList/TaskList";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "../src/components/ErrorPage/ErrorPage.jsx";
import { NavLink } from "react-router-dom";
function App() {
  // Declaration of Router Object
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          index
          element={
            <div>
              <Landing />
              <Stats />
              <Contact />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="*"
          element={
            <div>
              <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                  <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight  text-white font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                      404
                    </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                      Something's missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                      Sorry, we can't find that page. You'll find lots to
                      explore on the home page.
                    </p>
                    <NavLink to="/">Back to Homepage</NavLink>
                  </div>
                </div>
              </section>
            </div>
          }
        ></Route>
        <Route path="loginstudent" element={<LoginStudent />}></Route>
        <Route path="registerstudent" element={<RegisterStudent />}></Route>
        <Route path="loginrecruiter" element={<LoginRecruiter />}></Route>
        <Route path="studentDashboard">
          <Route path="tasklist" element={<TaskList />}></Route>
          <Route
            index
            element={
              <PrivateRoute>
                <StudentDashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="profile">
            <Route
              index
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="addacademics"
              element={
                <PrivateRoute>
                  <AddAcdemics />
                </PrivateRoute>
              }
            ></Route>
          </Route>
          <Route
            path="notice"
            element={
              <PrivateRoute>
                <Notice />
              </PrivateRoute>
            }
          ></Route>
        </Route>
      </Route>
    )
  );
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
