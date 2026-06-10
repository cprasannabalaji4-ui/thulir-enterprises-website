import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import TshirtPage from "./pages/TshirtPage";
import MugPage from "./pages/MugPage";
import CapPage from "./pages/CapPage";
import PlatePage from "./pages/PlatePage";
import BadgePage from "./pages/BadgePage";
import GetQuotePage from "./pages/GetQuotePage";
import QuoteFormPage from "./pages/QuoteFormPage";
import TshirtOrderPage from "./pages/TshirtOrderPage";
import MugOrderPage from "./pages/MugOrderPage";
import CapOrderPage from "./pages/CapOrderPage";
import BadgeOrderPage from "./pages/BadgeOrderPage";
import PlateOrderPage from "./pages/PlateOrderPage";
import ProductOrderPage from "./pages/ProductOrderPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tshirt-printing"
          element={<TshirtPage />}
        />

        <Route
          path="/mug-printing"
          element={<MugPage />}
        />

        <Route
          path="/cap-printing"
          element={<CapPage />}
        />

        <Route
          path="/plate-printing"
          element={<PlatePage />}
        />

        <Route
          path="/badge-printing"
          element={<BadgePage />}
        />
        <Route
          path="/get-quote"
          element={<GetQuotePage />}
        />
        <Route
         path="/quote-form"
         element={<QuoteFormPage />}
        />

        <Route
         path="/order/tshirt"
         element={<TshirtOrderPage />}
        />

<Route
  path="/order/mug"
  element={<MugOrderPage />}
/>

<Route path="/order/cap" element={<CapOrderPage />} />

<Route
  path="/order/badge"
  element={<BadgeOrderPage />}
/>

<Route
  path="/order/plate"
  element={<PlateOrderPage />}
/>

        <Route
        path="/order/:productType"
        element={<ProductOrderPage />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;