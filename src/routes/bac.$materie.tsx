// Layout pentru /bac/{materie} — conținutul paginii stă în bac.$materie.index.tsx,
// iar paginile de an și sesiune se randează prin <Outlet />.
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/bac/$materie")({
  component: () => <Outlet />,
});
