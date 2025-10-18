# 🚨 Hydration Error Prevention Rules

## What is a Hydration Error?

Hydration errors occur when the HTML generated on the server doesn't match what React renders on the client. This can cause:
- Visual glitches and layout shifts
- Loss of user input
- Broken interactivity
- Poor SEO and performance

---

## ❌ NEVER DO

### 1. Don't Use Dynamic Values in Render
```tsx
❌ BAD - Causes hydration error
export default function BadComponent() {
  return <div>{Date.now()}</div>; // Different on server vs client!
}

✅ GOOD - Use useEffect
export default function GoodComponent() {
  const [time, setTime] = useState(null);
  
  useEffect(() => {
    setTime(Date.now());
  }, []);
  
  return <div>{time}</div>;
}
```

### 2. Don't Access Browser APIs During Render
```tsx
❌ BAD
export default function BadComponent() {
  const width = window.innerWidth; // window is undefined on server!
  return <div>Width: {width}</div>;
}

✅ GOOD - Use useEffect
export default function GoodComponent() {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return <div>Width: {width}</div>;
}
```

### 3. Don't Have Different ClassNames on Server vs Client
```tsx
❌ BAD
const [isMounted, setIsMounted] = useState(false);

return (
  <div className={isMounted ? 'mb-16' : 'mb-12'}>
    {/* Server renders mb-12, client renders mb-16 - ERROR! */}
  </div>
);

✅ GOOD - Keep className consistent
return (
  <div className="mb-16">
    {/* Same on both server and client */}
  </div>
);
```

### 4. Don't Nest Invalid HTML Elements
```tsx
❌ BAD
<p>
  <div>Block inside inline element</div>
</p>

✅ GOOD
<div>
  <div>Block inside block element</div>
</div>
```

### 5. Don't Use localStorage/sessionStorage During Render
```tsx
❌ BAD
const stored = localStorage.getItem('key');

✅ GOOD
const [stored, setStored] = useState(null);

useEffect(() => {
  setStored(localStorage.getItem('key'));
}, []);
```

---

## ✅ ALWAYS DO

### 1. Wrap Client-Only Code in useEffect
```tsx
'use client';
import { useEffect, useState } from 'react';

export default function Component() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Browser APIs are safe here
    const value = window.localStorage.getItem('key');
    setData(value);
  }, []);
  
  return <div>{data}</div>;
}
```

### 2. Use the ClientOnly Wrapper
```tsx
import { ClientOnly } from '@/components/ClientOnly';

export default function Page() {
  return (
    <ClientOnly fallback={<Loading />}>
      <BrowserDependentComponent />
    </ClientOnly>
  );
}
```

### 3. Use Safe Window Utilities
```tsx
import { safeWindow, safeLocalStorage } from '@/lib/safeWindow';

export default function Component() {
  useEffect(() => {
    if (safeWindow) {
      console.log('Window width:', safeWindow.innerWidth);
    }
    
    if (safeLocalStorage) {
      safeLocalStorage.setItem('key', 'value');
    }
  }, []);
}
```

### 4. Use Dynamic Imports for Client-Only Libraries
```tsx
import dynamic from 'next/dynamic';

// Library that uses window/document
const ClientMap = dynamic(
  () => import('@/components/Map'),
  { 
    ssr: false,
    loading: () => <MapSkeleton />
  }
);

export default function Page() {
  return <ClientMap />;
}
```

### 5. Keep ClassNames Consistent
```tsx
// If you need different styles, apply them after mount
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

return (
  <div className="base-class">
    {mounted && <div className="client-only-class">Content</div>}
  </div>
);
```

### 6. Use suppressHydrationWarning for Intentional Differences
```tsx
// Only for cases where server/client difference is intentional and unavoidable
<time suppressHydrationWarning>
  {new Date().toLocaleTimeString()}
</time>
```

---

## 🛠️ Available Utilities

### Hooks

#### `useIsMounted()`
```tsx
import { useIsMounted } from '@/hooks/useIsMounted';

export default function Component() {
  const mounted = useIsMounted();
  
  if (!mounted) return <Skeleton />;
  
  return <div>{window.location.href}</div>;
}
```

#### `useIsClient()`
```tsx
import { useIsClient } from '@/hooks/useIsClient';

export default function Component() {
  const isClient = useIsClient();
  
  return isClient ? <ClientView /> : <ServerView />;
}
```

### Components

#### `<ClientOnly>`
```tsx
import { ClientOnly } from '@/components/ClientOnly';

<ClientOnly fallback={<Skeleton />}>
  <ComponentUsingBrowserAPIs />
</ClientOnly>
```

### Utilities (lib/safeWindow.ts)

```tsx
import {
  safeWindow,
  safeDocument,
  safeLocalStorage,
  safeSessionStorage,
  safeNavigator,
  isClient,
  isServer,
  getLocalStorage,
  setLocalStorage
} from '@/lib/safeWindow';

// Check if running on client
if (isClient()) {
  // Safe to use browser APIs
}

// Use safe accessors
if (safeWindow) {
  console.log(safeWindow.innerWidth);
}

// Convenient localStorage helpers
const theme = getLocalStorage('theme', 'light');
setLocalStorage('theme', 'dark');
```

---

## 🔍 Debugging Hydration Errors

### 1. Enable Detailed Error Messages
In development, React shows detailed hydration errors with line numbers.

### 2. Check Browser Console
Look for messages like:
- "Hydration failed"
- "Text content does not match server-rendered HTML"
- "Expected server HTML to contain..."

### 3. Common Culprits
- Date/time rendering
- Random numbers or IDs
- Browser-specific features
- Third-party components
- CSS-in-JS libraries
- User-agent detection

### 4. Use React DevTools
The Profiler can show which components are causing issues.

---

## 📋 Pre-Commit Checklist

Before committing code, verify:

- [ ] No `Date.now()` or `Math.random()` in JSX
- [ ] No `window`, `document`, `localStorage` accessed during render
- [ ] All browser APIs wrapped in `useEffect`
- [ ] ClassNames are consistent between server/client
- [ ] HTML structure is valid
- [ ] Third-party components are properly handled
- [ ] ESLint shows no hydration warnings

---

## 🚀 Testing for Hydration Errors

### Local Testing
```bash
# Build for production
npm run build

# Run production build
npm run start

# Check browser console for errors
```

### Automated Testing
```tsx
// Example test with React Testing Library
import { render, hydrate } from '@testing-library/react';

test('component hydrates without errors', () => {
  const { container } = render(<Component />);
  const ssrHTML = container.innerHTML;
  
  // Clear and hydrate
  container.innerHTML = '';
  hydrate(<Component />, container);
  
  expect(container.innerHTML).toBe(ssrHTML);
});
```

---

## 📚 Resources

- [Next.js Hydration Error Docs](https://nextjs.org/docs/messages/react-hydration-error)
- [React Hydration Docs](https://react.dev/reference/react-dom/client/hydrateRoot)
- Project utilities:
  - `/hooks/useIsMounted.ts`
  - `/hooks/useIsClient.ts`
  - `/components/ClientOnly.tsx`
  - `/lib/safeWindow.ts`

---

## 🆘 Need Help?

If you encounter a hydration error:

1. Read the error message carefully
2. Check this guide for common patterns
3. Use browser DevTools to inspect the difference
4. Wrap problematic code in `useEffect` or `<ClientOnly>`
5. Test thoroughly after fixing

Remember: **When in doubt, wrap it in useEffect!** 🎯


