"use client";

import React from "react";

interface EditorTemplatePageErrorProps {
  error: Error;
}

const EditorTemplatePageError = ({ error }: EditorTemplatePageErrorProps) => {
  return <div>{error.message}</div>;
};

export default EditorTemplatePageError;
