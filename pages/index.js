import About from "@/Components/About";
import AreasAndChallenges from "@/Components/AreasAndChallenges";
import ContactUs from "@/Components/ContactUs";
import Footer from "@/Components/Footer";
import FrequentlyAskedQuestions from "@/Components/FrequentlyAskedQuestions";
import HackathonTopics from "@/Components/HackathonTopics";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import PrizesAndBenefits from "@/Components/PrizesAndBenefits";
import ProjectObjectives from "@/Components/ProjectObjectives";
import RegisterYourInterest from "@/Components/RegisterYourInterest";
import Sponsors from "@/Components/Sponsors";
import TargetGroup from "@/Components/TargetGroup";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <About />
      <ProjectObjectives />
      <TargetGroup />
      <HackathonTopics />
      <PrizesAndBenefits />
      <Sponsors />
      <RegisterYourInterest />
      <FrequentlyAskedQuestions />
      <ContactUs />
    </div>
  );
};

Home.layout = "Home";

export default Home;
