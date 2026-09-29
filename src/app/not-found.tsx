import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x flex flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-6xl font-black text-red-300">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-white">Pagina niet gevonden</h1>
      <p className="mt-2 text-muted">De pagina die je zoekt bestaat niet of is verplaatst.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gold px-7 py-3.5 font-bold text-ink transition hover:bg-gold-600"
      >
        Terug naar home
      </Link>
    </div>
  );
}
