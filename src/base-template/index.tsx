import './index.scss';
import Header from '../components/header';
import PageRoutes from '../pages';
import SideBar from '../components/sidebar';
import { useAppSelector } from '../redux/hooks';
import Login from '../pages/login';
function BaseTemplate() {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="container-fluid">
      {user && user?.user?.role_id === 1 ? (
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>

          <div className="col-md-10">
            <Header />
            <main className="main-area">
              <PageRoutes />
            </main>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
export default BaseTemplate;
