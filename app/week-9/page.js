"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
const Page = () => {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
const handleLogin = async () => {
await gitHubSignIn();
};
 
// Sign out of Firebase
const handleLogout = async () => {
await firebaseSignOut();
};


return (
  <div>
    {user ? (
      <div>
        <p>Welcome, {user.displayName} ({user.email})</p>
        <button onClick={handleLogout}>Sign out</button>
        <a href="/week-8/shopping-list">Continue to your Shopping List</a>
      </div>
    ) : (
      <button onClick={handleLogin}>Login with Github </button>
    )}
    </div>
    );
  };
  export default Page;