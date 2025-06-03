export default function Customers() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Customers</h1>
      <div className="rounded-xl bg-gray-50 p-4 md:p-6">
        <p>This is the customers page.</p>
        <p className="mt-4 text-sm text-gray-500">
          You navigated here without a full page refresh thanks to the Next.js Link component.
          The Link component enables client-side navigation with JavaScript, making the
          transition between pages feel smooth and fast.
        </p>
      </div>
    </main>
  );
}