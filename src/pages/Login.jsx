import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
       <Layout>
        <div className="px-6 lg:px-12 py-12">
         <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8">
                Login
            </h1>

            <form className="space-y-6 flex flex-col">
                <Input
                    type="email"
                    placeholder="Email *"
                    className="bg-transparent border-border rounded-none py-6" 
               />
            
                <Input  
                    type="password"
                    placeholder="Password *"
                    className="bg-transparent border-border rounded-none py-6"
                />
            
                <Button    
                    type="submit"
                    className="bg-primary text-primary-foreground px-12 py-6 hover:bg-primary/90 w-min h-1 flex items-center justify-center">
                    Login
                </Button>
            </form>
            <div className="my-3 flex gap-1">
                <p >Don't have an account.</p>
                <div>
                    <Link to="/signup" className="text-primary hover:underline ">
                        Register<span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
         </div>
        </div>
       </Layout>
    )
}

export default Login;