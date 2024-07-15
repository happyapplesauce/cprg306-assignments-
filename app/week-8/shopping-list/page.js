"use client";

import { useUserAuth } from "../_utils/auth-context";

const ShoppingListPage = () => {
  const { user } = useUserAuth();

  if (!user) {
    return <div>You need to login to view this page.</div>
  }
  return (
    <div>
      {/* Shopping List*/}
    </div>
  );
};

export default ShoppingListPage;