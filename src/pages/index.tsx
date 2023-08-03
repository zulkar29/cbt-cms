import { Route, Routes } from 'react-router-dom';
import Blogs from './blogs';
import BlogCategories from './blogs/category';
import Categories from './category';
import ChildCategory from './category/child-category';
import Customers from './customers';
import FaqPage from './faqs';
import FaqCategories from './faqs/categories';
import Home from './home';
import AllOrders from './orders';
import Canceled from './orders/canceled';
import Delivered from './orders/delivered';
import PendingOrders from './orders/pending';
import AllProducts from './product';
import Reviews from './reviews';
import StockOutProducts from './stockout-product';
import SubCategory from './category/subcategory';
import VideosPage from './videos';
import CouponPage from './marketing/coupon';
import SetupPage from './setup';
import Header from './setup/header';
import Footer from './setup/footer';
import CommonPages from './setup/pages';
import Sliders from './setup/sliders';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/subcategory" element={<SubCategory />} />
      <Route path="/childcategory" element={<ChildCategory />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/stockout" element={<StockOutProducts />} />
      <Route path="/products/reviews" element={<Reviews />} />
      <Route path="/orders" element={<AllOrders />} />
      <Route path="/orders/pending" element={<PendingOrders />} />
      <Route path="/orders/delivered" element={<Delivered />} />
      <Route path="/orders/canceled" element={<Canceled />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/category" element={<BlogCategories />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/faqs" element={<FaqPage />} />
      <Route path="/faqs/categories" element={<FaqCategories />} />
      {/* Marketing */}
      <Route path="/coupons" element={<CouponPage />} />

      {/* Settings */}
      <Route path="/setup/home-page" element={<SetupPage />} />
      <Route path="/setup/header" element={<Header />} />
      <Route path="/setup/footer" element={<Footer />} />
      <Route path="/setup/sliders" element={<Sliders />} />
      <Route path="/setup/pages" element={<CommonPages />} />
    </Routes>
  );
}
export default PageRoutes;
