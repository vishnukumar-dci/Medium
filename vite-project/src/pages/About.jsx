import { Link } from "react-router-dom";
import { usePopup } from "../context/PopupContext";

export const About = () => {
  const { setIsLogin, setIsRegister, setIsWrite } = usePopup();
  return (
    <>
      <header className="w-full h-22 border-b border-b-white flex items-center justify-between px-8 bg-[#242424]">
        <div className="flex items-center">
          <p className="h-8 w-auto text-3xl text-white">Medium</p>
        </div>
        <nav className="flex items-center space-x-6">
          <button
            className=" px-3 py-1 border text-white rounded-full bg-[#242424] hover:bg-gray-800 transition"
            onClick={(e) => setIsRegister(true)}
          >
            Signin
          </button>
          <button
            className=" px-3 py-1 border bg-white rounded-full"
            onClick={(e) => setIsLogin(true)}
          >
            Signup
          </button>
        </nav>
      </header>
      <section className="w-full  bg-[#242424] text-white px-10 py-25">
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl">
            Everyone has a <br />
            story to tell
          </h2>

          <p className="text-2xl mt-18">
            Medium is a home for human stories and ideas. Here, anyone can share
            <br />
            knowledge and wisdom with the world—without having to build a <br />
            mailing list or a following first. The internet is noisy and <br />
            chaotic; Medium is quiet yet full of insight. It’s simple, <br />
            beautiful, collaborative, and helps you find the right readers for
            <br />
            whatever you have to say.
          </p>

          <p className="text-3xl mt-10">
            Ultimately, our goal is to deepen our collective <br />
            understanding of the world through the power of <br />
            writing.
          </p>

          <p className="text-2xl mt-10">
            We believe that what you read and write matters. Words can divide or{" "}
            <br />
            empower us, inspire or discourage us. In a world where the most{" "}
            <br />
            sensational and surface-level stories often win, we’re building a
            system <br />
            that rewards depth, nuance, and time well spent. A space for
            thoughtful <br />
            conversation more than drive-by takes, and substance over packaging.
          </p>
          <p className="text-2xl mt-5">
            Over 100 million people connect and share their wisdom on Medium{" "}
            <br />
            every month. They’re software developers, amateur novelists, product{" "}
            <br />
            designers, CEOs, and anyone burning with a story they need to get
            out <br />
            into the world. They write about what they’re working on, what’s
            keeping <br />
            them up at night, what they’ve lived through, and what they’ve
            learned <br />
            that the rest of us might want to know too.
          </p>

          <p className="text-2xl mt-5">
            Instead of selling ads or selling your data, we’re supported by a
            growing <br />
            community of over a million Medium members who believe in our <br />
            mission. If you’re new here, start reading. Dive deeper into
            whatever <br />
            matters to you. Find a post that helps you learn something new, or{" "}
            <br />
            reconsider something familiar—and then write your story.
          </p>
        </div>
      </section>
      <button
        className="w-full text-7xl text-white text-start  border-t border-white px-10 py-12 bg-[#242424] hover:bg-white hover:text-black"
        onClick={(e) => setIsLogin(true)}
      >
        Start reading
      </button>
      <button
        className="w-full text-7xl text-white text-start  border-t border-white px-10 py-12 bg-[#242424] hover:bg-white hover:text-black"
        onClick={(e) => setIsRegister(true)}
      >
        Start writing
      </button>
      <Link
        to="/membership"
        className="w-full text-7xl text-white text-start border-t border-white px-10 py-12 bg-[#242424] hover:bg-white hover:text-black block"
      >
        Become a member
      </Link>

      <footer className="w-full h-22 flex items-center bg-white justify-between px-8">
        <div className="flex items-center">
          <p className="h-8 w-auto text-3xl">Medium</p>
        </div>
        <nav className="flex items-center space-x-6">
          <ul className="flex flex-row justify-center space-x-6">
            <li>
              <button
                className="underline"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                About
              </button>
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
    </>
  );
};
