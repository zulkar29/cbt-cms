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
import StockOutProducts from './product/stockout';
import SubCategory from './category/subcategory';
import VideosPage from './videos';
import CouponPage from './marketing/coupon';
import SetupPage from './setup';
import Header from './setup/header';
import Footer from './setup/footer';
import CommonPages from './setup/pages';
import Sliders from './setup/sliders';
import CreateCategory from './category/create-category';
import CreateSubcategory from './category/create-subcategory';
import CreateChildCategory from './category/create-childcategory';
import UpdateCategory from './category/update-category';
import UpdateSubcategory from './category/update-subcategory';
import UpdateChildCategory from './category/update-chidcategory';
import CreateVideo from './videos/create-video';
import UpdateVideo from './videos/update-video';
import CreateBlog from './blogs/create';
import UpdateProduct from './product/update-product';
import CreateProduct from './product/create-product';
import OrderView from './orders/view';
import CreateFaq from './faqs/create-faq';
import UpdateFaq from './faqs/update-faq';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* categories */}
      <Route path="/category" element={<Categories />} />
      <Route path="/categories/create" element={<CreateCategory />} />
      <Route path="/categories/edit/:slug" element={<UpdateCategory />} />
      <Route path="/subcategory" element={<SubCategory />} />
      <Route path="/subcategory/create" element={<CreateSubcategory />} />
      <Route path="/subcategory/edit/:slug" element={<UpdateSubcategory />} />
      <Route path="/childcategory" element={<ChildCategory />} />
      <Route path="/childcategory/create" element={<CreateChildCategory />} />
      <Route
        path="/childcategory/edit/:slug"
        element={<UpdateChildCategory />}
      />

      {/* Products */}
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/edit/:slug" element={<UpdateProduct />} />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route path="/products/stockout" element={<StockOutProducts />} />
      <Route path="/products/reviews" element={<Reviews />} />

      {/* Orders */}
      <Route path="/orders" element={<AllOrders />} />
      <Route path="/orders/pending" element={<PendingOrders />} />
      <Route path="/orders/delivered" element={<Delivered />} />
      <Route path="/orders/canceled" element={<Canceled />} />
      <Route path="/orders/views/:slug" element={<OrderView />} />
      {/* Blog */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/create" element={<CreateBlog />} />
      <Route path="/blogs/category" element={<BlogCategories />} />
      <Route path="/customers" element={<Customers />} />
      {/* Videos */}
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/videos/create" element={<CreateVideo />} />
      <Route path="/videos/edit/:slug" element={<UpdateVideo />} />
      {/* Faq */}
      <Route path="/faqs" element={<FaqPage />} />
      <Route path="/faqs/create" element={<CreateFaq />} />
      <Route path="/faqs/edit/:slug" element={<UpdateFaq />} />
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
