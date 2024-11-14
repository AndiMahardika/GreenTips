import prompt from "../../../assets/prompt_page.png";
import collections from "../../../assets/collections_page.png";

export default function Features() {
  return (
    <section className="container mx-auto px-4 md:px-0 my-3 md:my-16" id="features">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Features</h1>
      <div className="grid md:grid-cols-2 gap-2 mt-3 md:mt-6">
        <img src={prompt} alt="" className="border-2 rounded-lg" />
        <img src={collections} alt="" className="border-2 rounded-lg" />
      </div>
    </section>
  )
}
