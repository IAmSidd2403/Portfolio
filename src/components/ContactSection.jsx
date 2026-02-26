import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast.js";

export const ContactSection = () => {
  const { toast } = useToast();

  // Form reference
  const formRef = useRef(null);

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ENV variables (from Vercel + .env)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if env variables exist
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: "Configuration Error ❌",
        description: "Email service is not configured properly.",
      });
      setIsSubmitting(false);
      return;
    }

    // Send Email using EmailJS
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        toast({
          title: "Message Sent Successfully ✅",
          description: "Thanks for reaching out! I'll reply soon.",
        });

        // Reset form after success
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        toast({
          title: "Failed to Send ❌",
          description: "Something went wrong. Please try again later.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">
              Let's Connect 🚀
            </h3>

            <p className="text-muted-foreground">
              Have a project idea, internship opportunity, or just want to say hi?
              Fill out the form and I’ll get back to you.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <span>siddpandey2403@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <span>+91-8800807200</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-primary" />
                <span>India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-primary transition"
              >
                <Linkedin />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-primary transition"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-card p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message ✉️
            </h3>

            {/* FORM */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
