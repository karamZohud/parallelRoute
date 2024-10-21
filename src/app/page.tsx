import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="p-10">
      <h1 className="text-2xl mb-3 font-bold ">Home Page</h1>
      <Link className="text-blue-800 underline" href={'/dashboard'}>dashboard</Link>

    </section>
  );
}
