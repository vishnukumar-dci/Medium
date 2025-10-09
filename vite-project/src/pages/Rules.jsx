import React from 'react'
import { Header } from '../component/Header'
import { Footer } from "../component/Footer";

export const Rules = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-full h-1 bg-[#02B875]"></div>
        <div className="w-full mx-15 p-4">
          <h5 className="text-2xl font-serif">Medium Policy</h5>{" "}
        </div>
        <div className="w-full max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col space-y-7">
            <h1 className="text-4xl font-bold pt-4">Medium Rules</h1>

            <div>
              <p className="text-[20px] ">
                Medium is an open platform that exists to share ideas and
                perspectives from
              </p>
              <p className="text-[20px]  ">
                the world’s most insightful writers, thinkers, and storytellers.
              </p>
            </div>

            <p>
              We welcome thoughtful and civil discussion from a broad spectrum
              of <br />
              viewpoints. To maintain a safe, respectful, and welcoming
              environment for a <br />
              wide range of people to engage in meaningful conversations, we
              prohibit <br />
              certain conduct.
            </p>

            <p>
              In deciding whether there has been a violation of the rules, we
              will take into <br />
              consideration things like newsworthiness, the context and nature
              of the <br />
              posted information, the likelihood and severity of actual or
              potential harms, <br />
              account history, and applicable laws.
            </p>

            <p>
              Violations of our rules may result in consequences such as account{" "}
              <br />
              restrictions or suspension of your content. Medium has the sole
              authority <br />
              and final decision as to whether content or behavior violates our
              rules.
            </p>

            <div className="flex justify-center ">
              <p>. . .</p>
            </div>

            <h5 className="text-[20px] font-bold">To report a violation:</h5>

            <p>
              If you find a post or account on Medium that you believe violates
              these rules, <br />
              please report it. You can find the report button in the 3-dot menu
              on every <br />
              post, response, and account page.
            </p>

            <p>
              You can use this form to provide more detail or to report other
              conduct you <br />
              believe violates our rules. Additionally, you can send an email to{" "}
              <br />
              trust@medium.com.
            </p>

            <div className="flex justify-center ">
              <p>. . .</p>
            </div>

            <h5 className="text-[20px] font-bold">Block and mute:</h5>

            <p>
              If you find yourself in conflict with another user, we encourage
              the <br />
              following:
            </p>

            <div className="flex ">
              <p >.</p>
              <p>
                Block them and move on. You can learn more about blocking here.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
