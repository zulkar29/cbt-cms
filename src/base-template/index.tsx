import "./index.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import PageRoutes from "../pages";
import SideBar from "../components/sidebar";
function BaseTemplate() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>

        <div className="col-md-10">
          <Header />
          <PageRoutes />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default BaseTemplate;
