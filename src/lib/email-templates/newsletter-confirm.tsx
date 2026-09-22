import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import type { TemplateEntry } from "./registry";

interface Props {
  confirmUrl?: string;
  materie?: string;
}

export function NewsletterConfirmEmail({ confirmUrl = "https://meditatiidirect.ro", materie }: Props) {
  return (
    <Html lang="ro">
      <Head />
      <Preview>Confirmă abonarea la variante și rezolvări BAC</Preview>
      <Body style={{ backgroundColor: "#f6f7fb", fontFamily: "Arial, Helvetica, sans-serif", margin: 0, padding: "24px" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "32px", maxWidth: "560px" }}>
          <Heading style={{ fontSize: "22px", margin: "0 0 12px" }}>Mai e un pas: confirmă abonarea</Heading>
          <Text style={{ fontSize: "15px", lineHeight: "24px", color: "#3f3f46" }}>
            Ai cerut să primești pe email variantele și rezolvările noi
            {materie ? ` la ${materie}` : ""} de pe MeditatiiDirect.ro. Apasă butonul de mai jos ca să
            activezi abonarea.
          </Text>
          <Section style={{ margin: "24px 0" }}>
            <Button
              href={confirmUrl}
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                borderRadius: "10px",
                padding: "12px 20px",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Confirmă abonarea
            </Button>
          </Section>
          <Text style={{ fontSize: "13px", color: "#71717a", lineHeight: "20px" }}>
            Dacă butonul nu funcționează, copiază linkul: {confirmUrl}
          </Text>
          <Text style={{ fontSize: "13px", color: "#71717a", lineHeight: "20px" }}>
            Dacă nu tu ai cerut asta, ignoră acest email — nu îți trimitem nimic fără confirmare.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: NewsletterConfirmEmail,
  subject: "Confirmă abonarea la variante și rezolvări BAC",
  displayName: "Confirmare newsletter",
  previewData: { confirmUrl: "https://meditatiidirect.ro/newsletter/confirm?t=demo", materie: "matematică" },
} satisfies TemplateEntry;
