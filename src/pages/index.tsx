import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Categories from './category';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Categories />} />
    </Routes>
  );
}
export default PageRoutes;
