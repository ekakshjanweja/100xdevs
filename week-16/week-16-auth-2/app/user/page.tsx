import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";

const UserPage = async () => {
  const session = await getServerSession(NEXT_AUTH);

  return (
    <>
      <p>{JSON.stringify(session)}</p>
    </>
  );
};

export default UserPage;
