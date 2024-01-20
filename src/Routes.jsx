import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Reservation = React.lazy(() => import("pages/Reservation"));
const AboutusOne = React.lazy(() => import("pages/AboutusOne"));
const CheckoutOne = React.lazy(() => import("pages/CheckoutOne"));
const Orderonline = React.lazy(() => import("pages/Orderonline"));
const HomepageOne = React.lazy(() => import("pages/HomepageOne"));
const ContactOne = React.lazy(() => import("pages/ContactOne"));
const MenuOne = React.lazy(() => import("pages/MenuOne"));
const ReservationOne = React.lazy(() => import("pages/ReservationOne"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const OrderonlineOne = React.lazy(() => import("pages/OrderonlineOne"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Contact = React.lazy(() => import("pages/Contact"));
const Menu = React.lazy(() => import("pages/Menu"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/orderonlineone" element={<OrderonlineOne />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/reservationone" element={<ReservationOne />} />
          <Route path="/menuone" element={<MenuOne />} />
          <Route path="/contactone" element={<ContactOne />} />
          <Route path="/homepageone" element={<HomepageOne />} />
          <Route path="/orderonline" element={<Orderonline />} />
          <Route path="/checkoutone" element={<CheckoutOne />} />
          <Route path="/aboutusone" element={<AboutusOne />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
