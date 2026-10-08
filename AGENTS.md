# Architecture rules

- Keep daily SEO monitoring in a secret-authenticated public hook with server-only Semrush calls and admin-readable stored snapshots; this separates recurring analysis from public content and protects provider quota.
- Claim each Romanian calendar day through a unique report row before contacting Semrush; this makes duplicate scheduled callbacks idempotent.
- Preserve TanStack leaf-route metadata and request-first subject CTAs; this keeps indexable subject content separate from the private proposal workflow.