import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StorePage from '../src/Components/StorePage/StorePage'
import AboutPage from './Components/AboutPage/AboutPage';
import HomePage from './Components/Home/HomePage';
import ContactUsPage from './Components/ContactUsPage/ContactUsPage'

const router = createBrowserRouter([
    {path:'/',element:<HomePage/> },
    {path:'/store', element:<StorePage/>},
    {path:'/aboutpage',element:<AboutPage/>},
    {path:'/contactus',element:<ContactUsPage/>},
])
function App() {

  return (
    <RouterProvider router={router}/>    
  );
}

export default App;
