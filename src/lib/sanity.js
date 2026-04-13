import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "sq3gr9q6", // your project id
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});