import Aside from './components/Aside/Aside';
import Table from './components/Table/Table';

import './assets/styles/App.scss';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Aside />
      <Table />
    </div>
  );
};

export default App;
