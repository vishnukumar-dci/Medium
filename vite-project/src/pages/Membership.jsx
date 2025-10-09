import React, { useEffect, useState } from "react";
import hero from "../assets/hero.webp";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import { usePopup } from "../context/PopupContext";

export const Membership = () => {
  const { setIsLogin, setIsRegister } = usePopup();

  const colors = [
    "#ECECEC",
    "#E2E9F0",
    "#EBF7F5",
    "#FEEDC9",
    "#FDFDFB",
    "#F8D4F5",
    "#FFFBF9",
    "#E0EFD1",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="w-full h-20 border-b  flex items-center justify-between px-8 bg-[#FFFFFF] fixed top-0 z-50">
        <div className="flex items-center ">
          <p className="h-8 w-auto text-3xl text-black font-serif">Medium</p>
        </div>
        <nav className="flex items-center space-x-6">
          <button
            className=" px-3 py-1 border  rounded-full bg-[#FFFFFF] cursor-pointer "
            onClick={(e) => setIsRegister(true)}
          >
            Signin
          </button>
          <button
            className=" px-3 py-1 border bg-[#242424] rounded-full text-white cursor-pointer"
            onClick={(e) => setIsLogin(true)}
          >
            Signup
          </button>
        </nav>
      </header>

      <div
        className="w-full pt-20 transition-colors duration-[2000ms] ease-in-out"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        <div className="flex flex-row w-full">
          <div className="w-3/5 border-r flex flex-col px-10">
            <h1 className="text-7xl py-20">
              Support human <br />
              stories
            </h1>
            <h5 className="text-2xl pt-25 mt-5">
              Become a member to read without limits or ads, fund <br />
              great writers, and join a global community of people <br />
              who care about high-quality storytelling.
            </h5>
            <div className="flex flex-row pt-10 mt-5">
              <button
                className=" px-6 py-3 bg-[#242424] text-white rounded-full"
                onClick={(e) => setIsLogin(true)}
              >
                Get started
              </button>
              <button
                className="ml-4 px-6 py-3 border rounded-full"
                onClick={() => {
                  const element = document.getElementById("membership");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View plans
              </button>
            </div>
          </div>
          <div className="w-2/5">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row border-t bg-white min-h-screen relative z-10">
        <div className="w-2/5 p-10">
          <div className="sticky top-[88px]">
            <h2 className="text-6xl">
              Why
              <br />
              membership?
            </h2>
          </div>
        </div>
        <div className="w-3/5 px-6 py-10 flex flex-col">
          <div className="flex flex-col px-5 py-10">
            <h3 className="text-5xl">Reward Writers</h3>
            <p className="text-lg mt-5">
              Your membership directly supports the writers, editors, curators,
              and teams <br />
              who make Medium a vibrant, inclusive home for human stories. A
              portion of <br />
              your membership is allocated to the writers of the stories you
              read and <br />
              interact with.
            </p>
          </div>
          <div className="flex flex-col px-5 py-10  ">
            <h3 className="text-5xl">Unlock every story</h3>
            <p className="text-lg mt-5">
              Get access to millions of original stories that spark bright
              ideas, answer big <br />
              questions, and fuel bold ambitions.
            </p>
          </div>
          <div className="flex flex-col px-5 py-10  ">
            <h3 className="text-5xl">Enhance your reading experience</h3>
            <p className="text-lg mt-5">
              Immerse yourself in audio stories, read offline wherever you go,
              and connect <br />
              with the Medium community on Mastodon.
            </p>
          </div>
          <div className="flex flex-col px-5 py-10  ">
            <h3 className="text-5xl">Elevate your writing</h3>
            <p className="text-lg mt-5">
              Create and contribute to publications to collaborate with other
              writers,
              <br /> create a custom domain for your profile, and level up your
              writing with our <br />
              simple but powerful publishing tools.
            </p>
          </div>
          <div className="flex flex-col px-5 py-10  ">
            <h3 className="text-5xl">Support a mission that matters</h3>
            <p className="text-lg mt-5">
              Members are creating a world where original, human-crafted stories
              thrive. <br />
              As a member-supported platform, quality comes first, not ads or
              clickbait.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row border-t bg-white min-h-screen relative z-10">
        <div className="w-2/5 p-10">
          <div className="sticky top-[88px]">
            <h2 className="text-6xl">
              What members
              <br />
              are saying
            </h2>
          </div>
        </div>
        <div className="w-3/5  px-6 py-10 flex flex-col">
          <div className="flex items-start space-x-6">
            <img src={profile} alt="" className="w-12 h-12 " />
            <div>
              <h6 className="text-lg">
                The easy path in social media is promoting the worst <br />{" "}
                content, the cheapest, tackiest, lowest-effort stuff. That’s not{" "}
                <br /> what you get on Medium. You can actually find content you{" "}
                <br /> can build your brain with. I appreciate that, both as a
                reader <br />
                and a writer.
              </h6>
              <p className="mt-5">
                Cassie Kozyrkov, Chief Decision Scientist at Google and Medium
                member
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <img src={profile} alt="" className="w-12 h-12 " />
            <div>
              <h6 className="text-lg">
                Medium has proved a game-changer for me, and quickly <br />
                became the subscription I value the most, and I have quite a
                <br /> few. The cost is nothing compared to the value Medium
                <br />
                generates for me month after month.
              </h6>
              <p className="mt-5">
                Enrique Dans, Professor of Innovation at IE Business School and
                Medium <br />
                member
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <img src={profile} alt="" className="w-12 h-12 " />
            <div>
              <h6 className="text-lg">
                For us tech folks, Medium membership unlocks a whole <br />{" "}
                treasure trove of high-quality articles. One good technology{" "}
                <br />
                book could sell for over the Medium membership fee <br />
                amount. It’s your choice whether to buy one book, or buy <br />
                hundreds and thousands of books by unlocking member- <br />
                only reading on Medium. Investing in a Medium <br />
                membership is one of the best investments I have ever made{" "}
                <br />
                for my career.
              </h6>
              <p className="mt-5">
                Wenqi Glantz, Software Architect at ArisGlobal and Medium member
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="membership">
        <div className="w-full flex flex-row border-t bg-white min-h-screen relative z-10">
          <div className="w-2/5 p-10 ">
            <div className="sticky top-[88px]">
              <h2 className="text-6xl">
                Membership <br /> plans
              </h2>
            </div>
          </div>

          <div className="w-3/5 p-10 overflow-x-auto ">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col border p-10 rounded-2xl shadow-sm min-w-[350px] max-w-[400px]">
                <h5 className="text-2xl font-semibold">Medium Member</h5>
                <p className="text-gray-600 mt-3 text-lg">
                  $5/month or $50/year
                </p>
                <button
                  className="mt-6 px-6 py-3 bg-[#156D12] text-white rounded-full"
                  onClick={(e) => setIsRegister(true)}
                >
                  Get started
                </button>
                <ul className="mt-6 space-y-3 text-gray-700 text-base">
                  <li>✔ Read member-only stories</li>
                  <li>✔ Support writers you read most</li>
                  <li>✔ Access the Partner Program</li>
                  <li>✔ Listen to audio narrations</li>
                  <li>✔ Read offline with the Medium app</li>
                </ul>
              </div>

              <div className="flex flex-col border p-10 rounded-2xl shadow-sm min-w-[350px] max-w-[400px]">
                <h5 className="text-2xl font-semibold">Friend of Medium</h5>
                <p className="text-gray-600 mt-3 text-lg">
                  $15/month or $150/year
                </p>
                <button
                  className="mt-6 px-6 py-3 bg-[#156D12] text-white rounded-full"
                  onClick={(e) => setIsRegister(true)}
                >
                  Get started
                </button>
                <ul className="mt-6 space-y-3 text-gray-700 text-base">
                  <li>✔ All Medium member benefits</li>
                  <li>✔ Give 4x more to the writers you read</li>
                  <li>✔ Share member-only stories with anyone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="w-full border-t flex flex-col items-center justify-center py-20 transition-colors duration-[2000ms] ease-in-out"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        <h2 className="text-7xl">Unlock a world of wisdom</h2>
        <button
          className="mt-15 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer"
          onClick={(e) => setIsRegister(true)}
        >
          Get started
        </button>
      </div>

      <footer className="w-full h-20 flex items-center bg-white justify-between px-8 border-t">
        <div className="flex items-center">
          <p className="h-8 w-auto text-3xl font-serif">Medium</p>
        </div>
        <nav className="flex items-center space-x-6">
          <ul className="flex flex-row justify-center space-x-6">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Teams</li>
            <li>
              <button
                className="underline"
                onClick={() => {
                  window.location.href = "mailto:developer.myspaces@gmail.com";
                }}
              >
                Press
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
