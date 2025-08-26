import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("/food", "routes/food.tsx")] satisfies RouteConfig;
