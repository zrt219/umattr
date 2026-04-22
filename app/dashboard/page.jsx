import AppDashboardClient from "./page-client.jsx";

export const metadata = {
  title: "Dashboard",
  description:
    "A public working view that keeps the route visible without pretending to be a gated account area.",
};

export default function AppDashboardPage() {
  return <AppDashboardClient />;
}