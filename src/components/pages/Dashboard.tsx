export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black-100 mb-4">
          Welcome to Dashboard
        </h1>
        <p className="text-black-60 mb-6">
          This is a protected page. You are logged in!
        </p>
        <button
          onClick={() => alert("Logout functionality will be added later")}
          className="px-6 py-2 bg-primary-100 text-white-100 rounded-lg hover:bg-primary-100/90"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
