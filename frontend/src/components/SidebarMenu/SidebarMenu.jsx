import './SidebarMenu.css';
import service_1 from '../assets/service-1.png';
import settings_solid_1 from '../assets/settings-solid-1.png';
import credit_card_1 from '../assets/credit-card-1.png';
import economic_investment_1 from '../assets/economic-investment-1.png'
import transfer_1 from '../assets/transfer-1.png';
import loan_1 from '../assets/loan-1.png'
import user_3_1 from '../assets/user_3_1.png'
import econometrics_1 from '../assets/econometrics_1.png'
import vector from '../assets/Vector.png'
import logo from '../assets/logo.png';


function SidebarMenu() {
  return (

    <div className="box">
  
    <div className="sidebar-menu">
      <div className="group">
    
               <div className="left-container">
                    <div><img src={logo} alt="bankdash." /></div>
                    <div><p>BankDash.</p></div>
                </div> 

              
        <img className="service" alt="Service" src={service_1} />
        <img className="settings-solid" alt="Settings solid" src={settings_solid_1} />
        <img className="credit-card" alt="Credit card" src={credit_card_1} />
        <img className="economic-investment" alt="Economic investment" src={economic_investment_1} />
        <img className="transfer" alt="Transfer" src={transfer_1} />
        <img className="loan" alt="Loan" src={loan_1} />
        <div className="text-wrapper">Transactions</div>
        <div className="div">Accounts</div>
        <div className="text-wrapper-2">Investments</div>
        <div className="text-wrapper-3">Credit Cards</div>
        <div className="text-wrapper-4">Loans</div>
        <div className="text-wrapper-5">Services</div>
        <div className="text-wrapper-6">My Privileges</div>
        <div className="text-wrapper-7">Setting</div>
        <img className="user" alt="User" src={user_3_1} />
        <img className="econometrics" alt="Econometrics" src={econometrics_1} />
        <div className="group-2">
          <img className="home" alt="Home" src={vector} />
          <div className="text-wrapper-8">Dashboard</div>
          <div className="rectangle" />
        </div>
      </div>
      <div className="rectangle-2" />
    </div>
  </div>
  )};

  export default SidebarMenu;