import React from "react";
import classes from "./policy.module.css";

export default function Policy() {
  return (
    <div className="w-full p-5">
      <h4 className="font-unna font-40 text-gray">Privacy Policy</h4>
      <h5 className="font-unna font-32 text-gray">
        Curious about how 10ancy uses data?
      </h5>

      <p className="text-justify font-inter font-25">
        RealHub Africa LLC., its subsidiaries and affiliates (“10ancy”, “we” or
        “us”) provides this Privacy Policy (this “Policy”) to inform you of our
        policies and procedures regarding the collection, use and disclosure of
        Personal Information we receive from users of www.10ancy.com (the
        “Site”) and other products and services (collectively, the “Services”).
        This Policy also tells you about your rights and choices with respect to
        your Personal Information, and how you can contact us if you have any
        questions or concerns. Unless otherwise defined in this Policy, terms
        used in this Policy have the same meanings as in our Terms of Service:
        <a href="https://www.10ancy.com/terms-of-service">
          https://www.10ancy.com/terms-of-service
        </a>
      </p>
      <p className="text-justify font-inter font-25 mt-4">
        For the purpose of this Policy, “Personal Information” means any
        information relating to an identified or identifiable individual.
      </p>
      <div className={classes.PoliciesContainer}>
        <section className={classes.PolicyContainer}>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>A. </span>What Personal
            Information Do We Collect About You?
          </h3>
          <p className={classes.PolicyDetail}>
            Where applicable, we indicate whether and why you must provide us
            with your Personal Information, as well as the consequences of
            failing to do so. If you do not provide Personal Information when
            requested, you may not be able to benefit from all our Services if
            that information is necessary to provide you with them or if we are
            legally required to collect it. We may collect Personal Information
            about you directly from you and from third parties, as well as
            automatically through your use of our Services.
          </p>
          <h4 className={classes.PolicySubHeading}>
            Information We Collect Directly from You.
          </h4>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Registration, Profile, and check-in.
                </span>{" "}
                When you register with us through the Services or become a
                10ancy member through the Services (“Member”) to book an
                accommodation (“Accommodation”), we ask for certain Personal and
                contact Information including your full name, phone number,
                email address, postal address, address of submitted property,
                password, date of birth, and booking information. You may be
                asked to provide a picture, government ID, and ID number for
                identity verification purposes at registration or check-in. To
                the extent permitted by applicable law, we may receive
                additional information about you, such as health information
                related to contagious diseases. Our asks are dependent on the
                features and services you require.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Third Party Services.
                </span>{" "}
                We may make available to you at your election the services of
                third-party service providers, such as transportation,
                housekeeping, storage, parking reservations, or meal/grocery
                delivery. When you access these providers via the Services you
                may be asked to provide certain Personal Information, such as
                your name, phone number, address of submitted property, drivers
                license number, and/or license plate number, which will be used
                by these service providers in the provision of their services.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Payment Information.
                </span>{" "}
                If you make bookings, reservations or other payment services for
                our Services, payment related information, such as your credit
                card number or billing information, is collected by our third
                party payment processor on our behalf. Other payment transaction
                information that may be collected include banking details,
                PayPal email address, IBAN information, and other related
                transaction details.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  10ancy Account profile administration and personalization.
                </span>{" "}
                We may collect any Personal Information you provide to us as
                part of the administration and personalization of your 10ancy
                account (“10ancy Account”) profile (e.g., gender, zip code and
                individual preferences or demographic information). You may
                voluntarily provide us with information about yourself so that
                we can personalize your stays with us (e.g., the temperature you
                prefer, preferred language(s), whether or not you have children,
                whether or not you need a crib, etc.).
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>Communications.</span>{" "}
                If you communicate with our customer care team directly (e.g.,
                via email, SMS, phone call, in-app messaging), we will collect
                your name, contact details, the content, date and time of your
                message and any related attachments, and other information you
                may directly provide to us. You may choose to submit your email
                address and phone number on our Site to receive our updates.
                Other Information may be collected when you respond to surveys
                regarding our services or review our services, post to community
                forums, participate in promotions, or share your experience with
                us.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>COVID-19.</span> The
                wellbeing of our guests and team members is our top priority.
                During the ongoing COVID-19 pandemic, if you are a guest of our
                host listed properties, certain Personal Information from you
                related to possible risk of COVID-19 exposure or infection may
                be required. This information may include (but may not be
                limited to) any recent contact with someone known to have or who
                is experiencing symptoms of COVID-19; your recent travel
                history; if you are currently quarantining due to a possible
                COVID-19 exposure and/or are awaiting a COVID-19 test result;
                and if you are currently experiencing COVID-19 symptoms
                (consistent with Centers for Disease Control and Prevention
                (CDC) guidance). Learn more about how we’re responding to
                COVID-19 at 10ancy.com/covid-response.
              </p>
            </div>
          </div>
          <h4 className={classes.PolicySubHeading}>
            Information We Collect from Your Interactions with Us.
          </h4>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>Customer service.</span>{" "}
                If you reach out to us with inquiries or requests, we will keep
                a record of how your inquiry or request was handled. If you
                contact us via phone, we may record your call for quality
                assurance, training, and compliance purposes.
              </p>
            </div>
          </div>
          <h4 className={classes.PolicySubHeading}>
            Information We Collect Automatically.
          </h4>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Online usage data.
                </span>{" "}
                We may automatically collect the following information about
                your use of our Services through cookies, web beacons, and
                similar technologies: your domain name; your browser type;
                operating system type, name, and version; page views; links you
                click; your IP address; location information; the length of time
                you visit or use our Services; referring URL; access date and
                time; mobile device ID; language information; device name and
                model; and other information about your activities within the
                Services and communications that we send you. Please see the
                section “Cookies and Other Tracking Mechanisms” below for more
                information. Where required under applicable law, we will only
                perform such data collection with your consent.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Property usage data.
                </span>{" "}
                We automatically collect your 10ancy stay history (e.g., to
                identify a return guest). We may also automatically collect
                information regarding the use of a Property (e.g., when a door
                was unlocked). We may use or have access to security cameras in
                certain common areas of host buildings housing stays (e.g., in
                lobbies or monitoring public entrances). Where required under
                applicable law, we will only collect property usage data with
                your consent.
              </p>
            </div>
          </div>
          <h4 className={classes.PolicySubHeading}>
            Information We Collect from Third Parties.
          </h4>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>Other Members.</span>{" "}
                When a 10ancy member adds you on their reservation, we may
                obtain Personal Information (e.g. email or other contact
                information) about you from that Member. If you are not a Member
                you may be invited to become a Member. If you are already a
                Member, that reservation will be linked to your account.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <div>
                <p className={classes.SubPolicyDetails}>
                  <span className={classes.DetailsHeader}>
                    Third party accounts.
                  </span>{" "}
                  If you link, connect, or login to the 10ancy Platform with a
                  third party service, we may obtain Personal Information about
                  you from the third party authentication and social networking
                  services (“SNS”) (such as Apple, Facebook, Google and
                  LinkedIn). We may obtain Personal Information to link your
                  10ancy Account with third party accounts (“Third Party
                  Account”) by either: (i) providing your Third Party Account
                  login information to 10ancy through the Service; or (ii)
                  allowing 10ancy to access your Third Party Account, as is
                  permitted under the applicable terms and conditions that
                  govern your use of each Third Party Account. We may receive
                  from such third parties the following types of Personal
                  Information:
                </p>
                <div className={classes.InnerPolicyDetailContainer}>
                  <div className={classes.InnerPolicyDetail}>
                    <p className={classes.InnerPolicy}>
                      Apple: email, first name, last name.
                    </p>
                  </div>
                  <div className={classes.InnerPolicyDetail}>
                    <p className={classes.InnerPolicy}>
                      Facebook: ID, cover photo, email, first name, last name,
                      age range, link, gender, location, picture, timezone, date
                      of last update, user verification.
                    </p>
                  </div>
                  <div className={classes.InnerPolicyDetail}>
                    <p className={classes.InnerPolicy}>
                      Google: Google ID, name, profile URL, email address.
                    </p>
                  </div>
                  <div className={classes.InnerPolicyDetail}>
                    <p className={classes.InnerPolicy}>
                      LinkedIn: basic profile, email address.
                    </p>
                  </div>
                </div>
                <p className={classes.SubPolicyDetails}>
                  We may also receive any other information you authorize 10ancy
                  to access by authorizing the SNS to provide such information.
                </p>
              </div>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Third party partners and travel services.
                </span>
                We may receive your booking information via our partners, such
                as your name, email address, phone number, information available
                in your user account with a third party travel service and your
                10ancy stay information (e.g., information on the 10ancy
                property you reserved).
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Background checks.
                </span>
                To the extent permitted by applicable laws and with your consent
                where required, we may obtain the local version of police,
                background or registered sex offender checks. We may use your
                information, including your full name and date of birth, to
                obtain such reports. If you book a property from the United
                States, we may obtain reports from public records of criminal
                convictions or sex offender registrations. To the extent
                permissible by law, we may also engage with a vendor to conduct
                a background check for use in our trust and safety, fraud
                prevention and risk assessment efforts, and/or to comply with
                landlord requirements.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Vendor and partner relationships.
                </span>
                We receive Personal Information of partners and other
                individuals who are contact persons at our partners and vendors,
                such as contact details and other information relevant to the
                particular business relationship.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.PolicyContainer}>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>B. </span>How We Use Your
            Personal Information
          </h3>
          <p className={classes.PolicyDetail}>
            We use your Personal Information for the following purposes:
          </p>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  To operate, provide, and maintain our Services,
                </span>{" "}
                to communicate with you about our Services, to respond to your
                inquiries, to fulfill our contract with you, to complete your
                transactions, and for other customer service purposes.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                To link your 10ancy Account with Third Party Accounts to add
                information from Third Party Accounts to your 10ancy Account and
                10ancy Account profile page. Depending on the Third Party
                Accounts you choose and subject to the privacy settings that you
                have set in such Third Party Accounts, you understand that by
                granting us access to the Third Party Accounts, we will access,
                make available and store (if applicable and as permitted by the
                SNS and authorized by you) the information in your Third Party
                Accounts so that it is available on and through your 10ancy
                Account on the Site and Service.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                To tailor the content and information that we may send or
                display to you, and to otherwise personalize your experiences
                while using our Services, including personalizing your 10ancy
                profile and identifying you as a return guest to provide
                products or services to you according to your preferences or
                restrictions (e.g., by turning on the air conditioner or filling
                the refrigerator according to your preferences). We may also
                tailor our Services and communications on the basis of your Site
                browsing history. Where required under applicable law, we will
                only use your Personal Information for such purposes with your
                consent.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                To personalize, measure, and improve our advertising. To contact
                you with newsletters, marketing or promotional materials and
                other information that may be of interest to you relating to
                10ancy or its partners, via email and SMS. Where required under
                applicable law, we will only send you marketing communications
                with your consent. We also may use the information that we learn
                about you to assist us in advertising our Services on third
                party websites.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                For quality assurance purposes.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                To invite you to events and relevant opportunities and solicit a
                review from you.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                To better understand how users access and use our Services, both
                on an aggregated and individualized basis, in order to improve
                the quality and value of our Services, provide you with a better
                experience, and develop new Services, and for other research and
                analytical purposes.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                To find and prevent fraud and respond to trust and safety issues
                that may arise.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                For compliance purposes, including enforcing our Terms of
                Service or other legal rights, or as may be required by
                applicable laws and regulations or requested by any judicial
                process or governmental agency.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                For other purposes for which we provide specific notice at the
                time the information is collected.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                During the ongoing COVID-19 pandemic, we may use the Personal
                Information described in the section labeled “COVID-19”, above,
                to help maintain a safe environment for guests, team members and
                partners. Personal Information you share with us related to
                COVID-19 will not be used by 10ancy or shared for any purposes
                unrelated to COVID-19.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.PolicyContainer}>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>C. </span>When We Use
            Personal Information About You
          </h3>
          <p className={classes.PolicyDetail}>
            If you are located in the European Economic Area (“EEA”), we process
            your Personal Information only based on a valid legal ground,
            including when:
          </p>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Consent. You have consented to the use of your Personal
                Information, for example for marketing purposes or to track your
                online activities via cookies and similar technologies.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Contract. We need your Personal Information to provide you with
                our Services, for example for account registration and
                management or to respond to your inquiries.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Legal obligation. We have a legal obligation to use your
                Personal Information, for example to comply with tax and
                accounting obligations, or anti-terrorism laws.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Legitimate interest. We have a legitimate interest in using your
                Personal Information for product development and internal
                analytics purposes, and otherwise to improve the safety,
                security, and performance of our Services. We only rely on our
                or a third party’s legitimate interests to process your Personal
                Information when these interests are not overridden by your
                rights and interests.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.PolicyContainer}>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>D. </span>How We Share Your
            Personal Information
          </h3>
          <p className={classes.PolicyDetail}>
            We may employ third party companies and individuals to support our
            Services. We do not sell or otherwise disclose your Personal
            Information for purposes unrelated to our Services, unless otherwise
            described in this Policy or disclosed to you. We may share your
            Personal Information under the following circumstances:
          </p>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>Affiliates.</span> We
                may disclose the information we collect about you to our
                affiliates or subsidiaries; however, if we do so, their use and
                disclosure of your Personal Information will be subject to this
                Policy.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Service providers.
                </span>{" "}
                We may disclose Personal Information we collect about you to
                third party vendors, service providers, contractors or agents
                who perform functions on our behalf, including to facilitate our
                Services, to provide the Services on our behalf, to perform
                Site-related services (e.g., maintenance services, database
                management, web analytics, fraud detection services relating to
                the activity of 10ancy Users and improvement of the Site’s
                features), to perform background checks, to send marketing
                communications, to manage job applications that we receive via
                the career page on our Site, to aggregate reviews, or to assist
                us in analyzing how our Site and Services are used. We require
                these service providers to safeguard the privacy of Personal
                Information they process on our behalf.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Landlords and property managers.
                </span>{" "}
                We may share reports with landlords and property managers
                regarding the use of their properties. Additionally, we may
                share guest names, email addresses and dates of stay at their
                properties for security purposes (e.g., to keep out individuals
                who are not guests). For long term rentals, we may share guests’
                name, email address, phone number, ID, date of birth and address
                with landlords. If permitted by applicable law, we may also
                share results of background checks that we carry out in line
                with applicable laws.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Advertising and analytics partners.
                </span>{" "}
                Where you provide consent, we may share your information as
                described at the time of consent, such as when authorizing a
                third-party application or website to access your 10ancy account
                or participating in promotional activities by 10ancy partners or
                third parties. Where permissible with applicable law, we may use
                certain information about you, such as your email address,
                de-identify it, and share it with social media platforms, to
                generate leads, drive traffic to 10ancy or otherwise promote our
                products and services. We may also share information about the
                use of our Site and Services with third parties for analytics
                and optimization purposes.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Business transfers.
                </span>{" "}
                10ancy may sell, transfer or otherwise share some or all of its
                assets, including your Personal Information, in connection with
                the consideration, negotiation, or completion of a merger,
                acquisition, reorganization or sale of assets or in the event of
                bankruptcy. In this event, we will notify you before your
                personal information is transferred and becomes subject to a
                different privacy policy.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>
                  Compliance with laws and law enforcement; guarantee program.
                </span>{" "}
                10ancy cooperates with government and law enforcement officials
                (e.g., immigration offices, customs authorities, anti-terrorism
                authorities) and private parties to enforce and comply with the
                law. In our sole discretion, as we believe necessary or
                appropriate, we will disclose your Personal Information to
                government or law enforcement officials or private parties to
                respond to claims and legal process (including but not limited
                to subpoenas), to protect the property and rights of 10ancy or a
                third party, to protect the safety of the public or any person,
                or to prevent or stop activity we may consider to be, or to pose
                a risk of being, any illegal, unethical or legally actionable
                activity.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                <span className={classes.DetailsHeader}>Consent.</span> We may
                also disclose your Personal Information with your permission.
                For example, with your consent, we may post your testimonial on
                the Site along with your name. If you would like your
                testimonial removed please contact us.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>5. </span>Cookies and Other
            Tracking Mechanisms
          </h3>
          <p className={classes.PolicyDetail}>
            We use cookies, web beacons, and log files to collect information
            about your use of our Website, as described above.
          </p>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <div>
                <p className={classes.SubPolicyDetails}>
                  <span className={classes.DetailsHeader}>Cookies.</span>
                  We use “cookies” to collect information. A cookie is a small
                  data file that we transfer to your computer’s hard disk for
                  record-keeping purposes. We use cookies for two purposes: I)
                  we utilize persistent cookies to save your login information
                  for future logins to our Services. II) we utilize session ID
                  cookies to enable certain features of our Services, to better
                  understand how you interact with the Services and to monitor
                  aggregate usage by 10ancy Users and web traffic routing on the
                  Services. Unlike persistent cookies, session cookies are
                  deleted from your computer when you log off from the Site and
                  Service and then close your browser. We use the following
                  cookies:
                </p>
                <div className={classes.InnerPolicyDetailContainer}>
                  <div className={classes.InnerPolicyDetail}>
                    <p className={classes.InnerPolicy}>
                      Google. We use Google Analytics cookies and Google Tag
                      Manager to analyze our Services. You can learn about
                      Google’s practices by going to
                      https://policies.google.com/privacy/google-partners/, and
                      opt out of them by downloading the Google Analytics
                      opt-out browser add-on available at
                      https://tools.google.com/dlpage/gaoptout. We also use
                      Google cookies to serve ads based on a 10ancy User’s prior
                      visits. You can learn more about these cookies here and
                      disable these cookies via Google’s Ads Settings or Ad
                      Settings for mobile apps. Parts of 10ancy may also be
                      linked to third-party services such as Google Maps/Earth.
                      Use of these services is subject to the privacy policies
                      of those providers, such as Google Maps/Earth Additional
                      Terms of Use, Google Privacy Policy (see here for more
                      information on how Google uses information). 10ancy does
                      not own or control these third parties and when you
                      interact with them you are providing your information to
                      them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                You can instruct your browser, by changing its options, to stop
                accepting cookies or to prompt you before accepting a cookie
                from the websites you visit. If you do not accept cookies,
                however, you may not be able to use all portions of the Site or
                all functionality of the Service.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Web beacons. Our Site may contain electronic images known as Web
                beacons (sometimes called single-pixel gifs) and are used along
                with cookies to compile aggregated statistics to analyze how our
                Site is used and may be used in some of our emails to let us
                know which emails and links have been opened by recipients. This
                allows us to gauge the effectiveness of our customer
                communications and marketing campaigns.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Log data. When you visit our Site, whether as a Member or a
                non-registered user just browsing (any of these, a “10ancy
                User”), our servers automatically record information that your
                browser sends whenever you visit a website (“Log Data”). This
                Log Data may include information such as your computer’s
                Internet Protocol (“IP”) address, browser type or the webpage
                you were visiting before you came to our Site, pages of our Site
                that you visit, the time spent on those pages, information you
                search for on our Site, access times and dates, and other
                statistics. We use this information to monitor and analyze use
                of the Site and the Service and for the Site’s technical
                administration, to increase our Site functionality and
                user-friendliness, and to better tailor our Site to our
                visitors’ needs.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Error reporting. We may use JavaScript tracking notifier or
                other technology to analyze the functioning of our Services.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>E. </span>Children’s Privacy
          </h3>
          <p className={classes.PolicyDetail}>
            Our Site is not directed to individuals under 16. We do not
            knowingly collect Personal Information from children under 16. If a
            parent or guardian becomes aware that his or her child has provided
            us with Personal Information without their consent, he or she should
            contact us via the information provided in the “How to Contact Us”
            section, below. If we become aware that a child under 16 has
            provided us with Personal Information, we will delete such
            information from our files.
          </p>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>F. </span>Links to Other
            Websites
          </h3>
          <p className={classes.PolicyDetail}>
            Our Site may contain links to other websites. If you choose to visit
            an advertiser by clicking on a banner ad or other type of
            advertisement, or click on another third party link, you will be
            directed to that third party's website. The fact that we may link to
            a website or present a banner ad or other type of advertisement is
            not an endorsement, authorization or representation of our
            affiliation with that third party, nor is it an endorsement of their
            privacy or information security policies or practices. We do not
            exercise control over third party websites. These other websites may
            place their own cookies or other files on your computer, collect
            data or solicit personal information from you. Other websites follow
            different rules regarding the use or disclosure of the personal
            information you submit to them. We encourage you to read the privacy
            policies or statements of the other websites you visit. Some
            portions of the 10ancy Platform implement Google Maps/Earth mapping
            services and your use is subject to Google’s terms of use, which
            incorporates Google’s Privacy Policy.
          </p>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>G. </span>Data Security &
            Phishing
          </h3>
          <p className={classes.PolicyDetail}>
            While no organization can guarantee perfect security, we are
            continuously implementing and updating administrative, technical,
            and physical security measures to help protect your information
            against unauthorized access, loss, destruction, or alteration.
            10ancy is very concerned with safeguarding your Personal Information
            from identity theft, phishing, and data related breaches. When you
            enter particularly sensitive information (such as a credit card
            number) on our registration or reservation forms, we encrypt that
            information using secure socket layer technology (SSL). We follow
            generally accepted industry standards to protect the Personal
            Information submitted to us, both during transmission and once we
            receive it. If you have any questions about security on our Site and
            Services, you can contact us. We will make any legally required
            disclosures of any breach of the security, confidentiality, or
            integrity of your unencrypted electronically stored “personal data”
            (as defined in applicable state statutes on security breach
            notification) to you via email or conspicuous posting on the Site in
            the most expedient time possible and without unreasonable delay,
            insofar as consistent with (i) the legitimate needs of law
            enforcement or (ii) any measures necessary to determine the scope of
            the breach and restore the reasonable integrity of the data system.
            We do not and will not, at any time, request your credit card
            information, your 10ancy Account ID, login password, or national
            identification numbers in a non-secure or unsolicited email or
            telephone communication.
          </p>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>H. </span>Data Retention
          </h3>
          <p className={classes.PolicyDetail}>
            We take measures to delete your Personal Information or keep it in a
            form that does not permit identifying you when this information is
            no longer necessary for the purposes for which we process it, unless
            we are required by law to keep this information for a longer period.
            When determining the retention period, we take into account various
            criteria, such as the type of Services requested by or provided to
            you, the nature and length of our relationship with you, possible
            re-enrolment with our Services, the impact on the Services we
            provide to you if we delete some information from or about you,
            mandatory retention periods provided by law and the statute of
            limitations.
          </p>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>I. </span>Your Rights and
            Choices
          </h3>
          <p className={classes.PolicyDetail}>
            You can exercise any of the rights described in this section
            consistent with applicable law. Please note that we may ask you to
            verify your identity and request before taking further action on
            your request.
          </p>
          <div className={classes.SubPolicyContainer}>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Marketing opt-out. If you decide at any time that you no longer
                wish to receive marketing communications from us, please follow
                the unsubscribe instructions provided in any of the
                communications. Please note that even if you opt out of
                receiving promotional messages from us, you will continue to
                receive administrative messages from us.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Changing or deleting information. All Members may review,
                update, correct or delete the Personal Information in their
                registration profile by contacting us at
                realhubafricaa@gmail.com or editing the relevant part of their
                profile. If you would like us to cancel your 10ancy Account,
                please contact us and we will attempt to accommodate your
                request if we do not have any legal obligation or a legitimate
                business reason to retain the information contained in your
                10ancy Account. Please note that, if you cancel your 10ancy
                Account, any reviews you have posted via our Site will remain
                publicly viewable. Please see below for privacy contact
                information.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                Opt out from cookies. Most Internet browsers automatically
                accept cookies, but you may be able to change the settings of
                your browser to stop accepting cookies or to prompt you before
                accepting a cookie from the websites you visit. If you set your
                browser to reject cookies, parts of our website may not work for
                you.
              </p>
            </div>
            <div className={classes.SubPolicy}>
              <p className={classes.SubPolicyDetails}>
                European privacy rights. If you are located in the EEA or
                Switzerland, you are entitled to reach out to us via the contact
                details in this Policy and ask us for an overview of your
                Personal Information or ask for a copy. In addition, you may
                request us to update and correct inaccuracies, delete your
                Personal Information, restrict processing of your Personal
                Information, or exercise your right to data portability and to
                easily transfer your Personal Information to another company. In
                some cases, you may object to the processing of your Personal
                Information and where we have asked you for your consent to
                process your Personal Information, you can withdraw it at any
                time. These rights may be limited in some circumstances by local
                law requirements. We always enjoy hearing from you and
                appreciate your business. Should you nonetheless have unresolved
                concerns, you have the right to lodge a complaint with the
                supervisory authority of your residence, place of work or where
                the incident took place.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>J. </span>Cross-Border Data
            Transfers
          </h3>
          <p className={classes.PolicyDetail}>
            Our Services are operated in multiple countries. The Personal
            Information we collect is transferred to our affiliates,
            subsidiaries, service providers and agents, who may be located in
            the United States or in other jurisdictions worldwide. Your consent
            to this Privacy Policy followed by your submission of such
            information represents your agreement to that transfer.
          </p>
          <p className={classes.PolicyDetail}>
            If you are located in the EEA, UK or Switzerland, we comply with
            applicable legal requirements for the transfer of Personal
            Information to countries outside of the EEA, UK or Switzerland. We
            may transfer your Personal Information to countries for which
            adequacy decisions have been issued (e.g., Canada), use contractual
            protections for the transfer of Personal Information, or rely on
            third parties’ Privacy Shield certifications, where applicable. You
            may contact us as specified below to obtain a copy of the safeguards
            we use to transfer Personal Information outside of the EEA, UK or
            Switzerland.
          </p>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>K. </span>Changes to this
            Policy
          </h3>
          <p className={classes.PolicyDetail}>
            Because we’re always developing and improving standards of services
            we provide to you, this Policy may change over time. We will post
            the new Policy online and we will change the “Last Updated” date. We
            encourage you to periodically review this page for the latest
            information on our privacy practices. If any modifications
            materially change your rights, we will provide notice on the Site or
            we will notify you by email (sent to the email address specified in
            your 10ancy Account).
          </p>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>L. </span>How to Contact Us
          </h3>
          <p className={classes.PolicyDetail}>
            For privacy queries, please contact us at realhubafricaa@gmail.com.
          </p>
        </section>
        <section>
          <h3 className={classes.PolicyHeader}>
            <span className={classes.PolicyFigure}>M. </span>Steward of Your
            Personal Information
          </h3>
          <p className={classes.PolicyDetail}>
            The 10ancy entity responsible for your Personal Information under
            this Privacy Policy is defined as the “Steward.” The Steward of your
            Personal Information is based on the location of travel. If your
            stay is located outside of the United States, Mexico or Canada, the
            Steward of your Personal Information is 10ancy. Note that we reserve
            the right to replace the Steward of your Personal Information at any
            time and without notice.
          </p>
        </section>
      </div>
    </div>
  );
}
