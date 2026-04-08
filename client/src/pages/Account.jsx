import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

const Account = () => {
  const { user, logout } = useAuth();

  return (
    <Layout>
      <div className="px-6 lg:px-12 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-8">Account</h1>

          {!user ? (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                You are not signed in yet.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/login">Sign in</Link>
                </Button>
                <Button variant="outline" asChild>
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

              {user.isAdmin && (
                <Button asChild>
                  <Link to="/admin">Go to admin dashboard</Link>
                </Button>
              )}

              <Button variant="outline" onClick={logout}>
                Sign out
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Account;
