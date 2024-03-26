"use client";
import { getCookie } from "cookies-next";

export default function Home() {
  console.log(getCookie("access_token"));
  const handleLogout = () => {};
  return <main className="h-96 container">1</main>;
}
