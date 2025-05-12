import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/paraswap-delta-prices-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/get-swap-price-and-bridge-quote",
          label: "Get swap price and bridge quote",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
