"use client";

import AuthSidebar from "../components/AuthSidebar";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
        <>
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
                <AuthSidebar />
                <LoginForm />
            </section>
        </>
    );
}