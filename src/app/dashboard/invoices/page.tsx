export default function Invoices() {
  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">Invoices</h1>
      <div className="rounded-xl bg-gray-50 p-4 md:p-6">
        <p>This is the invoices page.</p>
        <p className="mt-4 text-sm text-gray-500">
          You navigated here without a full page refresh thanks to the Next.js Link component.
          Notice how the transition was smooth and only this content area changed.
        </p>
      </div>
    </main>
  );
}