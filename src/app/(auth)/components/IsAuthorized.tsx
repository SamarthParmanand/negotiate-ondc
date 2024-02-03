"use client";

import { useSnapshot } from "valtio";
import authState from "../../store/auth";
import supabaseClient from "@/utils/supabaseClient";
import React, { useEffect } from "react";
import Login from "./Login";

export default function IsAuthorized({
  children,
}: {
  children: React.ReactNode;
}) {
  const snap = useSnapshot(authState);

  const supabase = supabaseClient();
  useEffect(() => {
    setTimeout(() => {
      const check = async () => {
        const response = await supabase.auth.getUser();
        if (response.data.user) {
          authState.user = response.data.user;
        }
      };
      check();
    }, 10000);
  });

  if (!snap.user) {
    return <Login />;
  }
  return <>{children}</>;
}
