import './App.css';
import Home from './Home';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Collection from './Components/Collection';
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsCondition from './Components/TermsCondition' 
// import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Container1 from './Components/Container1';
// import ScrollToTop from './Components/ScrolltoTop';
import Login from './Components/Login'
import EditUser from './Components/editUser'
import AddUser from './Components/addUser'
import Dashboard from './Components/dashboard'
import UserRef from './Components/userRef'
import Thankyou from './Components/Thankyou'
// import Test from './Components/Test'

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Navbar/>  */}
{/* <ScrollToTop/> */}
        <Routes>
          <Route path='/' element={<Home/>}/> 
          {/* <Route path="/:id" element={<Test />} /> */}
          <Route path='/collection'  element={<Collection/>}/>
          <Route path='/privacy'  element={<PrivacyPolicy/>}/>
          <Route path='/terms'  element={<TermsCondition/>}/>
          <Route path='/about'  element={<Container1/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/admin'  element={<Dashboard/>}/>
          <Route path='/admin/editUser/'  element={<EditUser/>}/>
          <Route path='/admin/addUser/'  element={<AddUser/>}/>
          <Route path='/admin/users/references'  element={<UserRef/>}/>
          <Route path='/verify/:id' element={<Thankyou/>}/>
        </Routes>
        <div className='containerten'>
          <Footer/>
        </div>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
