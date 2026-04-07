import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const SignUp = () => {
    const { apiUrl, setAuth } = useAuth();
    const googleUrl = `${apiUrl}/api/auth/google`;
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormValues((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (formValues.password !== formValues.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${apiUrl}/api/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formValues.name,
                    email: formValues.email,
                    password: formValues.password,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Signup failed");
            }

            setAuth({ token: data.token, user: data.user });
            navigate("/account");
        } catch (err) {
            setError(err.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="px-6 lg:px-12 py-12">
                <div className="max-w-3xl mx-auto">
                        {/* Page Title */}
                        <h1 className="text-4xl md:text-5xl font-serif mb-8">Signup</h1>

                        {/* Signup Form */}
                        <form className="space-y-6 flex flex-col" onSubmit={handleSubmit}> 
                            <Input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="bg-transparent border-border rounded-none py-6"
                                value={formValues.name}
                                onChange={handleChange}
                            />

                            <Input 
                                type="email"
                                name="email"
                                placeholder="Email *"
                                required
                                className="bg-transparent border-border rounded-none py-6"
                                value={formValues.email}
                                onChange={handleChange}
                            />

                            <Input
                                type="password"
                                name="password"
                                placeholder="Password *"
                                required
                                className="bg-transparent border-border rounded-none py-6"
                                value={formValues.password}
                                onChange={handleChange}
                            />

                            <Input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                                className="bg-transparent border-border rounded-none py-6"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                            />

                            <Button    
                                type="submit"
                                disabled={loading}
                                className="bg-primary text-primary-foreground px-12 py-6 hover:bg-primary/90 w-min h-1 flex items-center justify-center">
                                    {loading ? "Creating..." : "Signup"}
                            </Button>
                        </form>
                        {error && (
                            <p className="mt-4 text-sm text-destructive">{error}</p>
                        )}
                        <div className="mt-4">
                            <Button
                                variant="outline"
                                className="w-full py-6"
                                asChild
                            >
                                <a href={googleUrl} className="flex items-center justify-center gap-2">
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="#EA4335"
                                            d="M12 10.2v3.6h5.02c-.22 1.15-.87 2.12-1.84 2.78l2.98 2.31c1.74-1.6 2.74-3.96 2.74-6.74 0-.62-.06-1.22-.17-1.8H12z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 21c2.48 0 4.56-.82 6.08-2.22l-2.98-2.31c-.83.56-1.9.9-3.1.9-2.39 0-4.41-1.61-5.13-3.77H3.78v2.37C5.29 18.98 8.4 21 12 21z"
                                        />
                                        <path
                                            fill="#4A90E2"
                                            d="M6.87 13.6c-.18-.56-.28-1.16-.28-1.78s.1-1.22.28-1.78V7.67H3.78A9.003 9.003 0 0 0 3 11.82c0 1.45.35 2.82.78 4.15l3.09-2.37z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M12 6.43c1.35 0 2.56.46 3.52 1.37l2.64-2.64C16.56 3.48 14.48 2.5 12 2.5 8.4 2.5 5.29 4.52 3.78 7.67l3.09 2.37c.72-2.16 2.74-3.61 5.13-3.61z"
                                        />
                                    </svg>
                                    Continue with Google
                                </a>
                            </Button>
                        </div>
                        <div className="my-3 flex gap-1">
                            <p >Sign in to already existing account.</p>
                            <div>
                                <Link to="/login" className="text-primary hover:underline">
                                    Login<span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        
                            
                         
                </div>
            </div>
        </Layout>
    );

};

export default SignUp;