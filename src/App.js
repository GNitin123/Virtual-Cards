import 'antd/dist/antd.css';
import '../src/assets/scss/styles.scss';
import VirtualCards from './layouts/VirtualCards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllVirtualCard from './pages/All';
import BlockedVirtualCard from './pages/Blocked';
import YourVirtualCard from './pages/Your';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <VirtualCards />
        <Routes>
          <Route path="/" element={<AllVirtualCard />} />
          <Route path="/blocked" element={<BlockedVirtualCard />} />
          <Route path="/your" element={<YourVirtualCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
