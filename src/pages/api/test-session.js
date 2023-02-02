/* eslint-disable react-hooks/rules-of-hooks */
import { getSession, useSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });
  //   const { data: session } = useSession();

  if (session) {
    res.status(200).json({ message: "Success", session });
  } else {
    res.status(401).json({ error: "Unauthenticated" });
  }
};

export default handler;
