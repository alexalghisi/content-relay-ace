// Layout pentru /bac/{materie}/{an} — conținutul paginii stă în bac.$materie.$an.index.tsx,
// iar paginile de sesiune se randează prin <Outlet />.
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/bac/$materie/$an")({
  component: () => <Outlet />,
});
