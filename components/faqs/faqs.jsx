import React from "react";
import classes from "./faqs.module.css";
import Question from "./question/question";

export default function FAQS() {
  return (
    <div className={classes.FAQSContainer}>
      <h4 className="font-unna font-40 text-gray">
        Frequently Asked Questions
      </h4>
      <div className={classes.RentersContainer}>
        <h4 className={classes.SectionTitle}>Renters</h4>
        <Question
          question="What is 10ancy?"
          answer={[
            {
              main: "A women-founded, small business run by a tech-savvy and business-savvy duo, 10ancy is building a growing, dynamic team positioned to serve as customer advocates. 10ancy is a customer-centric real estate marketplace connecting renters and property owners. 10ancy.com features online tools to ensure transactional confidence, security, and ease. In addition, 10ancy provides access to direct-owner listings, developer-listings, and limited agent-listed properties for short and long-term stays and work needs.",
            },
          ]}
        />
        <Question
          question="Where does the name 10ancy come from?"
          answer={[
            {
              main: "10ancy = Tenancy",
            },
          ]}
        />
        <Question
          question="Which areas does 10ancy currently serve?"
          answer={[
            {
              main: "10ancy’s launch is set to help people find their next short-to-long-term stays and working space in Nigeria with hopes to expand reach to other African markets in the near future. Sign-up to stay connected to our expansion plans.",
            },
          ]}
        />
        <Question
          question="Where is 10ancy going to expand next?"
          answer={[
            {
              main: "We don’t announce new markets until we are ready to serve customers. So to stay up-to-date with our exploits, pls sign-up to receive an email from us about more areas to serve your varying stay needs.",
            },
          ]}
        />
        <Question
          question="Can I buy or sell a home with 10ancy?"
          answer={[
            {
              main: "Not at the current moment, but if we get enough requests from your loyal customers, we just might oblige your requests.",
            },
          ]}
        />
        <Question
          question="What time is move in & move out?"
          answer={[
            {
              main: "Move-in: 4:00pm local time & Move-out: 12:00pm local time. We will do our best to accommodate early arrivals or late move-outs upon request.",
            },
          ]}
        />
        <Question
          question="What is 10ancy’s refund policy?"
          answer={[
            {
              main: "24-Hours Money back guarantee after full-payment reservation",
            },
            {
              main: "At move-in (within 24hrs.), property inspection complaints that trigger a refund",
              subMain: [
                {
                  main: "Any variations of Double-booking - i.e., shared, someone living in the property, etc.",
                },
                {
                  main: "Lister gets penalized if accommodation becomes unavailable 14-days before move-in",
                },
              ],
            },
            {
              main: "If the reservation is canceled within three days (72 hrs.) from the date reserved, we issue a 50% refund.",
              subMain: [
                {
                  main: "Security deposits will be returned once we’ve completed a check of the property after your stay. A 3-5 day turnaround.",
                },
              ],
            },
          ]}
        />
        <Question
          question="What are 10ancy’s charges?"
          answer={[
            {
              main: "Service charge: we charge x% for short-term rentals (including workspaces) and x% for long-term rentals. Minimum rates apply. See full terms and conditions.",
            },
            {
              main: "Holding fee: 30% reservation hold fee (will be subtracted from final payment balance if you proceed with the final booking of your stay)",
            },
            {
              main: "Security deposit: We have a sliding-scale security deposit to cover just-incase incidental charges for short and long-term rental stays, such as damage to the property or furniture. Our rates vary based on up to 30 nights, 3-months, 6-months, and over.",
            },
            {
              main: "Other fees: In addition to the cost of staying in a 10ancy listed property, we charge standard taxes (based on local laws and regulations) as well as a cleaning fee. This will be part of the full breakdown of your charges before payment.",
            },
          ]}
        />
        <Question
          question="How can I contact support?"
          answer={[
            {
              main: "There are many ways to get your questions answered or to get in touch with us:",
              subMain: [
                {
                  main: "Our 24-hr bot service",
                  innerAns: [
                    "Human service on standby if answers are not satisfied by bot -- we strive to avoid being fashionably late ;) so please allow at least a 24hr turnaround (trt) for us to get back to you.",
                  ],
                },
                {
                  main: "You can submit questions to support at realhubafricaa@gmail.com regarding (trt: >= 24hrs.)",
                  innerAns: ["Booking issues", "Transaction issues"],
                },
                {
                  main: "You can call us at 1-000-000-0000. We’re available between 8 a.m. and 5 p.m. WAT weekly. (Please bear with us as we get our lines connected)",
                },
                {
                  main: "You can sign-up to send messages through member dashboards between tenants and listers.",
                },
                {
                  main: "You can even make suggestions for how we can improve our email at realhubafricaa@gmail.com.",
                },
              ],
            },
          ]}
        />
        <Question
          question="Why should you rent or list through 10ancy?"
          answer={[
            {
              main: "We offer convenience, efficiency, and transparency for your diverse rental needs. Let us help find your next stay or list your stay.",
            },
          ]}
        />
        <Question
          question="What is a Verified Source listing?"
          answer={[{ main: "A listing that our legal team has verified" }]}
        />
        <Question
          question="What is the process for reservations?"
          answer={[
            { main: "Reserve a property with a holding fee" },
            {
              main: "(Renter gets an alert of upcoming reservation & Lister receives an alert (10-14 days) to verify space is still available--with a confirmation process)???",
            },
            {
              main: "Complete payment must be received 3 working days before move-in",
            },
            {
              main: "Hold money in an escrow account for 3 working days and be released after no complaints. Money transfers after 24 hrs.",
            },
            {
              main: "At move-in, the renter has 24hrs. to inspect the property and issue any complaints.",
            },
          ]}
        />
        <Question
          question="What are 10ancy’s Policies for fines?"
          answer={[
            {
              main: "If the premises are vacated unclean or damaged, the renter gets fined/keep a security deposit, and the lister gets some money back",
            },
            {
              main: "If a reservation is double-booked without notification, the lister forfeits payment and gets charged a transaction cost/fee.",
            },
          ]}
        />
        <Question
          question="What are your house rules?"
          answer={[
            {
              main: "When you make a reservation with us, you agree to:",
              subMain: [
                { main: "Be kind to the walls and furniture" },
                { main: "Pick up after yourself on your way out" },
                { main: "Be respectful and considerate to your neighbors" },
                { main: "The rest of our House Rules are listed here." },
              ],
            },
          ]}
        />
        <h4 className={classes.LongTermRent}>Long-term rentals</h4>
        <Question
          question="What are long-term rentals?"
          answer={[{ main: "These are rental stays for 6 months and beyond." }]}
        />
        <Question
          question="How does the online lease signing work?"
          answer={[
            {
              main: "All signing happens on our platform in your member account. The landlord or property manager will prepare and issue the lease for e-Signing. When the lease is ready to sign, you will receive a notification email with a link to sign the lease or alert you the lease is prepared for your John Hancock in your 10ancy account. You can only access this lease by signing into your account with your credentials.",
            },
            {
              main: "Please review the entire lease document before signing. After you have reviewed the whole document, click to start signing where indicated. You can download and print a copy of your signed lease agreement.",
            },
          ]}
        />
        <Question
          question="What are micro-payments?"
          answer={[
            {
              main: "Two pea-size payments are sent to your account (please allow 1-2 days) to verify that you own the account and put in the correct details.",
            },
          ]}
        />
        <Question
          question="What is 10ancy’s security deposit process?"
          answer={[
            {
              main: "10ancy-required security deposits",
              subMain: [
                {
                  main: "Two days before your stay begins, we will authorize a hold (not a charge) for the security deposit amount on your payment method on record (we are not liable for any associated fees, including overdraft fees). We will release this hold up to 3-days post-checkout with no property damage reported on inspection. Your bank may take 3-12 business days to process the release of funds. If it turns out we can’t authorize the hold for the security deposit amount, you’ll be notified by email and will have 12 hours to try another payment method. If that doesn’t work out, we’ll cancel your reservation and refund payments.",
                },
              ],
            },
            {
              main: "Host-required security deposits",
              subMain: [
                {
                  main: "Some hosts set a required security deposit for their listing. This amount is not set by 10ancy and will be shown before you make your reservation.",
                },
                {
                  main: "Depending on what was damaged, the amount the host requests may or may not be the same as the security deposit.",
                },
                {
                  main: "If and when a host requests to collect on their security deposit, it will be handled according to the Host Guarantee Terms and Conditions. 10ancy's Host Guarantee is a program that provides property damage protection of up to 1,000,000 USD for hosts of homes. Under the program, hosts must provide documentation of the damaged or missing items and request reimbursement from the guest through our secure online portal within 14 days of check-out or before the subsequent guest checks in (whichever is earlier). If the guest is unwilling or unable to reimburse them, the host can then involve 10ancy.",
                },
              ],
            },
          ]}
        />
        <Question
          question="How do security deposits work if there’s an issue?"
          answer={[
            {
              main: "If there’s an issue during your stay, for either 10ancy-required or host-required deposits, the claims process will work the same. A host can report an incident and submit a request for some or all of the security deposit within 14 days of check-out or before a new guest checks in—whichever is earlier.",
            },
            {
              main: "Find out more about what happens if a host requests to collect their security deposit.",
            },
            {
              main: "The guest has 72 hours to respond to the host’s request. If the guest agrees to pay the amount requested, we’ll process the payment and send it to the host, which usually takes about 7 business days. The guest can either agree to pay the full amount, choose to pay a different amount or decline the request. The guest can include a note to the host.",
            },
            {
              main: "If the guest doesn’t agree to pay the amount requested, the host can choose to involve 10ancy. We will reach out to the guest and resolve the request according to our Host Guarantee Terms and Conditions.",
            },
          ]}
        />
      </div>
      <div className={classes.RentersContainer}>
        <h4 className={classes.SectionTitle}>For Listers</h4>
        <Question
          question="What happens when my listing gets rented?"
          answer={[
            { main: "It automatically gets taken off the active listing list" },
          ]}
        />
        <Question
          question="How quickly will my listing be published?"
          answer={[
            {
              main: "Listings can take up to 73 hours to post to the main search page.",
            },
          ]}
        />
        <Question
          question="Can I edit listing after post?"
          answer={[
            {
              main: "Yes, but with certain restrictions that don’t interfere with verifications completed",
            },
          ]}
        />
        <Question
          question="How do I stay up-to-date with my listings?"
          answer={[
            {
              main: "Through your listor’s account dashboard, insights into the number of page views, the number of emails, and the number of times your listing was added to a favorite list.",
            },
          ]}
        />
      </div>
    </div>
  );
}
