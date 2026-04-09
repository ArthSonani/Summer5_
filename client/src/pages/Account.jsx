import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

const Account = () => {
  const { user, logout } = useAuth();

  return (
    <Layout>
      <div className="px-6 lg:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div className="bg-secondary/60 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Account
              </p>
              <h1 className="text-4xl md:text-5xl font-serif mt-4">
                Your profile hub
              </h1>
              <p className="text-sm text-muted-foreground mt-4">
                Manage your profile, review account details, and access order tools.
              </p>
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <p>- Keep your details up to date</p>
                <p>- Track purchases and saved items</p>
                <p>- Access admin tools when available</p>
              </div>
            </div>

            <div className="border border-border bg-card p-8 md:p-10 rounded-2xl">
              {!user ? (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    You are not signed in yet.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="py-6 px-6">
                      <Link to="/login">Sign in</Link>
                    </Button>
                    <Button variant="outline" asChild className="py-6 px-6">
                      <Link to="/signup">Create account</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    {user.avatarUrl ? (
                      <img
                        src={user.avatarUrl}
                        alt={user.name || "User avatar"}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-lg">
                        {user.name?.charAt(0) || "U"}
                      </div>
                    )}
                    <div>
                      <p className="text-xl font-medium">
                        {user.name || "Unnamed user"}
                      </p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Provider</span>
                      <span className="capitalize">{user.provider || "local"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Role</span>
                      <span>{user.isAdmin ? "Admin" : "Customer"}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">User ID</span>
                      <span>{user.id}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {user.isAdmin && (
                      <Button asChild className="py-6 px-6">
                        <Link to="/admin">Go to admin dashboard</Link>
                      </Button>
                    )}
                    <Button variant="outline" onClick={logout} className="py-6 px-6">
                      Sign out
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
