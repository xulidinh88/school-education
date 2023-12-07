export const HomeHero = () => {
  return (
    <section className="flex w-full md:w-[90%] md:my-[80px] md:flex-row flex-col p-[18px] md:p-0">
      <div className="flex-1 relative">
        <img
          className="w-full h-full bg-orange-80"
          src="src/assets/hero/home-hero.png"
          alt=""
        />
        {/* abstract hero image */}
        <div className="w-[20px] h-[20px] bg-white absolute top-[-5px] right-[-5px] rounded-full border-[2px] border-grey-15 z-20" />
        <div className="w-[20px] h-[20px] bg-white absolute top-[-5px] left-[-5px] rounded-full border-[2px] border-grey-15 z-20" />
        <div className="w-[20px] h-[20px] bg-white absolute bottom-[-5px] right-[-5px] rounded-full border-[2px] border-grey-15 z-20" />
        <div className="w-[20px] h-[20px] bg-white absolute bottom-[-5px] left-[-5px] rounded-full border-[2px] border-grey-15 z-20" />

        <div className="w-full px-5 py-1 absolute bottom-0 left-0 z-10">
          <div className="w-full h-[2px] bg-grey-15"></div>
        </div>
        <div className="w-full px-5 py-1 absolute top-0 right-0 z-10">
          <div className="w-full h-[2px] bg-grey-15"></div>
        </div>

        <div className="h-full py-5 px-1 absolute top-0 left-0 z-10">
          <div className="h-full w-[2px] bg-grey-15"></div>
        </div>
        <div className="h-full py-5 px-1 absolute top-0 right-0 z-10">
          <div className="h-full w-[2px] bg-grey-15"></div>
        </div>

        <div className="w-[70%] h-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className="w-full h-full"
            src="src/assets/abstract/abstract-home-hero.png"
            alt=""
          />
        </div>
      </div>

      {/* info hero */}
      <div className="flex-1 flex flex-col justify-center pt-[40px] md:pl-[60px] items-center md:items-start">
        <p className="leading-[24px] md:leading-[33px] text-center md:text-left font-medium md:text-[22px] text-[16px] border-b-[2px] border-grey-15 w-fit text-grey-15">
          Welcome to Little Learners Academy
        </p>
        <h1 className="mt-[10px] text-center md:text-left text-[30px] md:text-[54px] font-extrabold leading-[39px] md:leading-[70.2px] font-raleway text-grey-15">
          Where Young Minds Blossom and{" "}
          <span className="text-orange-65">Dreams Take Flight.</span>
        </h1>
        <p className=" mt-[18px] md:mt-[30px] text-[16px] md:text-[20px] font-medium leading-[24px] text-center md:text-left md:leading-[30px] text-grey-20">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>

        <div
          className="w-full relative rounded-[12px] border-[2px] border-grey-15 flex md:flex-row flex-col justify-between items-center bg-orange-95 mt-[60px] py-[40px]"
          style={{ boxShadow: "8px 8px 0px 1px #FFBE99" }}
        >
          <div className="flex flex-col flex-1 px-2 items-center md:items-start pb-[20px] md:pb-0 border-b-[2px] border-grey-15 md:border-0">
            <p className="font-bold text-[44px] leading-[66px] text-grey-15">
              +7000
            </p>
            <p className="font-medium text-[18px] leading-[27px] text-grey-15">
              Students Passed Out
            </p>
          </div>
          <div className="flex flex-col flex-1 px-2 items-center md:items-start py-[20px] md:py-0  border-b-[2px] border-grey-15 md:border-0">
            <p className="font-bold text-[44px] leading-[66px] text-grey-15 text-center">
              +37
            </p>
            <p className="font-medium text-[18px] leading-[27px] text-grey-15">
              Awards & Recognitions
            </p>
          </div>
          <div className="flex flex-col flex-1 px-2 items-center md:items-start pt-[20px] md:pt-0">
            <p className="font-bold text-[44px] leading-[66px] text-grey-15">
              +15
            </p>
            <p className="font-medium text-[18px] leading-[27px] text-grey-15">
              Experience Educators
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
