import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-accent">404</p>
        <h1 className="mt-2 text-4xl font-extrabold">Halaman tidak ditemukan</h1>
        <Link href="/" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white">Kembali ke beranda</Link>
      </div>
    </main>
  );
}
