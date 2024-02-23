"use client";

import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const ProtectedPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default ProtectedPage;
