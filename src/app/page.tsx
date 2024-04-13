import Script from "next/script";

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Script
        id="script-teste"
        strategy="beforeInteractive"
        src="https://api.origamid.online/scripts/idade-legal.min.js"
      />
    </main>
  );
}
