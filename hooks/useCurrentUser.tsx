import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const user = useSession();

  return {
    name: user?.data?.user?.name,
    image: user?.data?.user?.image,
    email: user?.data?.user?.email,
    id: user?.data?.user?.id,
  };
};
