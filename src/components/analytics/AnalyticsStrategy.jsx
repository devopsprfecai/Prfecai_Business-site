import React from "react";
import Image from "next/image";
import videoseo from "@public/assets/Images/seo/videoseo.svg";
import predictive from "@public/assets/Images/seo/predictive.svg"
import descriptive from "@public/assets/Images/seo/descriptive.svg"
import diagnostic from "@public/assets/Images/seo/diagnostic.svg"
import timeseries from "@public/assets/Images/seo/timeseries.svg"
import datamining from "@public/assets/Images/seo/datamining.svg"
import sentiment from "@public/assets/Images/seo/sentiment.svg"

function AnalyticsStrategy() {
  return (
    <div className="flex justify-center item-center py-[90px] xl:py-[110px]">
      <div className="flex flex-col gap-[2.5rem] xl:w-[70%] lg:w-[85%] md:w-[85%] w-[90%]">
        <div className="flex flex-col gap-[1`rem]">
          <h1 className="text-black  md:text-center font-semibold font-firansans lg:text-[50px] lg:text-center text-center sm:w-[80%] lg:w-[100%] md:w-[100%] md:text-[40px] text-[32px]">
            Attract Organic Traffic with Integrated Analytics and Reporting
          </h1>
          <p className="text-center text-[18px] leading-[170%] md:text-[18px] sm:w-[78%] md:w-[78%] lg:text-[20px] lg:text-center lg:w-[82%]">
            The seamless analytics and reporting strategy helps you monitor key
            metrics, gain actionable insights, and optimize your online presence
            for sustained growth.
          </p>
        </div>
       

        <div className="lg:flex lg:flex-row flex justify-center lg:flex-wrap gap-[1.5rem] md:flex md:flex-row md:flex-wrap md:gap-[2rem] lg:gap-[1.5rem] xl:gap-[2.5rem] sm:flex sm:flex-col flex flex-col ">
          <div className="rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={descriptive} />
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Descriptive
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Summaries quantitative data by presenting statistics.For
                example, it can show sales distribution across a group of
                employees. 
              </p>
            </div>
          </div>
          <div className="rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={diagnostic} />
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Diagnostic 
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Determines why something happened by detecting correlations
                between variables.For example, it can help determine why a
                clothing store saw a decrease in revenue for t-shirt sales. 
              </p>
            </div>
          </div>
          <div className="rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={timeseries} />
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Time series
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Studies historical data to identify patterns and forecast future
                outcomes.For example, it can be used to predict seasonal sales,
                such as holiday sales in retail. 
              </p>
            </div>
          </div>
          <div className="rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={predictive} />
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Predictive
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Uses data to make predictions about the future.For example,
                retailers can use predictive models to forecast inventory
                requirements, manage shipping schedules, and configure store
                layouts. 
              </p>
            </div>
          </div>
          <div className="rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={sentiment} />
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Sentiment
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Uses social media analytics to measure brand sentiment and
                detect opportunities to improve customer satisfaction. 
              </p>
            </div>
          </div>
          <div className="rounded-[32px] border-[#9B9898] flex flex-col gap-[0.3rem] md:w-[320px] md:h-[320px] sm:w-[320px] w-[100%] h-[340px] sm:w-[320px] sm:h-[320px] lg:w-[320px] lg:h-[320px] p-6 border">
            <Image className="w-[40px]" alt="" src={datamining} />
            <h1 className="lg:text-[24px] md:text-[28px] sm:text-[24px] text-[24px] pt-[16px] text-black font-semibold">
              Data mining
            </h1>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-[17px]">
                Uses algorithms and statistical methods to extract patterns and
                knowledge from large datasets.This can help organizations
                discover hidden patterns and relationships in data. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsStrategy;
