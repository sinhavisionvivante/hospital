import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
function App() {
  return (
    <div className="container-fluid min-vh-100">
      <div className='row'>
        <div className='col-lg-2 col-md-4 col-12 vh-100'>
          <Sidebar />
        </div>
        <div className='col-lg-10 col-md-8 col-12'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
