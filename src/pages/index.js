import Head from "next/head";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import PortfolioSection from "../components/home/PortfolioSection";
import ContactSection from "../components/home/ContactSection";

export default function Index() {
  const metaInfo = {
    title: "André Araujo | Portfolio",
    description:
      "André Araujo is a software enginner student, who always seeks to improve his coding ability by always using the best practices.",
    url: "https://andrearaujo.vercel.app/",
  };

  const { title, description, url } = metaInfo;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="personal website, software engineer, portfolio"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Andre Araujo" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} key="ogurl" />
      </Head>

      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
