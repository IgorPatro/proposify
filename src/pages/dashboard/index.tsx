import React from "react";

import { Seo } from "@/components/base/seo";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { BlockDynamicThumbnail } from "@/components/block-dynamic-thumbnail";

const DashboardPage = () => {
  return (
    <>
      <Seo title="Dashboard | Proposify" />
      <div>
        <Button>Click me</Button>
        <BlockDynamicThumbnail
          blockUuid="0.12388469268397828"
          resourceUuid="ea7f3cf3-a901-4053-a016-8467987ce2b0"
          type="template"
        />
      </div>
    </>
  );
};

DashboardPage.getLayout = DashboardLayout;

export default DashboardPage;
