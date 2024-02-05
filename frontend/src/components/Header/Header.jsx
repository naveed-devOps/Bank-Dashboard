import './Header.css';
import search from '../assets/search-logo.png';
import setting from '../assets/settings-logo.png';
import notification from '../assets/notification-logo.png';
import user from '../assets/user.png';

function Header() {
  return ( 

    <div className='header'>
             <div className="header-container">
             
              <div className="right">
                <div className="right-container">
                  <div className="left-1">
                    <p>Overview</p>
                  </div>
                  <div className="rigth-1">
                    <div className="serach"><img src={search} alt="" /><input type="text" placeholder='Search for something' /></div>
                    <div className="setting"><img src={setting} alt="" /></div>
                    <div className="setting"><img src={notification} alt="" /></div>
                    <div className="user"><img src={user} alt="" /></div>
                  </div>
                </div>
              </div>
             </div>
    </div>
  )}; 

  export default Header;