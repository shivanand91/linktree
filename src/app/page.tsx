import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254F1A] h-screen w-full flex space-x-8 justify-center items-center">
        <div className="flex justify-center items-center width-1/2 p-4 mt-20">
        <div className="w-1/2">
          <h1>Everything you are. In one, simple link in bio.</h1>
          <p>Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div>
            <input type="text" placeholder="linktr.ee/yourname" />
            <button>Claim your Linktree</button>
          </div>
        </div>
        <div>
          <Image src="/hero.png" alt="Hero Image" width={500} height={500} />
        </div>
          </div>
      </section>
      <section className="bg-red-500 h-screen ">

      </section>
    </main>
  );
}
