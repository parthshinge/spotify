import { isLoggedIn, logout } from "../auth";

export default function Navbar() {

  return (
    <div className="flex justify-between p-4 bg-neutral-800 text-white">
      <h1 className="text-xl font-bold">🎧 Spotify Clone</h1>

      <div>
        {isLoggedIn() ? (
          <button onClick={logout} className="bg-red-500 px-4 py-1 rounded">
            Logout
          </button>
        ) : (
          <>
            <a href="/login" className="mr-4">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </div>
    </div>
  );
}
