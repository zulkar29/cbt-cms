import "./index.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import PageRoutes from "../pages";
import SideBar from "../components/sidebar";
function BaseTemplate() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
         
          <div className="col-md-3">
            <SideBar />
          </div>
         
          <div className="col-md-9">

            <PageRoutes />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
export default BaseTemplate;
