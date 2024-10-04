import { Header } from "./sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen w-full bg-red-800" id="developers">
        hello
      </div>
      <div className="h-screen w-full bg-green-800" id="pricing">
        heloo
      </div>
      <div className="bg-purple-800-800 h-screen w-full" id="features"></div>
    </>
  );
}
