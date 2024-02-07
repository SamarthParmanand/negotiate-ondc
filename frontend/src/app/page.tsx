"use client";

import { Button } from "@nextui-org/react";
import supabaseClient from "@/utils/supabaseClient";
import authState from "./store/auth";
import { Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";

export default function Home() {
  const supabase = supabaseClient();
  const router = useRouter();
  const userState = useSnapshot(authState);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    authState.user = null;
    router.push("/auth");
  };

  return (
    <>
      <div className="h-screen w-full text-4xl text-center font-semibold flex flex-col items-center justify-center">
        <p>Negotiate ONDC</p>
        <p>Welcome {userState.user?.user_metadata.name}</p>
        <div className="flex w-full justify-center">
          <Button
            className="m-4 font-semibold p-5 text-black bg-neutral-300 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Button
            className="m-4 font-semibold p-5 text-black bg-neutral-300 rounded-lg"
            as={Link}
            href="/chat"
          >
            Go to Chat
          </Button>
          <Button
            className="m-4 font-semibold p-5 text-black bg-neutral-300 rounded-lg"
            as={Link}
            href="/catalog"
          >
            Go to Catalog
          </Button>
        </div>
      </div>
    </>
  );
}
