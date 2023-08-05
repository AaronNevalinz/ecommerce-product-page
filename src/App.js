import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div className="max-h-screen">

      <Navbar />

      <div className="content">
        <Main />
      </div>
    </div>
  );
}

export default App;
