"use client";

import authState from "../../store/auth";
import supabaseClient from "@/utils/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function IsAuthorized() {
  const router = useRouter();

  const supabase = supabaseClient();
  useEffect(() => {
    const check = async () => {
      const response = await supabase.auth.getUser();
      console.log(response.data.user);
      if (response.data.user) {
        authState.user = response.data.user;
      } else {
        router.push("/auth");
      }
    };
    check();
  }, [router, supabase.auth]);

  return <></>;
}
