import Head from "next/head";
import { Inter } from "@next/font/google";

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Tailwind Testing</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-cyan-500 px-4 py-2 ml-5 rounded-lg text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Chiranjeeb Jena
            </h2>
            <h3 className="text-2xl py-2">Developer & Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias adipisci nemo maiores consectetur ipsa temporibus
              officia perspiciatis in? Sit voluptas veritatis numquam facere
              unde vitae quis perspiciatis reiciendis. Fuga, voluptatibus.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </section>
      </main>
    </>
  );
}
