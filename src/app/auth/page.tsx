"use client";

import { Button } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import supabaseClient from "@/utils/supabaseClient";
export default function Page() {
  const supabase = supabaseClient();
  const handleLogin = () => {
    const { data, error } = supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Button className="p-5" onClick={handleLogin}>
        <FaGoogle /> Sign In
      </Button>
    </div>
  );
}
