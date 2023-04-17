import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/home_page";
import RecruitmentAsAService from "./pages/recruitment_as_a_service";
import {ContactPage} from "./pages/contact_page";
import {TermsPage} from "./pages/terms/terms";
import {CoreValues} from "./pages/core_values/core_values";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/contact",
        element: <ContactPage/>,
    },
    {
        path: "/terms",
        element: <TermsPage/>,
    },
    {
        path: "/core_values",
        element: <CoreValues/>,
    },
    {
        path: "/recruitment_as_a_service",
        element: <RecruitmentAsAService/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

