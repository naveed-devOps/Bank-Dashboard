import './Header.css';
import logo from '../assets/logo.png';
import search from '../assets/search-logo.png';
import setting from '../assets/settings-logo.png';
import notification from '../assets/notification-logo.png';
import user from '../assets/user.png';

function Header() {
  return ( 

    <div className='header'>
             <div className="header-container">
              <div className="left">
               <div className="left-container">
                    <div><img src={logo} alt="bankdash." /></div>
                    <div>BankDash.</div>
                </div> 

              </div>
              <div className="right">
                <div className="right-container">
                  <div className="left-1">
                    <p>Overview</p>
                  </div>
                  <div className="rigth-1">
                    <div><img src={search} alt="" /><input type="text" /></div>
                    <div><img src={setting} alt="" /></div>
                    <div><img src={notification} alt="" /></div>
                    <div><img src={user} alt="" /></div>
                  </div>
                </div>
              </div>
             </div>
    </div>
  )}; 

  export default Header;