/* eslint-disable react/no-unescaped-entities */
import Text from "./Text";
import Title from "./Title";

const Hero = () => {
  return (
    <>
      <div className="md:mt-32 mt-20 text-center">
        {/* For SEO only */}
        <h1 aria-hidden="true" className="hidden">
          Sen Reaksa | Portfolio
        </h1>
        <Title>About me as professional</Title>
        <h2 className="font-bold text-4xl md:text-5 lg:text-6xl xl:text-7xl mb-10 md:-mt-8 -mt-3">
          Web Developer
          <br />
          <p className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
            And Creative.
          </p>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Text>Hello there, It's me </Text>
          <Text fontBold>Reaksa </Text>
          <Text>
            🐼 Web Developer with a year experience working on web development
            design project. Adept at creative and functional design, web page
            layout, manage components, knowledge in user interface and
            proficient in assortment of technologies, Include
          </Text>
          <Text fontBold> Next JS,</Text>
          {/* <Text fontBold> Nuxt JS,</Text> */}
          <Text fontBold> Typescript,</Text>
          <Text fontBold> Tialwind CSS,</Text>
          <Text fontBold> Strapi CMS </Text>
          <Text>and recently just 🔎 exploring also enjoying </Text>
          <Text fontBold>Java Spring Boot</Text>
          {/* <button className="bg-black text-white dark:bg-white dark:text-black cursor-pointer rounded-xl px-2 inline-flex justify-center items-center group font-semibold ml-2">
            <small className="uppercase ">My Journey</small>
            <IconArrowRight
              width={18}
              stroke={2}
              className="group-hover:translate-x-0.5 duration-300"
            />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
