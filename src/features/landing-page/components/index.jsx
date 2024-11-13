import Header from "../../../components/Header.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";
import Hero from "./hero.jsx";
import prompt from "../../../assets/prompt_page.png";
import collections from "../../../assets/collections_page.png";

export default function LandingPage() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <Hero />

      {/* About Us */}
      <About />

      {/* Features */}
      <section className="md:p-10 px-4 my-3 md:my-0">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Features</h1>
        <div className="grid md:grid-cols-2 gap-2 mt-3 md:mt-6">
          <img src={prompt} alt="" className="border-2 rounded-lg" />
          <img src={collections} alt="" className="border-2 rounded-lg" />
        </div>
      </section>

      {/* Contact Us */}
      <Contact />

      {/* footer */}
      <Footer />
    </main>
  )
}