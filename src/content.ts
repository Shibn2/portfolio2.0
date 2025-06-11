import accenture from "./assets/images/accenture.webp";
import sapient from "./assets/images/sapient.jpg";
import agoda from "./assets/images/agoda.webp";

export const experiences = {
  agoda: {
    image: agoda,
    barChartContentList: [
      {
        label: "HTML & CSS",
        percentage: 30,
      },
      {
        label: "Content Stack",
        percentage: 10,
      },
      {
        label: "ReactJs | Javascript",
        percentage: 30,
      },
      {
        label: "ExpressJs NodeJs",
        percentage: 30,
      },
    ],
    exp: [
      `At Agoda B2B, the RTA Marketing team is responsible for delivering tailored marketing emails to partner customers, supporting services like property and flight search. A major focus was on enhancing the efficiency of the template generation process by eliminating redundant tasks and streamlining workflows—this led to a 50% reduction in generation time and significantly improved developer productivity.`,
      `Collaborating closely with backend teams, I contributed to several features using the Backend-for-Frontend (BFF) pattern, ensuring cohesive changes across both frontend and backend systems. I implemented automated email campaigns for key user scenarios such as abandoned carts, abandoned searches, booking confirmations, and promotional engagement, improving user retention and partner engagement.`,
      `To support these campaigns, I wrote complex queries to extract data from Hadoop tables and utilized internal tools like Cusco Llama and Campaign Manager (Kafka-based template engine) to create and deliver customized emails. I also worked with PME (Partner Mail Engine) and Iterable for marketing automation, and developed responsive email templates using the FreeMarker templating language.`,
      `Technologies: React.js, TypeScript, Kotlin, Scala, SQL.`,
    ],
    subTitle: "",
  },
  academy: {
    image: sapient,
    barChartContentList: [
      {
        label: "HTML & CSS",
        percentage: 40,
      },
      {
        label: "ReactJs | Javascript",
        percentage: 30,
      },
      {
        label: "ExpressJs NodeJs",
        percentage: 30,
      },
    ],
    exp: [
      `Recognitions and Contributions

Received multiple appreciations including the Best Employee Award, along with acknowledgments for conducting technical trainings, making impactful suggestions on coding best practices, and consistently leading projects to successful completion. Recognized for maintaining high standards in task quality, timely delivery, and dependable execution across initiatives.`,
      `Academy – E-commerce Platform for Sports and Outdoor Goods

Led a POD responsible for core features such as the homepage, cart, analytics, and performance enhancements for Academy, an e-commerce platform selling sports and outdoor gear. Played a key role in ARB (Architecture Review Board) discussions to shape upcoming features and contribute to scalable architectural decisions. Spearheaded the migration to a headless CMS architecture using Contentstack, transitioning from the legacy AEM-based stack. This included framework development and deep involvement in CMS tooling and integration.`,
      `Focused heavily on performance optimization, leading efforts to improve homepage speed and asset efficiency. Achieved a 35% reduction in initial load time and a 40% cut in total page weight by optimizing JavaScript bundling and asset loading, which significantly enhanced Core Web Vitals metrics. Additionally, led the end-to-end implementation of analytics and personalized recommendations, integrating Monetate Kibo and Google Tag Manager to deliver customized experiences on the frontend.
`,
    ],
    subTitle: "Publicis Sapient",
  },
  tcp: {
    image: sapient,
    barChartContentList: [
      {
        label: "HTML & CSS",
        percentage: 40,
      },
      {
        label: "ReactJs | Javascript",
        percentage: 30,
      },
      {
        label: "ExpressJs NodeJs",
        percentage: 30,
      },
    ],
    exp: [
      `The Children’s Place – E-commerce for Kids' Apparel

Contributed to the development of The Children’s Place, a leading online platform for kids’ apparel. Led several analytics improvement initiatives and played a key role in building a suite of reusable library components used across the application. Gained extensive experience with Google Analytics for user behavior tracking and reporting, contributing to better-informed business decisions and performance enhancements across the platform.`,
    ],
    subTitle: "Publicis Sapient",
  },
  mgm: {
    image: sapient,
    barChartContentList: [
      {
        label: "HTML & CSS",
        percentage: 40,
      },
      {
        label: "ReactJs | Javascript",
        percentage: 30,
      },
      {
        label: "ExpressJs NodeJs",
        percentage: 30,
      },
    ],
    exp: [
      `MGM – Hotel & Resort Booking Platform

Worked on MGM’s online booking platform, which supports a three-step reservation flow for their network of hotels and resorts. Implemented a dynamic and accessible calendar component for selecting check-in and check-out dates, ensuring seamless interaction across devices. Addressed critical accessibility improvements and developed a smooth, responsive slider component for better UX in date and pricing selections.

Technologies: React.js, Redux, Node.js, Express.js, GraphQL, Contentstack, Google Tag Manager (GTM), Kibo, Redux-Saga, Angular, MobX, AEM`,
    ],
    subTitle: "Publicis Sapient",
  },
  ceat: {
    image: accenture,
    barChartContentList: [
      {
        label: "HTML & CSS",
        percentage: 40,
      },
      {
        label: "ReactJs | Javascript",
        percentage: 30,
      },
      {
        label: "ExpressJs NodeJs",
        percentage: 30,
      },
    ],
    exp: [
      `Appreciations: Innovators award for ceat tyres project- built factory mess system, conducted trainings,  and prototype selected for internal cms application.`,
      `MES Application for CEAT Tires: Industrial application use for tire industry automation and real time monitoring.
Worked mainly on front end application 
Lead a team of three for front end work.
Implemented the application from scratch with the help of Simatic IT application
Legacy angular js components.
API integrations with other systems in the monolith system.
Implemented OData rest API integrations.`,
      `Technologies: Reactjs, Angular, Mobx, AEM.`,
    ],
    subTitle: "Accenture",
  },
};
