import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

import HeroSection from "../components/order/HeroSection";
import PreviewSection from "../components/order/PreviewSection";
import UploadSection from "../components/order/UploadSection";
import ProductDetails from "../components/order/ProductDetails";
import SizeQuantity from "../components/order/SizeQuantity";
import PrintingMethod from "../components/order/PrintingMethod";
import PriceDetails from "../components/order/PriceDetails";
import CustomerDetails from "../components/order/CustomerDetails";
import OrderSummary from "../components/order/OrderSummary";

function TshirtOrderPage() {

  const [orderData, setOrderData] = useState({
  logo: null,

  quantity: 10,

  pricePerPiece: 299,

  totalPrice: 2990,
});
  return (
    <>
      <Navbar />

      <HeroSection />

      <main className="bg-gray-100 py-10">

        <div className="max-w-7xl mx-auto px-4 md:px-5">

          {/* Preview + Upload */}

          <div className="grid lg:grid-cols-2 gap-6">

           <PreviewSection
           orderData={orderData}
           />

           <UploadSection
           orderData={orderData}
           setOrderData={setOrderData}
            />

          </div>

          {/* Product Details + Size */}

          <div className="grid lg:grid-cols-2 gap-6 mt-6">

            <ProductDetails />

           <SizeQuantity
           orderData={orderData}
           setOrderData={setOrderData}
           />

          </div>

          {/* Printing + Price */}

          <div className="grid lg:grid-cols-2 gap-6 mt-6">

            <PrintingMethod />

            <PriceDetails
            orderData={orderData}
             />

          </div>

          {/* Customer + Summary */}

          <div className="grid lg:grid-cols-3 gap-6 mt-6">

            <div className="lg:col-span-2">

              <CustomerDetails />

            </div>

            <div>

              <OrderSummary
              orderData={orderData}
              />

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default TshirtOrderPage;