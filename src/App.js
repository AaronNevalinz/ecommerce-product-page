import Navbar from './Navbar';
import Main from './Main';
import './index.css';

function App() {
  return (
    <div className="max-h-screen realtive">

      {/* overlay container */}
      <div className='over-lay hidden'></div>

      <Navbar />

      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
