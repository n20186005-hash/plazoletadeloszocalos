import { redirect } from 'next/navigation';

// This page handles the bare `/` path. The middleware intercepts requests
// and redirects to the default locale (e.g. `/zh`), so this page just
// issues that redirect on the server.
export default function RootPage() {
  redirect('/zh');
}