import React from "react";
import { Route, Routes} from "react-router-dom";
import StorePage from "../src/Components/StorePage/StorePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import HomePage from "./Components/Home/HomePage";
import ContactUsPage from "./Components/ContactUsPage/ContactUsPage";
import ProductDetails from "./Components/StorePage/Products/Product-Details";
import Image1 from './Components/StorePage/Images/Album-1.png';
import Image2 from './Components/StorePage/Images/Album-2.png';
import Image3 from './Components/StorePage/Images/Album-3.png';
import Image4 from './Components/StorePage/Images/Album-4.png';
import Tshirt from './Components/StorePage/Images/t-shirt.png';
import CoffeeCup from './Components/StorePage/Images/coffeeCup.png';


// const router = createBrowserRouter([
//     {path:'/',element:<HomePage/> },
//     {path:'/store', element:<StorePage/>},
//     {path:'/aboutpage',element:<AboutPage/>},
//     {path:'/contactus',element:<ContactUsPage/>},
//     {path:'/productdetails/:productId',element:<ProductDetails/>}
// ])
const items=[
  {
    id:'Colors',
    imageSrc:Image1,
    price:100,
    star:4,
    rating:100,
    review:50
  },
  {
    id:'Black-And-White',
    imageSrc:Image2,
    price:50,
    star:4.1,
    rating:90,
    review:40
  },
  {
    id:'Black-And-Yellow',
    imageSrc:Image3,
    price:70,
    star:4.3,
    rating:95,
    review:35
  },
  {
    id:'Blue',
    imageSrc:Image4,
    price:100,
    star:4,
    rating:80,
    review:20
  },
  {
    id:'T-Shirt',
    imageSrc:Tshirt,
    price:300,
    star:4.5,
    rating:200,
    review:70
  },
  {
    id:'Coffee-Cup',
    imageSrc:CoffeeCup,
    price:200,
    star:4.2,
    rating:150,
    review:20
  },

]
function App() {
  return (
    // <RouterProvider router={router}/>
    <Routes>
        <Route path="/"  element={<HomePage />}/>
        <Route path="/store" element={<StorePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path='/store/:productId' element={<ProductDetails items={items}/>}/>

    </Routes>
  );
}

export default App;
