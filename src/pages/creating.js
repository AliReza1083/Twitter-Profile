import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineMenu } from "react-icons/ai";
import { navbarActions } from "@/store/Navbar/Navbar.actions";

import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

import {
  darkSelector,
  navbarSelector,
  verifySelector,
} from "@/store/Navbar/Navbar.selector";
import Verify from "@/components/Upload/Verify";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: ["100", "400", "900"] });

export default function Home({ user }) {
  const [inputField, setInputField] = useState("");
  const [loading, setLoading] = useState(false);

  const route = useRouter();
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => navbarSelector(state));
  const darkMode = useSelector((state) => darkSelector(state));
  const verify = useSelector((state) => verifySelector(state));

  if (typeof window !== "undefined") {
    if (darkMode == true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const newUserInformation = async () => {
    if (inputField.length == 0) return;

    setLoading(true);
    await route.push(`?id=${inputField}`);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Twitter Profile | Image</title>
        <meta
          name="description"
          content="Get FREE image of your Twitter Profile"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${inter.className} flex flex-col items-center overflow-hidden p-4`}
      >
        <Navbar user={user} />

        <Link
          href={"/community-showcase"}
          className="text-sm md:text-base self-end opacity-75 hover:opacity-100"
        >
          Community Showcase
        </Link>

        <div className="flex gap-4 py-12">
          <input
            type="text"
            className="w-full bg-white outline-none border-2 border-black border-opacity-50 focus:border-opacity-100 px-4 py-2 rounded-md"
            placeholder="twitter handle"
            onChange={(e) => setInputField(e.target.value)}
          />
          {loading == false ? (
            <button
              className="w-32 bg-black text-white rounded-md active:scale-90 duration-100"
              onClick={newUserInformation}
            >
              Search
            </button>
          ) : (
            <button
              className="inline-flex w-32 items-center justify-center rounded-md border border-transparent bg-black px-2 py-1 text-sm font-medium text-white shadow-sm hover:black"
              disabled
            >
              <span className="inline-flex items-center gap-px">
                <span className="animate-blink mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
                <span className="animate-blink animation-delay-150 mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
                <span className="animate-blink animation-delay-300 mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
              </span>
            </button>
          )}
        </div>

        {user && <Profile user={user} />}
        {!user && <h1>No User has been found</h1>}

        <div
          className={`lg:hidden text-xl fixed bottom-4 left-4 bg-black text-white rounded-full p-3 ${
            isOpen && "translate-x-28"
          } duration-200`}
          onClick={() => {
            dispatch(navbarActions(isOpen));
          }}
        >
          <AiOutlineMenu />
        </div>

        {verify && <Verify user={user} />}
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const user = context.query.id;
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER}`,
    };
    const response = await fetch(
      `https://api.twitter.com/2/users/by/username/${
        user ?? "Ali_Developer05"
      }?user.fields=description,profile_image_url,created_at,public_metrics,url,verified`,
      { headers }
    );
    const data = await response.json();

    return {
      props: {
        user: data.data || null,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
