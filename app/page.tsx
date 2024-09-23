import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/Search";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center min-h-screen p-4">
        <Search />
      </main>
    </>
  );
}
