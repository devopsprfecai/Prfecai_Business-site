import SeoBlog from "@components/seo/SeoBlog";
import SeoFAQ from "@components/seo/SeoFAQ";
import SeoHeroSection from "@components/seo/SeoHeroSection";
import SeoLastSection from "@components/seo/SeoLastSection";
import SeoResult from "@components/seo/SeoResult";
import SeoStrategy from "@components/seo/SeoStrategy";
import SeoWorkSection from "@components/seo/SeoWorkSection";
import React from "react";

function Page() {
  return (
    <>
      <SeoHeroSection />
      <SeoWorkSection />
      <SeoStrategy />
      <SeoResult />
      <SeoFAQ />
      <SeoBlog />
      <SeoLastSection />
      
    </>
  );
}

export default Page;
