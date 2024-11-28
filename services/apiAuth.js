import { supabase } from "../utils/supabase.js";

export async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log(error);
    return;
  }

  return data;
}
