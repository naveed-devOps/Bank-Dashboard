import './Header.css';
import logo from '../assets/logo.png';
import search from '../assets/search-logo.png';
import setting from '../assets/settings-logo.png';
import notification from '../assets/notification-logo.png';
import user from '../assets/user.png';

function Header() {
  return ( 

    <div className="box">
    <header className="header">
      <div className="overlap">
        <div className="group">
          <div className="div">
            <img className="mask-group" alt="Mask group" src={user}/>
            <div className="settings-wrapper">
              <img className="settings" alt="Settings" src={setting} />
            </div>
            <div className="element-notification-wrapper">
              <img className="element-notification" alt="Element notification" src={notification} />
            </div>
            <div className="text-wrapper">Overview</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <img className="magnifying-glass" alt="Magnifying glass" src={search} />
                <div className="text-wrapper-2">Search for something</div>
              </div>
            </div>
          </div>
          <div className="logo">
            <img className="iconfinder-vector" alt="Iconfinder vector" src={logo}  />
            <div className="text-wrapper-3">BankDash.</div>
          </div>
        </div>
      </div>
      <div className="rectangle" />
    </header>
  </div>

  )};

  export default Header;