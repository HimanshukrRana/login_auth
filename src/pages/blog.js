import { getSession, useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Blog({ data }) {
  const { data: session } = useSession();
  return (
    <div>
      <h1 className="flex  justify-center text-[3rem]">{data}</h1>
      {!session && (
        <h3 className="flex justify-center text-[1rem]">
          To get Personalized blog ,{" "}
          <button className="underline text-blue-500" onClick={() => signIn()}>
            Please Sign In
          </button>
        </h3>
      )}
    </div>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/api/auth/signin?callbackURL=http://localhost:3000/blog",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      data: session ? " List Of personalized blogs" : "List of free blogs",
    },
  };
}
