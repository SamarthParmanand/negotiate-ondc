"use client";

import { Button } from "@nextui-org/react";
import supabaseClient from "@/utils/supabaseClient";
import authState from "./store/auth";

export default function Home() {
  const supabase = supabaseClient();

  const handleClick = async () => {
    await supabase.auth.signOut();
    authState.user = null;
  };

  return (
    <>
      <div className="h-screen w-full text-4xl text-center font-bold flex flex-col items-center justify-center">
        NextUI Init
        <Button className="my-4 font-bold p-5" onClick={handleClick}>
          Click here to logout
        </Button>
      </div>
    </>
  );
}
