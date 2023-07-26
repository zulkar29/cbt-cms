import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Categories from './category';
import SubCategory from './subcategory';
import ChildCategory from './child-category';
import AllProducts from './product';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/subcategory" element={<SubCategory />} />
      <Route path="/childcategory" element={<ChildCategory />} />
      <Route path="/products" element={<AllProducts />} />
    </Routes>
  );
}
export default PageRoutes;
