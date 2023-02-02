import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav `}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/redux">Redux</Link>
        </li>
        {/* {session && ( */}
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {!session && (
          <li>
            <button
              className="p-2 border border-white rounded-l hover:border-black"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          </li>
        )}

        {session && (
          <li>
            <button
              className="p-2  border border-white rounded-l hover:border-black"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
