import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { User, AuthError } from "@supabase/supabase-js";

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: AuthError | Error;
}

interface SignUpData {
  email: string;
  password: string;
  username: string;
}

interface SignInData {
  email: string;
  password: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async ({
    email,
    password,
    username,
  }: SignUpData): Promise<AuthResponse> => {
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error("No user returned from sign up");

      const { error: profileError } = await supabase.from("users").insert([
        {
          id: authData.user.id,
          username,
          email,
        },
      ]);

      if (profileError) throw profileError;

      return {
        success: true,
        user: authData.user,
      };
    } catch (error) {
      console.error("Sign up error:", error);

      return {
        success: false,
        error: error as AuthError | Error,
      };
    }
  };

  const signIn = async ({
    email,
    password,
  }: SignInData): Promise<AuthResponse> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      return {
        success: true,
        user: data.user,
      };
    } catch (error) {
      console.error("Sign in error:", error);

      return {
        success: false,
        error: error as AuthError | Error,
      };
    }
  };

  const signOut = async (): Promise<{
    success: boolean;
    error?: AuthError | Error;
  }> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      return { success: true };
    } catch (error) {
      console.error("Sign out error:", error);

      return {
        success: false,
        error: error as AuthError | Error,
      };
    }
  };

  return {
    user,
    loading,
    signUp,
    signIn,
    signOut,
  };
}
