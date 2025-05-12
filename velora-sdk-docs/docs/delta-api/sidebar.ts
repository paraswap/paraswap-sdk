import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "delta-api/velora-delta-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "delta-api/get-delta-prices",
          label: "GET delta/prices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "delta-api/get-delta-prices-bridge-info",
          label: "GET delta/prices/bridge-info",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
