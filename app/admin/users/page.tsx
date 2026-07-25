import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/admin/auth";
import { getUsers, createUser, deleteUser } from "@/lib/admin/kv";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function UsersPage() {
  const [users, session] = await Promise.all([getUsers(), getSession()]);

  async function handleCreate(formData: FormData) {
    "use server";
    const username = (formData.get("username") as string).trim();
    const password = formData.get("password") as string;
    if (!username || !password) return;
    await createUser(username, password);
    revalidatePath("/admin/users");
  }

  async function handleDelete(username: string) {
    "use server";
    await deleteUser(username);
    revalidatePath("/admin/users");
  }

  return (
    <div className="p-8 max-w-xl">
      <div className="mb-8">
        <h1 className="font-serif text-xl text-bark mb-1">Users</h1>
        <p className="text-xs text-stone">Admin accounts with full access to this panel.</p>
      </div>

      {/* User list */}
      <div className="bg-white rounded-lg border border-linen overflow-hidden mb-8">
        {users.length === 0 ? (
          <div className="p-8 text-center text-stone text-sm">
            No database users yet.{" "}
            {process.env.ADMIN_DEFAULT_USER && (
              <span>Default admin from env vars is active.</span>
            )}
          </div>
        ) : (
          users.map((username) => (
            <div
              key={username}
              className="flex items-center justify-between px-4 py-3 border-b border-linen last:border-0"
            >
              <span className="text-bark text-sm font-medium">{username}</span>
              {username === session?.username ? (
                <span className="text-xs text-stone/50 italic">current session</span>
              ) : (
                <DeleteButton
                  action={handleDelete.bind(null, username)}
                  label="Remove"
                  confirm={`Remove user "${username}"?`}
                />
              )}
            </div>
          ))
        )}
      </div>

      {/* Add user */}
      <div className="bg-white rounded-lg border border-linen p-6">
        <h2 className="font-serif text-base text-bark mb-5">Add user</h2>
        <form action={handleCreate} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-[0.65rem] tracking-widest uppercase text-stone">
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              autoComplete="off"
              className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-2.5 text-bark text-sm font-light transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-[0.65rem] tracking-widest uppercase text-stone">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="new-password"
              className="w-full bg-transparent border-b border-linen focus:border-bark outline-none py-2.5 text-bark text-sm font-light transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-bark text-off-white text-xs tracking-widest uppercase rounded hover:bg-terracotta transition-colors"
          >
            Add user
          </button>
        </form>
      </div>
    </div>
  );
}
