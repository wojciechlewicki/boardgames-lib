import axios from "axios";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON!;

export const axiosPublic = axios.create({
  baseURL: supabaseUrl,
  timeout: 1000,
  headers: {
    apikey: supabaseAnonKey,
    "Content-Type": "application/json",
  },
});
