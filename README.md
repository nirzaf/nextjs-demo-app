# Next.js Navigation Example

This project demonstrates the use of Next.js's `<Link>` component for optimized client-side navigation.

## Why Optimize Navigation?

Traditionally, navigation between pages is done using the `<a>` HTML element, which causes a full page refresh on each navigation. Next.js provides the `<Link>` component to enable client-side navigation with JavaScript, making transitions between pages feel smooth and fast.

## Key Benefits of the `<Link>` Component

1. **No Full Page Refreshes**: Only the content that changes is updated, not the entire page.
2. **Automatic Code-Splitting**: Next.js splits your application by route segments, loading only the code needed for the current page.
3. **Prefetching**: In production, whenever `<Link>` components appear in the viewport, Next.js automatically prefetches the code for the linked route in the background.

## Project Structure

- `/src/app/page.tsx` - The main page with a link to the dashboard
- `/src/app/dashboard/layout.tsx` - The dashboard layout with navigation sidebar
- `/src/app/ui/dashboard/nav-links.tsx` - The navigation links component using Next.js `<Link>`
- `/src/app/dashboard/page.tsx` - The dashboard home page
- `/src/app/dashboard/invoices/page.tsx` - The invoices page
- `/src/app/dashboard/customers/page.tsx` - The customers page

## How to Run

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Navigation Example

Navigate between the Home, Dashboard, Invoices, and Customers pages to see the `<Link>` component in action. Notice how the transitions are smooth without full page refreshes.

## Implementation Details

The key implementation is in `/src/app/ui/dashboard/nav-links.tsx` where we use the `<Link>` component instead of `<a>` tags:

```tsx
import Link from 'next/link';

// ...

<Link
  key={link.name}
  href={link.href}
  className="..."
>
  <LinkIcon className="w-6" />
  <p className="hidden md:block">{link.name}</p>
</Link>
```

This enables all the performance benefits mentioned above.
