'use client'
import Image from "next/image";
import LandingHero from "@components/landing-page/LandingHero";
import LandingLogo from "@components/landing-page/LandingLogo";
import LandingStat from "@components/landing-page/LandingStat";
import {LandingInbound} from "@components/landing-page/LandingInbound";
import { LandingAudience } from "@components/landing-page/LandingAudience";
import LandingBrand from "@components/landing-page/LandingBrand";
import LandingReview from "@components/landing-page/LandingReview";
import LandingMarketing from "@components/landing-page/LandingMarketing";
export default function Home() {
  return (
    <div>
      <LandingHero/>
      <LandingLogo/>
      <LandingStat/>
      <LandingInbound/>
      <LandingAudience/>
      <LandingBrand/>
      <LandingReview/>
      <LandingMarketing/>
    </div>
  );
}
