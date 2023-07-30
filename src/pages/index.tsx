import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Categories from './category';
import SubCategory from './subcategory';
import ChildCategory from './child-category';
import AllProducts from './product';
import StockOutProducts from './stockout-product';
import Reviews from './reviews';
import AllOrders from './orders';
import PendingOrders from './orders/pending';
import Delivered from './orders/delivered';
import Canceled from './orders/canceled';
import Blogs from './blogs';
import BlogCategories from './blogs/category';
import Customers from './customers';
import VideosPage from './videos';

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
    </Routes>
  );
}
export default PageRoutes;
