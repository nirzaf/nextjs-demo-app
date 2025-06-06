export default function Dashboard() {
  return (
    <main className="flex flex-col gap-6">
      <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Dashboard</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col items-start">
          <span className="text-3xl font-semibold text-blue-600 dark:text-blue-400">$12,500</span>
          <span className="mt-1 text-gray-500 dark:text-gray-300">Total Revenue</span>
        </div>
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col items-start">
          <span className="text-3xl font-semibold text-blue-600 dark:text-blue-400">120</span>
          <span className="mt-1 text-gray-500 dark:text-gray-300">Customers</span>
        </div>
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col items-start">
          <span className="text-3xl font-semibold text-blue-600 dark:text-blue-400">32</span>
          <span className="mt-1 text-gray-500 dark:text-gray-300">Invoices</span>
        </div>
      </section>
      <div className="rounded-xl bg-white dark:bg-gray-800 shadow-md p-6 mt-4">
        <p className="text-lg font-medium mb-2">Welcome to your dashboard! 🎉</p>
        <p className="text-gray-600 dark:text-gray-300">
          Use the sidebar links to navigate. Enjoy seamless navigation and a modern UI with light/dark mode support.
        </p>
      </div>
    </main>
  );
}