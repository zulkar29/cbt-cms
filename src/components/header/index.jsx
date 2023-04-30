import './index.scss';
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__title">React Admin</div>
    </div>
  );
}
