import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout";
// import Home from "./pages/home";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about-us";
import Iptv from "./pages/iptv";
import SiteMap from "./pages/sitemap";
import Faqs from "./pages/faqs";
import PrivacyPolicy from "./pages/privacy-policy";
import PrivacyPolicyKr from "./pages/privacy-policy-kr";
import TermsandConditions from "./pages/terms-cancellation";
import Refund from "./pages/refund";
import Cancellation from "./pages/cancellation";
import Isp from "./pages/isp";
import CustomerSupport from "./pages/customer-support";
import Customer from "./pages/customer";
import Package from "./pages/packages";
import Blogs from "./pages/blogs";
import BlogsDetails from "./pages/blog-details";
import City from "./pages/cities";
import CityDetails from "./pages/cities-detail";
import Compliance from "./pages/compliance";
import NotFoundPage from "./pages/404";
import Searchnews from "./pages/searchnews";
import { AccountProvider } from "./utils/AccountContext";
import Thanks from "./pages/thanks";
import Redirectiondata from "./data/urls";
import HomePage from "./pages/homepage";
// import Careers from "./pages/careers";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AccountProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* <Route path="/" exact element={<Home />} /> */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route caseSensitive={true} path="/cities" element={<City />} />
              <Route path="/cities/:types" element={<CityDetails />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/iptv-app" element={<Iptv />} />
              <Route path="/sitemap.html" element={<SiteMap />} />
              <Route caseSensitive={true} path="/faqs" element={<Faqs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:type" element={<BlogsDetails />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy-policy-kr" element={<PrivacyPolicyKr />} />
              <Route path="/terms-and-conditions" element={<TermsandConditions />} />
              <Route path="/refund-policy" element={<Refund />} />
              <Route path="/cancellation-policy" element={<Cancellation />} />
              <Route path="/isp" element={<Isp />} />
              <Route path="/search" element={<Searchnews />} />
              <Route path="/customers" element={< Customer />} />
              <Route path="/iptv-customer-support" element={< CustomerSupport />} />
              <Route path="/subscription-packages-iptv" element={<Package />} />
              <Route path="/iptv-compliance-regulatory" element={<Compliance />} />
              {/* <Route path="/careers" element={<Careers/>} /> */}
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/thanks" element={<Thanks />} />
              {Redirectiondata.map((data, index) => {
                return (
                  <Route path={data?.pasturl} key={index} element={<Navigate to={data?.currenturl} replace />} />
                )
              }
              )}
            </Routes>
          </Layout>
        </BrowserRouter>
      </AccountProvider>
    </>
  );
}

export default App;
