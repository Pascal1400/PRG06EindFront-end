import react, {useEffect, useState} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Layout from "./components/Layout.jsx";
import Home from "./Home.jsx";
import Records from "./Records.jsx";
import RecordDetail from "./RecordDetail.jsx"
import CreateRecord from "./RecordCreate.jsx"
import EditRecord from "./RecordEdit.jsx"

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/records',
                element: <Records />,
            },
            {
                path: '/create',
                element: <CreateRecord />,
            },
            {
                path: '/record/:id',
                element: <RecordDetail />,
            },
            {
                path: '/edit/:id',
                element: <EditRecord />,
            },
        ],
    },
]);


function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App
