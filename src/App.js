import Navbar from './Navbar';
import Main from './Main';
import './index.css';
import Cart from './Cart';

function App() {
  return (
    <div className="max-h-screen realtive">

      {/* overlay container */}
      <div className='over-lay hidden'></div>

      <div className="">
        <Navbar />
      </div>
      <div className='inline-block shadow-lg rounded-2xl invisible'>
        <Cart/>
      </div>
      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
