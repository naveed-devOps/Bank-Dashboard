import './App.css';
import Header from './components/Header/Header';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (

   
        <div>
          <BrowserRouter>
          <Header />
          <SidebarMenu />
          <Routes>
            <Route>
              
            </Route>
          </Routes>
          </BrowserRouter>
          
          </div>



);
}

export default App;




























          
      
