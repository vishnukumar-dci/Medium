import React from "react";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { Link } from "react-router-dom";


export const Terms = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-full h-1 bg-[#02B875]"></div>

        <div className="w-full mx-15 p-4">
          <h5 className="text-2xl font-serif">Medium Policy</h5>{" "}
        </div>
        <div className="w-full max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col space-y-7">
            <div className="flex flex-col space-y-3">
                <h1 className="text-4xl font-bold pt-4">
                  Medium Terms of Service
                </h1>
              <h6 className="text-2xl font-light">
                Effective: September 1, 2020
              </h6>
            </div>

            <h5 className="text-2xl font-serif">
              You can see our previous Terms here.
            </h5>

            <p className="text-[20px] font-serif leading-relaxed">
              Thanks for using Medium. Our mission is to deepen people’s
              understanding <br />
              of the world and spread ideas that matter.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              These Terms of Service (“Terms”) apply to your access to and use
              of <br />
              the websites, mobile applications and other online products and
              services <br />
              (collectively, the “Services”) provided by A Medium Corporation
              (“Medium” <br />
              or “we”). By clicking your consent (e.g. “Continue,” “Sign-in,” or
              “Sign-up,”) <br />
              or by using our Services, you agree to these Terms, including{" "}
              <br />
              the mandatory arbitration provision and class action waiver in the
              Resolving <br />
              Disputes; Binding Arbitration Section.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              Our Privacy Policy explains how we collect and use your
              information while <br />
              our Rules outline your responsibilities when using our <br />
              Services. By using our Services, you’re agreeing to be bound by
              these Terms and our Rules. Please see our Privacy Policy for
              information about how we collect, use, share and <br />
              otherwise process information about you.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              If you have any questions about these Terms or our Services,
              please contact <br />
              us at legal@medium.com.
            </p>

            <h5 className="text-2xl font-bold">
              Your Account and Responsibilities
            </h5>

            <p className="text-[20px] font-serif leading-relaxed">
              You’re responsible for your use of the Services and any content
              you provide, <br />
              including compliance with applicable laws. Content on the Services
              may be <br />
              protected by others’ intellectual property rights. Please don’t
              copy, upload, <br />
              download, or share content unless you have the right to do so.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              Your use of the Services must comply with our Rules.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              You may need to register for an account to access some or all of
              our Services. <br />
              Help us keep your account protected. Safeguard your password to
              the <br />
              account, and keep your account information current. We recommend
              that <br />
              you do not share your password with others.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              If you’re accepting these Terms and using the Services on behalf
              of someone <br />
              else (such as another person or entity), you represent that you’re
              authorized <br />
              to do so, and in that case the words “you” or “your” in these
              Terms include <br />
              that other person or entity.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              To use our Services, you must be at least 13 years old.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              If you use the Services to access, collect, or use personal
              information about <br />
              other Medium users (“Personal Information”), you agree to do so in{" "}
              <br />
              compliance with applicable laws. You further agree not to sell any
              Personal <br />
              Information, where the term “sell” has the meaning given to it
              under <br />
              applicable laws.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              For Personal Information you provide to us (e.g. as a Newsletter
              Editor), you <br />
              represent and warrant that you have lawfully collected the
              Personal <br />
              Information and that you or a third party has provided all
              required notices <br />
              and collected all required consents before collecting the Personal{" "}
              <br />
              Information. You further represent and warrant that Medium’s use
              of such <br />
              Personal Information in accordance with the purposes for which you{" "}
              <br />
              provided us the Personal Information will not violate,
              misappropriate or <br />
              infringe any rights of another (including intellectual property
              rights or <br />
              privacy rights) and will not cause us to violate any applicable
              laws.
            </p>

            <h5 className="text-2xl font-bold">User Content on the Services</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              Medium may review your conduct and content for compliance with
              these <br />
              Terms and our Rules, and reserves the right to remove any
              violating content.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              Medium reserves the right to delete or disable content alleged to
              be <br />
              infringing the intellectual property rights of others, and to
              terminate <br />
              accounts of repeat infringers. We respond to notices of alleged
              copyright <br />
              infringement if they comply with the law; please report such
              notices using <br />
              our Copyright Policy.
            </p>

            <h5 className="text-2xl font-bold">Rights and Ownership</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              You retain your rights to any content you submit, post or display
              on or <br />
              through the Services.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              Unless otherwise agreed in writing, by submitting, posting, or
              displaying <br />
              content on or through the Services, you grant Medium a
              nonexclusive, <br />
              royalty-free, worldwide, fully paid, and sublicensable license to
              use, <br />
              reproduce, modify, adapt, publish, translate, create derivative
              works from,
              <br /> distribute, publicly perform and display your content and
              any name,
              <br /> username or likeness provided in connection with your
              content in all media <br />
              formats and distribution methods now known or later developed on
              the <br />
              Services.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              Medium needs this license because you own your content and Medium{" "}
              <br />
              therefore can’t display it across its various surfaces (i.e.,
              mobile, web) <br />
              without your permission.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              This type of license also is needed to distribute your content
              across our <br />
              Services. For example, you post a story on Medium. It is
              reproduced as <br />
              versions on both our website and app, and distributed to multiple
              places <br />
              within Medium, such as the homepage or reading lists. A
              modification might <br />
              be that we show a snippet of your work (and not the full post) in
              a preview, <br />
              with attribution to you. A derivative work might be a list of top
              authors or <br />
              quotes on Medium that uses portions of your content, again with
              full <br />
              attribution. This license applies to our Services only, and does
              not grant us <br />
              any permissions outside of our Services.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              So long as you comply with these Terms, Medium gives you a
              limited, <br />
              personal, non-exclusive, and non-assignable license to access and
              use our <br />
              ervices.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              The Services are protected by copyright, trademark, and other US
              and <br />
              foreign laws. These Terms don’t grant you any right, title or
              interest in the <br />
              Services, other users’ content on the Services, or Medium
              trademarks, logos <br />
              or other brand features.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              Separate and apart from the content you submit, post or display on
              our <br />
              Services, we welcome feedback, including any comments, ideas and{" "}
              <br />
              suggestions you have about our Services. We may use this feedback
              for any <br />
              purpose, in our sole discretion, without any obligation to you. We
              may treat <br />
              feedback as nonconfidential.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              We may stop providing the Services or any of its features within
              our sole <br />
              discretion. We also retain the right to create limits on use and{" "}
              <br />
              storage and may remove or limit content distribution on the
              Services.
            </p>

            <h5 className="text-2xl font-bold">Termination</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              You’re free to stop using our Services at any time. We reserve the
              right to <br />
              suspend or terminate your access to the Services with or without
              notice.
            </p>

            <h5 className="text-2xl font-bold">Transfer and Processing Data</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              In order for us to provide our Services, you agree that we may
              process, <br />
              transfer and store information about you in the US and other
              countries,
              <br /> where you may not have the same rights and protections as
              you do under <br />
              local law.
            </p>

            <h5 className="text-2xl font-bold">Indemnification</h5>
            <p className="text-[20px] font-serif leading-relaxed">
              To the fullest extent permitted by applicable law, you will
              indemnify, defend <br />
              and hold harmless Medium, and our officers, directors, agents,
              partners and <br />
              employees (individually and collectively, the “Medium Parties”)
              from and <br />
              against any losses, liabilities, claims, demands, damages,
              expenses or costs <br />
              (“Claims”) arising out of or related to your violation,
              misappropriation or <br />
              infringement of any rights of another (including intellectual
              property rights <br />
              or privacy rights) or your violation of the law. You agree to
              promptly notify <br />
              Medium Parties of any third-party Claims, cooperate with Medium
              Parties in <br />
              defending such Claims and pay all fees, costs and expenses
              associated with <br />
              defending such Claims (including attorneys’ fees). You also agree
              that the <br />
              Medium Parties will have control of the defense or settlement, at
              Medium’s <br />
              sole option, of any third-party Claims.
            </p>

            <h5 className="text-2xl font-bold">
              Disclaimers — Service is “As Is”
            </h5>
            <p className="text-[20px] font-serif leading-relaxed">
              Medium aims to give you great Services but there are some things
              we can’t <br />
              guarantee. Your use of our Services is at your sole risk. You
              understand that <br />
              our Services and any content posted or shared by users on the
              Services are <br />
              provided “as is” and “as available” without warranties of any
              kind, either <br />
              express or implied, including implied warranties of
              merchantability, fitness <br />
              for a particular purpose, title, and non-infringement. In
              addition, Medium <br />
              doesn’t represent or warrant that our Services are accurate,
              complete, <br />
              reliable, current or error-free. No advice or information obtained
              from <br />
              Medium or through the Services will create any warranty or
              representation <br />
              not expressly made in this paragraph. Medium may provide
              information <br />
              about third-party products, services, activities or events, or we
              may allow <br />
              third parties to make their content and information available on
              or through <br />
              our Services (collectively, “Third-Party Content”). We do not
              control or <br />
              endorse, and we make no representations or warranties regarding,
              any <br />
              Third-Party Content. You access and use Third-Party Content at
              your own <br />
              risk. Some locations don’t allow the disclaimers in this paragraph
              and so <br />
              they might not apply to you.
            </p>

            <h5 className="text-2xl font-bold">Limitation of Liability</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              We don’t exclude or limit our liability to you where it would be
              illegal to do <br />
              so; this includes any liability for the gross negligence, fraud or
              intentional <br />
              misconduct of Medium or the other Medium Parties in providing the{" "}
              <br />
              Services. In countries where the following types of exclusions
              aren’t <br />
              allowed, we’re responsible to you only for losses and damages that
              are a <br />
              reasonably foreseeable result of our failure to use reasonable
              care and skill <br />
              or our breach of our contract with you. This paragraph doesn’t
              affect <br />
              consumer rights that can’t be waived or limited by any contract or{" "}
              <br />
              agreement.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              In countries where exclusions or limitations of liability are
              allowed, <br />
              Medium and Medium Parties won’t be liable for:
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (a) Any indirect, consequential, exemplary, incidental, punitive,
              or special <br />
              damages, or any loss of use, data or profits, under any legal
              theory, even if <br />
              Medium or the other Medium Parties have been advised of the
              possibility of <br />
              such damages.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (b) Other than for the types of liability we can’t limit by law
              (as described in <br />
              this section), we limit the total liability of Medium <br />
              and the other Medium Parties for any claim arising out of or
              relating to these Terms or our <br />
              Services, regardless of the form of the action, to the greater of
              $50.00 USD <br />
              or the amount paid by you to use our Services.
            </p>

            <h5 className="text-2xl font-bold">
              Resolving Disputes; Binding Arbitration
            </h5>

            <p className="text-[20px] font-serif leading-relaxed">
              We want to address your concerns without needing a formal legal
              case. <br />
              Before filing a claim against Medium, you agree to contact us and
              attempt to <br />
              resolve the claim informally by sending a written notice of your
              claim by <br />
              email at legal@medium.com or by certified mail addressed to A
              Medium <br />
              Corporation, 3500 South DuPont Highway Suite IQ-101 Dover, DE
              19901. The <br />
              notice must (a) include your name, residence address, email
              address, and <br />
              telephone number; (b) describe the nature and basis of the claim;
              and (c) set <br />
              forth the specific relief sought. Our notice to you will be sent
              to the email <br />
              address associated with your online account and will contain the{" "}
              <br />
              information described above. If we can’t resolve matters within
              thirty (30) <br />
              days after any notice is sent, either party may initiate a formal
              proceeding.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              Please read the following section carefully because it requires
              you to <br />
              arbitrate certain disputes and claims with Medium and limits the
              manner <br />
              in which you can seek relief from us, unless you opt out of
              arbitration by <br />
              following the instructions set forth below. No class or
              representative <br />
              actions or arbitrations are allowed under this arbitration
              provision. In <br />
              addition, arbitration precludes you from suing in court or having
              a jury <br />
              trial.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (a) No Representative Actions. You and Medium agree that any
              dispute <br />
              arising out of or related to these Terms or our Services is
              personal to you <br />
              and Medium and that any dispute will be resolved solely through
              individual <br />
              action, and will not be brought as a class arbitration, class
              action or any <br />
              other type of representative proceeding.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (b) Arbitration of Disputes. Except for small claims disputes in
              which you or <br />
              Medium seeks to bring an individual action in small claims court
              located in <br />
              the county where you reside or disputes in which you or Medium
              seeks <br />
              injunctive or other equitable relief for the alleged infringement
              or <br />
              misappropriation of intellectual property, you and Medium waive
              your <br />
              rights to a jury trial and to have any other dispute arising out
              of or related <br />
              to these Terms or our Services, including claims related to
              privacy and data <br />
              security, (collectively, “Disputes”) resolved in court. All
              Disputes submitted <br />
              to JAMS will be resolved through confidential, binding arbitration
              before one <br />
              arbitrator. Arbitration proceedings will be held in San Francisco,
              California <br />
              unless you’re a consumer, in which case you may elect to hold the
              arbitration <br />
              in your county of residence. For purposes of this section a
              “consumer” means <br />a person using the Services for personal,
              family or household purposes. You <br />
              and Medium agree that Disputes will be held in accordance with the
              JAMS <br />
              Streamlined Arbitration Rules and Procedures (“JAMS Rules”). The
              most <br />
              recent version of the JAMS Rules are available on the JAMS website
              and are <br />
              ncorporated into these Terms by reference. You either acknowledge
              and <br />
              agree that you have read and understand the JAMS Rules or waive
              your <br />
              opportunity to read the JAMS Rules brand waive any claim that the
              JAMS Rules <br />
              are unfair or should not apply for any reason.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (c) You and Medium agree that these Terms affect interstate
              commerce and <br />
              that the enforceability of this section will be substantively and
              procedurally <br />
              governed by the Federal Arbitration Act, 9 U.S.C. § 1, et seq.
              (the “FAA”), to <br />
              the maximum extent permitted by applicable law. As limited by the
              FAA, <br />
              these Terms and the JAMS Rules, the arbitrator will have exclusive
              authority <br />
              to make all procedural and substantive decisions regarding any
              Dispute and <br />
              to grant any remedy that would otherwise be available in court,
              including the <br />
              power to determine the question of arbitrability. The arbitrator
              may conduct <br />
              only an individual arbitration and may not consolidate more than
              one <br />
              individual’s claims, preside over any type of class or
              representative <br />
              proceeding or preside over any proceeding involving more than one{" "}
              <br />
              individual.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (d) The arbitration will allow for the discovery or exchange of
              non-privileged <br />
              information relevant to the Dispute. The arbitrator, Medium, and
              you will <br />
              maintain the confidentiality of any arbitration proceedings,
              judgments and <br />
              awards, including information gathered, prepared and presented for{" "}
              <br />
              purposes of the arbitration or related to the Dispute(s) therein.
              The <br />
              arbitrator will have the authority to make appropriate rulings to
              safeguard <br />
              confidentiality, unless the law provides to the contrary. The duty
              of <br />
              confidentiality doesn’t apply to the extent that disclosure is
              necessary to <br />
              prepare for or conduct the arbitration hearing on the merits, in
              connection <br />
              with a court application for a preliminary remedy, or in
              connection with a <br />
              judicial challenge to an arbitration award or its enforcement, or
              to the extent <br />
              that disclosure is otherwise required by law or judicial decision.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (e) You and Medium agree that for any arbitration you initiate,
              you will pay <br />
              the filing fee (up to a maximum of $250 if you are a consumer),
              and Medium <br />
              will pay the remaining JAMS fees and costs. For any arbitration
              initiated by <br />
              Medium, Medium will pay all JAMS fees and costs. You and Medium
              agree <br />
              that the state or federal courts of the State of California and
              the United States <br />
              sitting in San Francisco, California have exclusive jurisdiction
              over any <br />
              appeals and the enforcement of an arbitration award.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (f) Any Dispute must be filed within one year after the relevant
              claim arose; <br />
              otherwise, the Dispute is permanently barred, which means that you
              and <br />
              Medium will not have the right to assert the claim.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (g) You have the right to opt out of binding arbitration within 30
              days of the <br />
              date you first accepted the terms of this section by sending an
              email of your <br />
              request to trust@medium.com. In order to be effective, the opt-out
              notice <br />
              must include your full name and address and clearly indicate your
              intent to <br />
              opt out of binding arbitration. By opting out of binding
              arbitration, you are <br />
              agreeing to resolve Disputes in accordance with the next section
              regarding <br />
              “Governing Law and Venue.”
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              (h) If any portion of this section is found to be unenforceable or
              unlawful for <br />
              any reason, (1) the unenforceable or unlawful provision shall be
              severed <br />
              from these Terms; (2) severance of the unenforceable or unlawful
              provision <br />
              shall have no impact whatsoever on the remainder of this section
              or the <br />
              parties’ ability to compel arbitration of any remaining claims on
              an <br />
              individual basis pursuant to this section; and (3) to the extent
              that any claims <br />
              must therefore proceed on a class, collective, consolidated, or
              representative <br />
              basis, such claims must be litigated in a civil court of competent
              jurisdiction <br />
              and not in arbitration, and the parties agree that litigation of
              those claims <br />
              shall be stayed pending the outcome of any individual claims in
              arbitration. <br />
              Further, if any part of this section is found to prohibit an
              individual claim <br />
              seeking public injunctive relief, that provision will have no
              effect to the <br />
              extent such relief is allowed to be sought out of arbitration, and
              the <br />
              remainder of this section will be enforceable.
            </p>

            <h5 className="text-2xl font-bold">Governing Law and Venue</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              These Terms and any dispute that arises between you and Medium
              will be <br />
              governed by California law except for its conflict of law
              principles. Any <br />
              dispute between the parties that’s not subject to arbitration or
              can’t be heard <br />
              in small claims court will be resolved in the state or federal
              courts of <br />
              California and the United States, respectively, sitting in San
              Francisco, <br />
              California.
            </p>

            <p className="text-[20px] font-serif leading-relaxed">
              Some countries have laws that require agreements to be governed by
              the <br />
              local laws of the consumer’s country. This paragraph doesn’t
              override those <br />
              laws.
            </p>

            <h5 className="text-2xl font-bold">Amendments</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              We may make changes to these Terms from time to time. If we make{" "}
              <br />
              changes, we’ll provide you with notice of them by sending an email
              to the <br />
              email address associated with your account, offering an in-product{" "}
              <br />
              notification, or updating the date at the top of these Terms.
              Unless we say <br />
              otherwise in our notice, the amended Terms will be effective
              immediately, <br />
              and your continued use of our Services after we provide such
              notice will <br />
              confirm your acceptance of the changes. If you don’t agree to the
              amended <br />
              Terms, you must stop using our Services.
            </p>

            <h5 className="text-2xl font-bold">Severability</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              If any provision or part of a provision of these Terms is
              unlawful, void or <br />
              unenforceable, that provision or part of the provision is deemed
              severable <br />
              from these Terms and does not affect the validity and
              enforceability of any <br />
              remaining provisions.
            </p>

            <h5 className="text-2xl font-bold">Miscellaneous</h5>

            <p className="text-[20px] font-serif leading-relaxed">
              Medium’s failure to exercise or enforce any right or provision of
              these Terms <br />
              will not operate as a waiver of such right or provision. These
              Terms, and the <br />
              terms and policies listed in the Other Terms and Policies that May
              Apply to <br />
              You Section, reflect the entire agreement between the parties
              relating to <br />
              the subject matter hereof and supersede all prior agreements,
              statements and <br />
              understandings of the parties. The section titles in these Terms
              are for <br />
              convenience only and have no legal or contractual effect. Use of
              the word <br />
              “including” will be interpreted to mean “including without
              limitation.”
              <br /> Except as otherwise provided herein, these Terms are
              intended solely for the <br />
              benefit of the parties and are not intended to confer third-party
              beneficiary <br />
              rights upon any other person or entity. You agree that
              communications and <br />
              transactions between us may be conducted electronically.
            </p>

            <h5 className="text-2xl font-bold">
              Other Terms and Policies that May Apply to You
            </h5>

            <div className="flex flex-col">
              <h6>
                -{" "}
                <Link to="/rules" className="underline text-[20px]">
                  Medium Rules
                </Link>
              </h6>
              <h6>
                -{" "}
                <Link to="/rules" className="underline text-[20px]">
                  Partner Program Terms
                </Link>
              </h6>

              <h6>
                -{" "}
                <Link to="/rules" className="underline text-[20px]">
                  Membership Terms of Service
                </Link>
              </h6>
              <h6>
                -{" "}
                <Link to="/rules" className="underline text-[20px]">
                  Username Policy
                </Link>
              </h6>
              <h6 className="text-[20px]">
                - Amendment to Medium Terms of Service Applicable to U.S.
                Government <br />Users
              </h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
