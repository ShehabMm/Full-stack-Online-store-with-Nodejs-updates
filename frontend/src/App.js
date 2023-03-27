import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "pages/cart/Cart";
import Productdetails from "pages/productDetails/ProductDetails";
import SwiperComponent from "pages/swiper/swiper"
import NotFound from "./pages/NotFound";
import ContactForm from './MUI-components/form/form.jsx'
import RealContact from "./MUI-components/realContac/realContact";
 




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="Productdetails/:id" element={<Productdetails />} />
      <Route path="SwiperComponent" element={<SwiperComponent />} />
      <Route path="ContactForm" element={<ContactForm />} />
      <Route path="RealContact" element={<RealContact />} />

      RealContact


      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
