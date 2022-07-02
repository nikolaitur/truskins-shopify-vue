import { createRouter, createWebHashHistory } from "vue-router";

import Shipments from "../components/render/pages/PortalShipments";
import Orders from "../components/render/pages/PortalOrders";
import Details from "../components/render/pages/PortalDetails";

const routes = [
  { path: "/", name: "Shipments", component: Shipments },
  { path: "/orders", name: "Orders", component: Orders },
  { path: "/details", name: "Details", component: Details },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
