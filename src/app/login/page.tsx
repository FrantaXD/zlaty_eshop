'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/apis_reqests/login"; // Uprav cestu podle projektu

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await login(email, password);
            router.push("/admin");
        } catch (err) {
            setError("Neplatný email nebo heslo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <form 
                onSubmit={handleSubmit} 
                className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
            >
                <h1 className="text-3xl font-bold text-center">Admin Login</h1>

                {error && (
                    <div className="text-red-500 text-sm text-center">{error}</div>
                )}

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium">
                        Heslo
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#ECDFCC] hover:bg-[#d6cdc1] rounded-lg text-black font-bold transition-colors"
                >
                    {loading ? "Přihlašování..." : "Přihlásit se"}
                </button>
            </form>
        </div>
    );
}
