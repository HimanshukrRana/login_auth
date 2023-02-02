/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";

function dashboard({ data }) {
  // const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="flex  justify-center text-[3rem]">{data}</h1>
      {!session && (
        <h3 className="flex justify-center text-[1rem]">
          or To get Personalized Dashboard
          <button className="underline text-blue-400" onClick={() => signIn()}>
            Please Sign In
          </button>
        </h3>
      )}
    </div>
  );
  // useEffect(() => {
  //   const securePage = async () => {
  //     const session = await getSession();
  //     if (!session) {
  //       signIn();
  //     } else {
  //       setLoading(false);
  //     }
  //   };
  //   securePage();
  // }, []);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  // return <div className="flex justify-center text-[3rem]">Dashboard</div>;
}

export default dashboard;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      data: session ? "Personalized Dashboard" : "To Enable Dashboard ",
    },
  };
}
