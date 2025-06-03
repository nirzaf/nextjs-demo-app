import NavLinks from '../ui/dashboard/nav-links';
import ThemeToggle from '../components/ThemeToggle';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
          {/* Navigation Links - takes most of the space */}
          <div className="flex-grow">
            <NavLinks />
          </div>
          {/* Theme Toggle - pushed to the bottom */}
          <div className="mt-auto pt-4 flex justify-center md:justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">{children}</div>
    </div>
  );
}