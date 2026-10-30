import { createFileRoute } from "@tanstack/react-router";
import { orasHubPage } from "@/lib/oras-hub-page";

export const Route = createFileRoute("/meditatii-targu-mures")(orasHubPage("targu-mures"));
