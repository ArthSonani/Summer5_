import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <Layout>
            <div className="px-6 lg:px-12 py-12">
                <div className="max-w-3xl mx-auto">
                        {/* Page Title */}
                        <h1 className="text-4xl md:text-5xl font-serif mb-8">Signup</h1>

                        {/* Signup Form */}
                        <form className="space-y-6 flex flex-col"> 
                            <Input
                                type="text"
                                placeholder="Name"
                                className="bg-transparent border-border rounded-none py-6"
                            />

                            <Input 
                                type="email"
                                placeholder="Email *"
                                required
                                className="bg-transparent border-border rounded-none py-6"
                            />

                            <Input
                                type="password"
                                placeholder="Password *"
                                required
                                className="bg-transparent border-border rounded-none py-6"
                            />

                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                required
                                className="bg-transparent border-border rounded-none py-6"
                            />

                            <Button    
                                type="submit"
                                className="bg-primary text-primary-foreground px-12 py-6 hover:bg-primary/90 w-min h-1 flex items-center justify-center">
                                    Signup
                            </Button>
                        </form>
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