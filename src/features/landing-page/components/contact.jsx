import Button from "../../../components/Button.jsx";
import Input from "../../../components/Input.jsx";
import TextAreaInput from "../../../components/Textarea.jsx";

export default function Contact() { 
  return (
    <section className="bg-primary p-4 md:p-10 text-white" id="contact">
      <h1 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 md:gap-8">
        <div className="mt-3 md:mt-6">
          <p className="font-semibold text-xs md:text-base leading-loose">
            Have questions, feedback, or ideas to share? We’d love to hear from
            you! Connect with us for any inquiries about our platform,
            suggestions for improvement, or partnership opportunities. Your
            input is invaluable in helping us build a cleaner, greener future
            together.
          </p>
        </div>

        <div className="space-y-4 mt-3 md:mt-6">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            variant="neutral"
          />
          <TextAreaInput placeholder="Enter your message" rows={5} />
          <div className="mt-4 w-1/4">
            <Button variant="success" fullWidth>
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
