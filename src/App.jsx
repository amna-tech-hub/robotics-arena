import BotLeagueDetails from "./components/page1components/BotLeagueDetails";
import CompetitionDisciplines from "./components/page1components/CompetitionDisciplines";
import CompetitionsEvents from "./components/page1components/CompetitionsEvents";
import Hero from "./components/page1components/Hero";
import Join from "./components/page1components/Join";
import LeagueAdvantage from "./components/page1components/LeagueAdvantage";
import UserJourney from "./components/page1components/UserJourney";
import Footer from "./layout/page1layout/Footer";
import Header from "./layout/page1layout/Header";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompetitionsEvents />
      <UserJourney />
      <BotLeagueDetails/>
      <CompetitionDisciplines/>
      <LeagueAdvantage/>
      <Join/>
      <Footer/>
    </>
  );
}

export default App;
