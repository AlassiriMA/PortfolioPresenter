import React, { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch("https://formspree.io/f/mldjydvd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        toast({
          title: "Message sent",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        form.reset();
        setFormSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
        
        <div className="grid-container">
          <div className="md:col-span-5 lg:col-span-4">
            {formSubmitted ? (
              <div className="border border-border bg-white p-8 h-full flex flex-col items-center justify-center">
                <Mail className="h-16 w-16 text-primary mb-6" />
                <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                <p className="text-center text-muted-foreground">
                  Your message has been sent successfully. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 accent-bg px-6 py-2 text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="border border-border bg-white p-8"
                action="https://formspree.io/f/mldjydvd"
                method="POST"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-4 py-2 border border-border bg-secondary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors" 
                      placeholder="Your name" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-2 border border-border bg-secondary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors" 
                      placeholder="Your email" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-border bg-secondary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors" 
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full accent-bg px-6 py-3 text-sm font-medium disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="md:col-span-7 lg:col-span-8 mt-8 md:mt-0">
            <div className="h-full border border-border bg-white p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a href="mailto:me@alassiri.nl" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        me@alassiri.nl
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Banruwe, 6218VP Maastricht, The Netherlands
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <a href="tel:+31610979730" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        +31 6 1097 9730
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Connect With Me</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/AlassiriMA" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 border border-border hover:border-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/alassirima/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 border border-border hover:border-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8 lg:mt-0">
                    <p className="text-sm text-muted-foreground">
                      "I craft clean, scalable, and user-focused applications powered by modern web technologies. Looking forward to working with you on your next project."
                    </p>
                    <p className="text-sm font-medium mt-2">— Mohammad A. Alassiri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
