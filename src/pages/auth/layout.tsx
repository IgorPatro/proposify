import React, { type ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex size-full min-h-screen items-center justify-center p-4">
      {children}
    </div>
  );
};

export default AuthLayout;
