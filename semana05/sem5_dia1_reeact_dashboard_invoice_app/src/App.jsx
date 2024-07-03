import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutBase from './layouts/LayoutBase';
import LoginPage from './pages/LoginPage';
import InvoicesPage from './pages/InvoicesPage';
import InvoicesNewPage from './pages/InvoicesNewPage';
import InvoicesEditPage from './pages/InvoicesEditPage';
import InvoicesDetailPage from './pages/InvoicesDetailPage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/invoices/new" element={<InvoicesNewPage />} />
          <Route path="/invoices/:id" element={<InvoicesDetailPage />} />
          <Route path="/invoices/:id/edit" element={<InvoicesEditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
