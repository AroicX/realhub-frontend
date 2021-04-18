import React from "react";
import Button from "../button";
import Header from "../header";

export default function Terms() {
  return (
    <div className="flex justify-center font-inter overflow-y-hidden p-4 lg:p-0">
      <div className="lg:mx-0 w-full lg:w-2/4 pt-8 pb-4 border mt-4 mb-10">
        <div className="px-8 mb-5">
          <Header text="Terms and conditions" />
          <hr />
          <div className="font-semibold mt-8 mb-4">
            Before proceeding with your payment, kindly read the terms and
            conditions.
          </div>
          <div className="disable-scroll pl-4 border-l-2 border-black border-dashed mt-4 leading-7 overflow-y-scroll">
            <p>
              The General Data Protection Regulation (GDPR) — Europe’s strict
              privacy law that applies to companies worldwide with EU users —
              does not directly affect the terms and conditions of your website.
            </p>
            <p>
              Although the GDPR doesn’t regulate what your terms and conditions
              must include, it mandates that you create a separate website
              privacy policy, as does the newly enacted California Consumer
              Privacy Act (CCPA). See our CCPA vs GDPR infographic to understand
              the differences between these two laws.
            </p>
            <p>
              If you target users in the EU, the GDPR affects you and threatens
              crippling fines for noncompliance. You may have noticed many sites
              now visibly disclosing browser cookies as a result of GDPR, but
              this is far from the only requirement. Read our What is GDPR guide
              for a plain English introduction to this law’s strict compliance
              requirements if you’re unsure where to start.
            </p>
            <p>
              Even a short terms and conditions agreement should include several
              key clauses to safeguard your business. For example, if you’re
              selling online and incorrectly price an item, your terms and
              conditions are what will enable you to cancel the order.
            </p>
            <p>
              The following are some of the most important sections of your
              terms and conditions for ensuring user clarity and preventing
              misunderstandings:
            </p>
            <p>Disclaimer</p>
            <p>
              A disclaimer states that your site is available on an “as-is and
              as-available basis,” and that users use it at their own risk. A
              basic disclaimer template should include these terms are others,
              as well.
            </p>
            <p>
              Corrections We’re all human. If you make errors on your site, you
              need to show that you’re not liable. This section covers your back
              just in case there are any mistakes in your content, allowing you
              to update it with the correct information at any time. Explicitly
              listing prohibited activities is another way to stop visitors
              misusing your site. This section should include a special clause
              regarding user-generated content in forums and comments. For
              example, to help you remove offensive usernames.
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center mt-5 text-sm">
          By selecting “I agree” below, I agree to RealHubAfrica’s
          <span className="underline ml-1">Terms of and conditions</span>
        </div>
        <div className="flex items-center justify-center font-semibold mt-2">
          <input className="mr-2 w-4 h-4" type="checkbox" />
          <div>I agree</div>
        </div>
        <div className="px-8">
          <Button text="Continue" />
        </div>
      </div>
    </div>
  );
}
