import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import OrderCompleted from "./pages/OrderCompleted";
import Page404 from "./pages/Page404";
import ShippingAndReturns from "./pages/ShippingAndReturns";
import Home from "./pages/Home";

const routers = [
  {
    path: "/",
    component: MainLayout,
    routers: [
      {
        path: "/product",
        component: Product,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/auth",
        component: Auth,
      },
      {
        path: "/checkout",
        component: Checkout,
      },
      {
        path: "/coming-soon",
        component: ComingSoon,
      },
      {
        path: "/contact",
        component: Contact,
      },
      {
        path: "/faq",
        component: FAQ,
      },
      {
        path: "/faq",
        component: FAQ,
      },
      {
        path: "/order-completed",
        component: OrderCompleted,
      },
      {
        path: "/shipping-and-return",
        component: ShippingAndReturns,
      },
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        component: Page404,
      },
    ],
  },
];

export default routers;
