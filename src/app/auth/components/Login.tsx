"use client";

import { Button } from "@nextui-org/react";
import { FaGoogle } from "react-icons/fa";
import supabaseClient from "@/utils/supabaseClient";
import authState from "@/app/store/auth";

export default function Login() {
  const supabase = supabaseClient();
  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
    supabase.auth.getUser().then((user) => {
      authState.user = user.data.user;
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
