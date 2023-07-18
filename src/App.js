import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
function App() {
  return (
    <div className="container-fluid min-vh-100">
      <div className='row'>
        <div className='col-2 vh-100'>
          <Sidebar />
        </div>
        <div className='col'>
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
