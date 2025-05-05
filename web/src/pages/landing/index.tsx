import DonationSection from "./sections/donation";
import Hero from "./sections/hero";
import Statistics from "./sections/statistics";

const LandingPage = () => {
  return (
    <div>
      <main className="flex-1">
        <Hero/>
        <Statistics />
        <DonationSection/>
        {/* <ProcessSteps /> */}
        {/* <AboutSection /> */}
        {/* <DonationSection /> */}
        {/* <AppDownload />  */}
      </main>
    </div>
  );
};

export default LandingPage;
