import React from "react";

import { RichTextEditor } from "@/components/base/rich-text-editor";

const RichTextPage = () => {
  const [value, setValue] = React.useState("This is just test");

  return (
    <div className="p-10">
      <RichTextEditor markdown={value} onChange={setValue} />
      <pre>{JSON.stringify(value)}</pre>
    </div>
  );
};

export default RichTextPage;
