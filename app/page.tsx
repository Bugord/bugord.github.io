import Games from "@/app/сomponents/Games";
import Header from "@/app/сomponents/Header";
import About from "./сomponents/About";
import Contacts from "./сomponents/Contacts";

export default async function Home() {
  return (
    <>
      <Header />
      <About />
      <Games />
      <Contacts />
    </>
  );
}