import '../src/assets/scss/styles.scss';
import 'antd/dist/antd.min.css';
import VirtualCards from './layouts/VirtualCards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllVirtualCard from './pages/All';
import BlockedVirtualCard from './pages/Blocked';
import YourVirtualCard from './pages/Your';
import PageNotFound from './pages/PageNotFound';
import { VirtualCardProvider } from './context/VirtualCardContext';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <VirtualCardProvider>
          <VirtualCards />
          <Routes>
            <Route path="/" element={<AllVirtualCard />} />
            <Route path="/blocked" element={<BlockedVirtualCard />} />
            <Route path="/your" element={<YourVirtualCard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </VirtualCardProvider>
      </Router>
    </div>
  );
};

export default App;
