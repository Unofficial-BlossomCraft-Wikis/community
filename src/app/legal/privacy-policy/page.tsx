import Link from "next/link";
import { Separator } from "~/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function HomePage() {
  return (
    <main className="mx-2 mb-2 h-full w-full overflow-y-scroll rounded-lg bg-background p-2">
      <div className="prose">
        <h1>Privacy Policy</h1>
        <b>Last updated September 09, 2024</b>
        <p>
          This Privacy Notice for BlossomCraft Unofficial Wiki (doing business
          as BCUW) (&quot;<b>we</b>&quot;, &quot;
          <b>us</b>&quot;, or &quot;
          <b>our</b>&quot;), describes how and why we might access, collect,
          store, use, and/or share (&quot;
          <b>process</b>&quot;) your personal information when you use our
          services (&quot;
          <b>Services</b>&quot;), including when you:
        </p>
        <ul>
          <li>
            Visit our website at{" "}
            <Link href="https://www.bcuw.xyz">https://www.bcuw.xyz</Link>, or
            any website of ours that links to this Privacy Notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <p>
          <b>Questions or concerns?</b> Reading this Privacy Notice will help
          you understand your privacy rights and choices. We are responsible for
          making decisions about how your personal information is processed. If
          you do not agree with our policies and practices, please do not use
          our Services. If you still have any questions or concerns, please
          contact us at bcuwdotxyz@pm.me.
        </p>
        <Separator />
        <h2>SUMMARY OF KEY POINTS</h2>
        <b>
          This summary provides key points from our Privacy Notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our{" "}
          <Link href="#toc">table of contents</Link> below to find the section
          you are looking for.
        </b>
        <p>
          <b>What personal information do we process?</b> When you visit, use,
          or navigate our Services, we may process personal information
          depending on how you interact with us and the Services, the choices
          you make, and the products and features you use. Learn more about{" "}
          <Link href="#personalinfo">
            personal information you disclose to us
          </Link>
          .
        </p>
        <p>
          <b>Do we process any sensitive personal information?</b> Some of the
          information may be considered &quot;special&quot; or
          &quot;sensitive&quot; in certain jurisdictions, for example your
          racial or ethnic origins, sexual orientation, and religious beliefs.
          We do not process sensitive personal information.
        </p>
        <p>
          <b>Do we collect any information from third parties?</b> We do not
          collect any information from third parties.
        </p>
        <p>
          <b>How do we process your information?</b> We process your information
          to provide, improve, and administer our Services, communicate with
          you, for security and fraud prevention, and to comply with law. We may
          also process your information for other purposes with your consent. We
          process your information only when we have a valid legal reason to do
          so. Learn more about{" "}
          <Link href="#infouse">how we process your information</Link>.
        </p>
        <p>
          <b>
            In what situations and with which parties do we share personal
            information?
          </b>{" "}
          We may share information in specific situations and with specific
          third parties. Learn more about{" "}
          <Link href="#whoshare">
            when and with whom we share your personal information
          </Link>
          .
        </p>
        <p>
          <b>How do we keep your information safe?</b> We have adequate
          organizational and technical processes and procedures in place to
          protect your personal information. However, no electronic transmission
          over the internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Learn more about{" "}
          <Link href="infosafe">how we keep your information safe</Link>.
        </p>
        <p>
          <b>What are your rights?</b> Depending on where you are located
          geographically, the applicable privacy law may mean you have certain
          rights regarding your personal information. Learn more about{" "}
          <Link href="privacyrights">your privacy rights</Link>.
        </p>
        <p>
          <b>How do you exercise your rights?</b> The easiest way to exercise
          your rights is by visiting{" "}
          <Link href="https://www.bcuw.xyz/data-request">
            https://www.bcuw.xyz/data-request
          </Link>
          , or by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </p>
        <p>
          Want to learn more about what we do with any information we collect?{" "}
          <Link href="toc">Review the Privacy Notice in full</Link>.
        </p>
        <Separator />
        <h2 id="toc">Table of Contents</h2>
        <ol>
          <li>
            <Link href="#infocollect">WHAT INFORMATION DO WE COLLECT?</Link>
          </li>
          <li>
            <Link href="#indouse">HOW DO WE PROCESS YOUR INFORMATION?</Link>
          </li>
          <li>
            <Link href="#legalbasis">
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </Link>
          </li>
          <li>
            <Link href="#whoshare">
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </Link>
          </li>
          <li>
            <Link href="#cookies">
              DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </Link>
          </li>
          <li>
            <Link href="sociallogins">
              HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </Link>
          </li>
          <li>
            <Link href="#intltransfers">
              IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </Link>
          </li>
          <li>
            <Link href="#inforetain">
              HOW LONG DO WE KEEP YOUR INFORMATION?
            </Link>
          </li>
          <li>
            <Link href="#infosafe">HOW DO WE KEEP YOUR INFORMATION SAFE?</Link>
          </li>
          <li>
            <Link href="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</Link>
          </li>
          <li>
            <Link href="#DNT">CONTROLS FOR DO-NOT-TRACK FEATURES</Link>
          </li>
          <li>
            <Link href="uslaws">
              DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </Link>
          </li>
          <li>
            <Link href="otherlaws">
              DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
            </Link>
          </li>
          <li>
            <Link href="policyupdates">DO WE MAKE UPDATES TO THIS NOTICE?</Link>
          </li>
          <li>
            <Link href="contact">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </Link>
          </li>
          <li>
            <Link href="request">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </Link>
          </li>
        </ol>
        <Separator />
        <h2 id="infocollect">WHAT INFORMATION DO WE COLLECT?</h2>
        <h3>Personal information you disclose to us</h3>
        <p>
          <b>In Short:</b> We collect personal information that you provide to
          us.
        </p>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>
        <p>
          <b>Personal Information Provided by You.</b> The personal information
          that we collect depends on the context of your interactions with us
          and the Services, the choices you make, and the products and features
          you use. The personal information we collect may include the
          following:
        </p>
        <ul>
          <li>usernames</li>
          <li>email addresses</li>
          <li>contact or authentication data</li>
        </ul>
        <p>
          <b>Sensitive Information.</b> We do not process sensitive information.
        </p>
        <p>
          <b>Social Media Login Data.</b> We may provide you with the option to
          register with us using your existing social media account details,
          like your Facebook, X, or other social media account. If you choose to
          register in this way, we will collect certain profile information
          about you from the social media provider, as described in the section
          called &quot;
          <Link href="#sociallogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Link>
          &quot; below.
        </p>
        <p>
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>
        <h3>Information automatically collected</h3>
        <p>
          <b>In Short:</b> Some information — such as your Internet Protocol
          (IP) address and/or browser and device characteristics — is collected
          automatically when you visit our Services.
        </p>
        <p>
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
        </p>
        <p>
          Like many businesses, we also collect information through cookies and
          similar technologies. You can find out more about this in our Cookie
          Notice:{" "}
          <Link href="http://www.bcuw.xyz/cookies">
            http://www.bcuw.xyz/cookies
          </Link>
          .
        </p>
        <p>The information we collect includes:</p>
        <ul>
          <li>
            Log and Usage Data. Log and usage data is service-related,
            diagnostic, usage, and performance information our servers
            automatically collect when you access or use our Services and which
            we record in log files. Depending on how you interact with us, this
            log data may include your IP address, device information, browser
            type, and settings and information about your activity in the
            Services (such as the date/time stamps associated with your usage,
            pages and files viewed, searches, and other actions you take such as
            which features you use), device event information (such as system
            activity, error reports (sometimes called &quot;crash dumps&quot;),
            and hardware settings).
          </li>
        </ul>
        <Separator />
        <h2 id="indouse">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p>
          <b>In Short:</b> We process your information to provide, improve, and
          administer our Services, communicate with you, for security and fraud
          prevention, and to comply with law. We may also process your
          information for other purposes with your consent.
        </p>
        <b>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </b>
        <ul>
          <li>
            <b>
              To facilitate account creation and authentication and otherwise
              manage user accounts.
            </b>{" "}
            We may process your information so you can create and log in to your
            account, as well as keep your account in working order.
          </li>
          <li>
            <b>To enable user-to-user communications.</b> We may process your
            information if you choose to use any of our offerings that allow for
            communication with another user.
          </li>
          <li>
            <b>To save or protect an individual&apos;s vital interest.</b> We
            may process your information when necessary to save or protect an
            individual&apos;s vital interest, such as to prevent harm.
          </li>
        </ul>
        <Separator />
        <h2 id="legalbasis">
          WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
        </h2>
        <p>
          <b>In Short:</b> We only process your personal information when we
          believe it is necessary and we have a valid legal reason (i.e., legal
          basis) to do so under applicable law, like with your consent, to
          comply with laws, to provide you with services to enter into or
          fulfill our contractual obligations, to protect your rights, or to
          fulfill our legitimate business interests.
        </p>
        <b>If you are located in the EU or UK, this section applies to you.</b>
        <p>
          The General Data Protection Regulation (GDPR) and UK GDPR require us
          to explain the valid legal bases we rely on in order to process your
          personal information. As such, we may rely on the following legal
          bases to process your personal information:
        </p>
        <ul>
          <li>
            <b>Consent.</b> We may process your information if you have given us
            permission (i.e., consent) to use your personal information for a
            specific purpose. You can withdraw your consent at any time. Learn
            more about{" "}
            <Link href="withdrawconsent">withdrawing your consent</Link>.
          </li>
          <li>
            <b>Performance of a Contract.</b> We may process your personal
            information when we believe it is necessary to fulfill our
            contractual obligations to you, including providing our Services or
            at your request prior to entering into a contract with you.
          </li>
          <li>
            <b>Legal Obligations.</b> We may process your information where we
            believe it is necessary for compliance with our legal obligations,
            such as to cooperate with a law enforcement body or regulatory
            agency, exercise or defend our legal rights, or disclose your
            information as evidence in litigation in which we are involved.
          </li>
          <li>
            <b>Vital Interests.</b> We may process your information where we
            believe it is necessary to protect your vital interests or the vital
            interests of a third party, such as situations involving potential
            threats to the safety of any person.
          </li>
        </ul>
        <b>If you are located in Canada, this section applies to you.</b>
        <p>
          We may process your information if you have given us specific
          permission (i.e., express consent) to use your personal information
          for a specific purpose, or in situations where your permission can be
          inferred (i.e., implied consent). You can{" "}
          <Link href="withdrawconsent">withdraw your consent</Link> at any time.
        </p>
        <p>
          In some exceptional cases, we may be legally permitted under
          applicable law to process your information without your consent,
          including, for example:
        </p>
        <ul>
          <li>
            If collection is clearly in the interests of an individual and
            consent cannot be obtained in a timely way
          </li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>
            If it is contained in a witness statement and the collection is
            necessary to assess, process, or settle an insurance claim
          </li>
          <li>
            For identifying injured, ill, or deceased persons and communicating
            with next of kin
          </li>
          <li>
            If we have reasonable grounds to believe an individual has been, is,
            or may be victim of financial abuse
          </li>
          <li>
            If it is reasonable to expect collection and use with consent would
            compromise the availability or the accuracy of the information and
            the collection is reasonable for purposes related to investigating a
            breach of an agreement or a contravention of the laws of Canada or a
            province
          </li>
          <li>
            If disclosure is required to comply with a subpoena, warrant, court
            order, or rules of the court relating to the production of records
          </li>
          <li>
            If it was produced by an individual in the course of their
            employment, business, or profession and the collection is consistent
            with the purposes for which the information was produced
          </li>
          <li>
            If the collection is solely for journalistic, artistic, or literary
            purposes
          </li>
          <li>
            If the information is publicly available and is specified by the
            regulations
          </li>
        </ul>
        <Separator />
        <h2 id="whoshare">
          4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </h2>
        <p>
          <b>In Short:</b> We may share information in specific situations
          described in this section and/or with the following third parties.
        </p>
        <p>
          <b>Vendors, Consultants, and Other Third-Party Service Providers.</b>{" "}
          We may share your data with third-party vendors, service providers,
          contractors, or agents (&quot;<b>third parties</b>&quot;) who perform
          services for us or on our behalf and require access to such
          information to do that work. We have contracts in place with our third
          parties, which are designed to help safeguard your personal
          information. This means that they cannot do anything with your
          personal information unless we have instructed them to do it. They
          will also not share your personal information with any organization
          apart from us. They also commit to protect the data they hold on our
          behalf and to retain it for the period we instruct.
        </p>
        <p>
          The third parties we may share personal information with are as
          follows:
        </p>
        <dl>
          <dt>Allow Users to Connect to Their Third-Party Accounts</dt>
          <dd>Discord account</dd>
          <dt>Content Optimization</dt>
          <dd>YouTube video embed</dd>
          <dt>Functionality and Infrastructure Optimization</dt>
          <dd>Netlify and Supabase</dd>
          <dt>User Account Registration and Authentication</dt>
          <dd>Clerk and Discord OAuth</dd>
          <dt>Web and Mobile Analytics</dt>
          <dd>Cloudflare Web Analytics</dd>
          <dt>Website Hosting</dt>
          <dd>Netlify</dd>
          <dt>Website Performance Monitoring</dt>
          <dd>Sentry</dd>
        </dl>
        <p>
          We also may need to share your personal information in the following
          situations:
        </p>
        <ul>
          <li>
            <b>Business Transfers.</b> We may share or transfer your information
            in connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
        </ul>
        <Separator />
        <h2 id="cookies">
          5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </h2>
        <p>
          <b>In Short:</b> We may use cookies and other tracking technologies to
          collect and store your information.
        </p>
        <p>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to gather information when you interact with our Services.
          Some online tracking technologies help us maintain the security of our
          Services and your account, prevent crashes, fix bugs, save your
          preferences, and assist with basic site functions.
        </p>
        <p>
          We also permit third parties and service providers to use online
          tracking technologies on our Services for analytics and advertising,
          including to help manage and display advertisements, to tailor
          advertisements to your interests, or to send abandoned shopping cart
          reminders (depending on your communication preferences). The third
          parties and service providers use their technology to provide
          advertising about products and services tailored to your interests
          which may appear either on our Services or on other websites.
        </p>
        <p>
          To the extent these online tracking technologies are deemed to be a
          &quot;sale&quot;/&quot;sharing&quot; (which includes targeted
          advertising, as defined under the applicable laws) under applicable US
          state laws, you can opt out of these online tracking technologies by
          submitting a request as described below under section &quot;
          <Link href="#uslaws">
            DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </Link>
          &quot;
        </p>
        <p>
          Specific information about how we use such technologies and how you
          can refuse certain cookies is set out in our Cookie Notice:{" "}
          <Link href="https://www.bcuw.xyz/cookies">
            https://www.bcuw.xyz/cookies
          </Link>
          .
        </p>
        <Separator />
        <h2 id="sociallogins">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p>
          <b>In Short:</b> If you choose to register or log in to our Services
          using a social media account, we may have access to certain
          information about you.
        </p>
        <p>
          Our Services offer you the ability to register and log in using your
          third-party social media account details (like your Facebook or X
          logins). Where you choose to do this, we will receive certain profile
          information about you from your social media provider. The profile
          information we receive may vary depending on the social media provider
          concerned, but will often include your name, email address, friends
          list, and profile picture, as well as other information you choose to
          make public on such a social media platform.
        </p>
        <p>
          We will use the information we receive only for the purposes that are
          described in this Privacy Notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use, and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </p>
        <Separator />
        <h2 id="intltransfers">
          7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
        </h2>
        <p>
          <b>In Short:</b> We may transfer, store, and process your information
          in countries other than your own.
        </p>
        <p>
          Our servers are located in the United States. If you are accessing our
          Services from outside the United States, please be aware that your
          information may be transferred to, stored by, and processed by us in
          our facilities and in the facilities of the third parties with whom we
          may share your personal information (see &quot;
          <Link href="#whoshare">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </Link>
          &quot; above), in the United States, and other countries.
        </p>
        <p>
          If you are a resident in the European Economic Area (EEA), United
          Kingdom (UK), or Switzerland, then these countries may not necessarily
          have data protection laws or other similar laws as comprehensive as
          those in your country. However, we will take all necessary measures to
          protect your personal information in accordance with this Privacy
          Notice and applicable law.
        </p>
        <p>European Commission&apos;s Standard Contractual Clauses:</p>
        <p>
          We have implemented measures to protect your personal information,
          including by using the European Commission&apos;s Standard Contractual
          Clauses for transfers of personal information between our group
          companies and between us and our third-party providers. These clauses
          require all recipients to protect all personal information that they
          process originating from the EEA or UK in accordance with European
          data protection laws and regulations. Our Standard Contractual Clauses
          can be provided upon request. We have implemented similar appropriate
          safeguards with our third-party service providers and partners and
          further details can be provided upon request.
        </p>
        <Separator />
        <h2 id="inforetain">8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>
          <b>In Short:</b> We keep your information for as long as necessary to
          fulfill the purposes outlined in this Privacy Notice unless otherwise
          required by law.
        </p>
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </p>
        <p>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
        <Separator />
        <h2 id="infosafe">9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p>
          <b>In Short:</b> We aim to protect your personal information through a
          system of organizational and technical security measures.
        </p>
        <p>
          We have implemented appropriate and reasonable technical and
          organizational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </p>
        <Separator />
        <h2 id="privacyrights">10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>
          <b>In Short:</b> Depending on your state of residence in the US or in
          some regions, such as the European Economic Area (EEA), United Kingdom
          (UK), Switzerland, and Canada, you have rights that allow you greater
          access to and control over your personal information. You may review,
          change, or terminate your account at any time, depending on your
          country, province, or state of residence.
        </p>
        <p>
          In some regions (like the EEA, UK, Switzerland, and Canada), you have
          certain rights under applicable data protection laws. These may
          include the right (i) to request access and obtain a copy of your
          personal information, (ii) to request rectification or erasure; (iii)
          to restrict the processing of your personal information; (iv) if
          applicable, to data portability; and (v) not to be subject to
          automated decision-making. In certain circumstances, you may also have
          the right to object to the processing of your personal information.
          You can make such a request by contacting us by using the contact
          details provided in the section &quot;
          <Link href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>
          &quot; below.
        </p>
        <p>
          We will consider and act upon any request in accordance with
          applicable data protection laws.
        </p>
        <p>
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your{" "}
          <Link href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
            Member State data protection authority
          </Link>{" "}
          or{" "}
          <Link href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
            UK data protection authority.
          </Link>
        </p>
        <p>
          If you are located in Switzerland, you may contact the{" "}
          <Link href="https://www.edoeb.admin.ch/edoeb/en/home.html">
            Federal Data Protection and Information Commissioner
          </Link>
          .
        </p>
        <p>
          <b id="#withdrawconsent">Withdrawing your consent:</b> If we are
          relying on your consent to process your personal information, which
          may be express and/or implied consent depending on the applicable law,
          you have the right to withdraw your consent at any time. You can
          withdraw your consent at any time by contacting us by using the
          contact details provided in the section &quot;
          <Link href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>
          &quot; below.
        </p>
        <p>
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </p>
        <h3>Account Information</h3>
        <p>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
        </p>
        <ul>
          <li>Log in to your account settings and update your user account.</li>
        </ul>
        <p>
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          legal terms and/or comply with applicable legal requirements.
        </p>
        <p>
          <b>Cookies and similar technologies:</b> Most Web browsers are set to
          accept cookies by default. If you prefer, you can usually choose to
          set your browser to remove cookies and to reject cookies. If you
          choose to remove cookies or reject cookies, this could affect certain
          features or services of our Services. For further information, please
          see our Cookie Notice:{" "}
          <Link href="https://www.bcuw.xyz/cookies">
            https://www.bcuw.xyz/cookies
          </Link>
          .
        </p>
        <p>
          If you have questions or comments about your privacy rights, you may
          email us at bcuwdotxyz@pm.me.
        </p>
        <Separator />
        <h2 id="DNT">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (&quot;DNT&quot;) feature or
          setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected. At
          this stage, no uniform technology standard for recognizing and
          implementing DNT signals has been finalized. As such, we do not
          currently respond to DNT browser signals or any other mechanism that
          automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the
          future, we will inform you about that practice in a revised version of
          this Privacy Notice.
        </p>
        <p>
          California law requires us to let you know how we respond to web
          browser DNT signals. Because there currently is not an industry or
          legal standard for recognizing or honoring DNT signals, we do not
          respond to them at this time.
        </p>
        <Separator />
        <h2 id="uslaws">
          12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </h2>
        <p>
          <b>In Short:</b> If you are a resident of California, Colorado,
          Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Montana, New
          Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia,
          you may have the right to request access to and receive details about
          the personal information we maintain about you and how we have
          processed it, correct inaccuracies, get a copy of, or delete your
          personal information. You may also have the right to withdraw your
          consent to our processing of your personal information. These rights
          may be limited in some circumstances by applicable law. More
          information is provided below.
        </p>
        <h3>Categories of Personal Information We Collect</h3>
        <p>
          We have collected the following categories of personal information in
          the past twelve (12) months:
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Examples</TableHead>
              <TableHead>Collected</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>A. Identifiers</TableCell>
              <TableCell>
                Contact details, such as real name, alias, postal address,
                telephone or mobile contact number, unique personal identifier,
                online identifier, Internet Protocol address, email address, and
                account name
              </TableCell>
              <TableCell>YES</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                B. Personal information as defined in the California Customer
                Records statute
              </TableCell>
              <TableCell>
                Name, contact information, education, employment, employment
                history, and financial information
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                C. Protected classification characteristics under state or
                federal law
              </TableCell>
              <TableCell>
                Gender, age, date of birth, race and ethnicity, national origin,
                marital status, and other demographic data
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>D. Commercial information</TableCell>
              <TableCell>
                Transaction information, purchase history, financial details,
                and payment information
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>E. Biometric information</TableCell>
              <TableCell>Fingerprints and voiceprints</TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                F. Internet or other similar network activity
              </TableCell>
              <TableCell>
                Browsing history, search history, online behavior, interest
                data, and interactions with our and other websites,
                applications, systems, and advertisements
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>G. Geolocation data</TableCell>
              <TableCell>Device location</TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                H. Audio, electronic, sensory, or similar information
              </TableCell>
              <TableCell>
                Images and audio, video or call recordings created in connection
                with our business activities
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                I. Professional or employment-related information
              </TableCell>
              <TableCell>
                Business contact details in order to provide you our Services at
                a business level or job title, work history, and professional
                qualifications if you apply for a job with us
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>J. Education Information</TableCell>
              <TableCell>
                Educational background, coursework, and achievements
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                K. Inferences drawn from collected personal information
              </TableCell>
              <TableCell>
                Inferences drawn from any of the collected personal information
                listed above to create a profile or summary about, for example,
                an individual&apos;s preferences and characteristics
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>L. Sensitive personal Information</TableCell>
              <TableCell></TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p>
          We may also collect other personal information outside of these
          categories through instances where you interact with us in person,
          online, or by phone or mail in the context of:
        </p>
        <ul>
          <li>Receiving help through our customer support channels;</li>
          <li>Participation in customer surveys or contests; and</li>
          <li>
            Facilitation in the delivery of our Services and to respond to your
            inquiries.
          </li>
        </ul>
        <p>
          We will use and retain the collected personal information as needed to
          provide the Services or for:
        </p>
        <ul>
          <li>Category A - As long as the user has an account with us</li>
          <li>Category H - Immediate burn</li>
        </ul>
        <h3>Sources of Personal Information</h3>
        <p>
          Learn more about the sources of personal information we collect in
          &quot;<Link href="#infocollect">WHAT INFORMATION DO WE COLLECT?</Link>
          &quot;
        </p>
        <h3>How We Use and Share Personal Information</h3>
        <p>
          Learn about how we use your personal information in the section,
          &quot;<Link href="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</Link>
          &quot;
        </p>
        <b>Will your information be shared with anyone else?</b>
        <p>
          We may disclose your personal information with our service providers
          pursuant to a written contract between us and each service provider.
          Learn more about how we disclose personal information to in the
          section, &quot;
          <Link href="whoshare">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </Link>
          &quot;
        </p>
        <p>
          We may use your personal information for our own business purposes,
          such as for undertaking internal research for technological
          development and demonstration. This is not considered to be
          &quot;selling&quot; of your personal information.
        </p>
        <p>
          We have not sold or shared any personal information to third parties
          for a business or commercial purpose in the preceding twelve (12)
          months. We have disclosed the following categories of personal
          information to third parties for a business or commercial purpose in
          the preceding twelve (12) months:
        </p>
        <p>
          The categories of third parties to whom we disclosed personal
          information for a business or commercial purpose can be found under
          &quot;
          <Link href="#whoshare">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </Link>
          &quot;
        </p>
        <h3>Your Rights</h3>
        <p>
          You have rights under certain US state data protection laws. However,
          these rights are not absolute, and in certain cases, we may decline
          your request as permitted by law. These rights include:
        </p>
        <ul>
          <li>
            <b>Right to Know</b> whether or not we are processing your personal
            data{" "}
          </li>
          <li>
            <b>Right to Access</b> your personal data
          </li>
          <li>
            <b>Right to correct</b> inaccuracies in your personal data
          </li>
          <li>
            <b>Right to request</b> the deletion of your personal data
          </li>
          <li>
            <b>Right to obtain a copy</b> of the personal data you previously
            shared with us
          </li>
          <li>
            <b>Right to non-discrimination</b> for exercising your rights
          </li>
          <li>
            <b>Right to opt out</b> of the processing of your personal data if
            it is used for targeted advertising (or sharing as defined under
            California&apos;s privacy law), the sale of personal data, or
            profiling in furtherance of decisions that produce legal or
            similarly significant effects (&quot;profiling&quot;)
          </li>
        </ul>
        <p>
          Depending upon the state where you live, you may also have the
          following rights:
        </p>
        <ul>
          <li>
            Right to obtain a list of the categories of third parties to which
            we have disclosed personal data (as permitted by applicable law,
            including California&apos;s and Delaware&apos;s privacy law)
          </li>
          <li>
            Right to obtain a list of specific third parties to which we have
            disclosed personal data (as permitted by applicable law, including
            Oregon&apos;s privacy law)
          </li>
          <li>
            Right to limit use and disclosure of sensitive personal data (as
            permitted by applicable law, including California&apos;s privacy
            law)
          </li>
          <li>
            Right to opt out of the collection of sensitive data and personal
            data collected through the operation of a voice or facial
            recognition feature (as permitted by applicable law, including
            Florida&apos;s privacy law)
          </li>
        </ul>
        <h3>How to Exercise Your Rights</h3>
        <p>
          To exercise these rights, you can contact us by visiting{" "}
          <Link href="https://www.bcuw.xyz/data-request">
            https://www.bcuw.xyz/data-request
          </Link>
          , by emailing us at bcuwdotxyz@pm.me, or by referring to the contact
          details at the bottom of this document.
        </p>
        <p>
          We will honor your opt-out preferences if you enact the{" "}
          <Link href="https://globalprivacycontrol.org/">
            Global Privacy Control
          </Link>{" "}
          (GPC) opt-out signal on your browser.
        </p>
        <p>
          Under certain US state data protection laws, you can designate an
          authorized agent to make a request on your behalf. We may deny a
          request from an authorized agent that does not submit proof that they
          have been validly authorized to act on your behalf in accordance with
          applicable laws.
        </p>
        <h3>Request Verification</h3>
        <p>
          Upon receiving your request, we will need to verify your identity to
          determine you are the same person about whom we have the information
          in our system. We will only use personal information provided in your
          request to verify your identity or authority to make the request.
          However, if we cannot verify your identity from the information
          already maintained by us, we may request that you provide additional
          information for the purposes of verifying your identity and for
          security or fraud-prevention purposes.
        </p>
        <p>
          If you submit the request through an authorized agent, we may need to
          collect additional information to verify your identity before
          processing your request and the agent will need to provide a written
          and signed permission from you to submit such request on your behalf.
        </p>
        <h3>Appeals</h3>
        <p>
          Under certain US state data protection laws, if we decline to take
          action regarding your request, you may appeal our decision by emailing
          us at bcuwdotxyz@pm.me. We will inform you in writing of any action
          taken or not taken in response to the appeal, including a written
          explanation of the reasons for the decisions. If your appeal is
          denied, you may submit a complaint to your state attorney general.
        </p>
        <h3>California &quot;Shine The Light&quot; Law</h3>
        <p>
          California Civil Code Section 1798.83, also known as the &quot;Shine
          The Light&quot; law, permits our users who are California residents to
          request and obtain from us, once a year and free of charge,
          information about categories of personal information (if any) we
          disclosed to third parties for direct marketing purposes and the names
          and addresses of all third parties with which we shared personal
          information in the immediately preceding calendar year. If you are a
          California resident and would like to make such a request, please
          submit your request in writing to us by using the contact details
          provided in the section &quot;
          <Link href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>
          &quot;
        </p>
        <Separator />
        <h2 id="otherlaws">
          13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
        </h2>
        <p>
          <b>In Short:</b> You may have additional rights based on the country
          you reside in.
        </p>
        <h3>Australia and New Zealand</h3>
        <p>
          We collect and process your personal information under the obligations
          and conditions set by Australia&apos;s Privacy Act 1988 and New Zealand&apos;s
          Privacy Act 2020 (Privacy Act).
        </p>
        <p>
          This Privacy Notice satisfies the notice requirements defined in both
          Privacy Acts, in particular: what personal information we collect from
          you, from which sources, for which purposes, and other recipients of
          your personal information.
        </p>
        <p>
          If you do not wish to provide the personal information necessary to
          fulfill their applicable purpose, it may affect our ability to provide
          our services, in particular:
        </p>
        <ul>
          <li>offer you the products or services that you want</li>
          <li>respond to or help with your requests</li>
          <li>manage your account with us</li>
          <li>confirm your identity and protect your account</li>
        </ul>
        <p>
          At any time, you have the right to request access to or correction of
          your personal information. You can make such a request by contacting
          us by using the contact details provided in the section &quot;
          <Link href="#request">
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </Link>
          &quot;
        </p>
        <p>
          If you believe we are unlawfully processing your personal information,
          you have the right to submit a complaint about a breach of the
          Australian Privacy Principles to the{" "}
          <Link href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us">
            Office of the Australian Information Commissioner
          </Link>{" "}
          and a breach of New Zealand&apos;s Privacy Principles to the{" "}
          <Link href="https://www.privacy.org.nz/your-rights/making-a-complaint/">
            Office of New Zealand Privacy Commissioner
          </Link>
          .
        </p>
        <h3>Republic of South Africa</h3>
        <p>
          At any time, you have the right to request access to or correction of
          your personal information. You can make such a request by contacting
          us by using the contact details provided in the section &quot;
          <Link href="#request">
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </Link>
          &quot;
        </p>
        <p>
          If you are unsatisfied with the manner in which we address any
          complaint with regard to our processing of personal information, you
          can contact the office of the regulator, the details of which are:
        </p>
        <Link href="https://inforegulator.org.za/">
          The Information Regulator (South Africa)
        </Link>
        <p>
          General enquiries:{" "}
          <Link href="mailto:enquiries@inforegulator.org.za">
            enquiries@inforegulator.org.za
          </Link>
        </p>
        <p>
          Complaints (complete POPIA/PAIA form 5):{" "}
          <Link href="mailto:PAIAComplaints@inforegulator.org.za">
            PAIAComplaints@inforegulator.org.za
          </Link>{" "}
          &{" "}
          <Link href="mailto:POPIAComplaints@inforegulator.org.za">
            POPIAComplaints@inforegulator.org.za
          </Link>
        </p>
        <Separator />
        <h2 id="policyupdates">14. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p>
          <b>In Short:</b> Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
        </p>
        <p>
          We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated &quot;Revised&quot; date at
          the top of this Privacy Notice. If we make material changes to this
          Privacy Notice, we may notify you either by prominently posting a
          notice of such changes or by directly sending you a notification. We
          encourage you to review this Privacy Notice frequently to be informed
          of how we are protecting your information.
        </p>
        <h2>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>
          If you have questions or comments about this notice, you may email us
          at bcuwdotxyz@pm.me
        </p>
        <Separator />
        <h2 id="request">
          16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </h2>
        <p>
          You have the right to request access to the personal information we
          collect from you, details about how we have processed it, correct
          inaccuracies, or delete your personal information. You may also have
          the right to withdraw your consent to our processing of your personal
          information. These rights may be limited in some circumstances by
          applicable law. To request to review, update, or delete your personal
          information, please visit:{" "}
          <Link href="https://www.bcuw.xyz/data-request">
            https://www.bcuw.xyz/data-request
          </Link>
        </p>
      </div>
    </main>
  );
}
