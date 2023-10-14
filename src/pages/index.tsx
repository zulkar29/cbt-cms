import { Route, Routes } from 'react-router-dom';
import {
  Blogs,
  Categories,
  ChildCategory,
  Customers,
  FaqPage,
  FaqCategories,
  Home,
  AllOrders,
  Canceled,
  Delivered,
  PendingOrders,
  AllProducts,
  Reviews,
  StockOutProducts,
  SubCategory,
  VideosPage,
  CouponPage,
  SetupPage,
  Header,
  Footer,
  CommonPages,
  Sliders,
  CreateCategory,
  CreateSubcategory,
  CreateChildCategory,
  UpdateCategory,
  UpdateSubcategory,
  UpdateChildCategory,
  CreateVideo,
  UpdateVideo,
  CreateBlog,
  UpdateProduct,
  CreateProduct,
  OrderView,
  CreateFaq,
  UpdateFaq,
  UpdateBlog,
  TicketPage,
  Queries,
  Subscriber,
} from './pages';

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
      <Route path="/blogs/edit/:id" element={<UpdateBlog />} />
      {/* Customers */}
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

      {/* Support */}
      <Route path="/support" element={<TicketPage />} />
      <Route path="/queries" element={<Queries />} />
      <Route path="/subscriber" element={<Subscriber />} />

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
