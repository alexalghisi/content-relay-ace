import { createFileRoute, redirect } from "@tanstack/react-router";

// URL alternativ căutat pe Google — redirect permanent către pagina canonică de prețuri.
export const Route = createFileRoute("/pret-meditatii")({
  beforeLoad: () => {
    throw redirect({ to: "/preturi-meditatii", statusCode: 301 });
  },
});
