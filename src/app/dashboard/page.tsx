export default function Dashboard() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
      <div className="rounded-xl bg-gray-50 p-4 md:p-6">
        <p>Welcome to your dashboard! Navigate using the sidebar links.</p>
        <p className="mt-4 text-sm text-gray-500">
          Notice how navigation between pages is fast and without full page refreshes
          because we&apos;re using the Next.js Link component.
        </p>
      </div>
    </main>
  );
}