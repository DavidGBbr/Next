import ServerFetch from "@/components/server-fetch";

export default async function HomePage() {
  return (
    <main>
      <h1>Next Home</h1>
      <ServerFetch />
    </main>
  );
}
