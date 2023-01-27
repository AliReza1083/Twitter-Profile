import Head from "next/head";
import { Inter } from "@next/font/google";
import Profile from "@/components/Profile";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ user }) {
  const route = useRouter();
  const [inputField, setInputField] = useState("");
  const [loading, setLoading] = useState(false);

  const newUserInformation = async () => {
    if (inputField.length == 0) return;

    setLoading(true);
    await route.push(`?id=${inputField}`);
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} flex flex-col items-center`}>
        <Navbar />
        <div className="flex gap-4 py-12 px-4">
          <input
            type="text"
            className="w-full bg-white outline-none border-2 border-black border-opacity-50 focus:border-opacity-100 px-4 py-2 rounded-md"
            placeholder="search"
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
              class="inline-flex w-32 items-center justify-center rounded-md border border-transparent bg-black px-2 py-1 text-sm font-medium text-white shadow-sm hover:black"
              disabled
            >
              <span class="inline-flex items-center gap-px">
                <span class="animate-blink mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
                <span class="animate-blink animation-delay-150 mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
                <span class="animate-blink animation-delay-300 mx-px h-1.5 w-1.5 rounded-full bg-white"></span>
              </span>
            </button>
          )}
        </div>

        {user && <Profile user={user} />}
        {!user && <h1>No User has been found</h1>}
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
