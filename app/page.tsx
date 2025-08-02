import Image from "next/image";
import Header from "./components/Header";
import Search from "./components/Search";

export default function Home() {
  23
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center min-h-screen ">
        <Search />
      </main>
    </>
  );
}
