import type { resources } from "i18n/resources";

declare module "i18next" {
  interface CutstomTypeOptions {
    resources: (typeof resources)["en"];
  }
}
