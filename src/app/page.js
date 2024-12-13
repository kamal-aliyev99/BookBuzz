"use client"

import { redirect } from "next/navigation";

export default function Home() {
  const jwt = sessionStorage.getItem("JWT_TOKEN")

  if (!jwt) {
    redirect("/auth/login")
  } else {
    redirect("/products")
  }

  return (
    <div>
      <main >
        <h1> HomePage </h1>
      </main>
      <footer >
        
      </footer>
    </div>
  );
}
