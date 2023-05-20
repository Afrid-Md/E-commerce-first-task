import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StorePage from '../src/Components/StorePage/StorePage'
import AboutPage from './Components/AboutPage/AboutPage';
import HomePage from './Components/Home/HomePage';

const router = createBrowserRouter([
    {path:'/',element:<HomePage/> },
    {path:'/store', element:<StorePage/>},
    {path:'/aboutpage',element:<AboutPage/>}
])
function App() {

  return (
    <RouterProvider router={router}/>    
  );
}

export default App;
