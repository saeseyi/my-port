import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
//components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">UI/UX Designer</span>
            <h1 className="h1 mb-1">Hello I&apos;m <br /> <span className="text-accent">Oluwaseyi Joseph</span></h1>
            <p className="max-w-[500px] mb-9 text-white/88">
            Experienced UI/UX designer with over 3 years of expertise in creating engaging digital experiences. 
            Proficient in UI design tools and methodologies, adept at conducting user research and translating 
            insights into intuitive interfaces. Passionate about delivering seamless user experiences and driving 
            product success through creativity and innovation.
            </p>
            {/* buttons and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials  
                containerStyles= "flex gap-6"
                iconStyles= "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>  
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo /> 
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home
