import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
function App() {
  return (
    <div className='d-flex'>
      <div class="card row w-25 bg-color">
        <div class="card-body">
          <Sidebar />
        </div>
      </div>

      <div class="card w-100">
        <div class="card-body">
          <Home />
        </div>
      </div>
    </div>

    // <div className="container-fluid min-vh-100">
    //   <div className='row'>
    //     <div className='col-2 vh-100'>
    //       <Sidebar />
    //     </div>
    //     <div className='col'>
    //       <div className='card rounded-left py-2'>
    //         <Home />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
