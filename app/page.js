
import HeroSection from "@/components/HomeComponents/HeroSection";
import WhyChooseUs from "@/components/HomeComponents/WhyChooseUs";
import OurClients from "@/components/HomeComponents/OurClients";
import Dashboard from "@/components/HomeComponents/Dashboard";
import AboutSection from "@/components/HomeComponents/AboutSection";
import HowWeDoIt from "@/components/HomeComponents/HowWeDoIt";
import Testimonial from "@/components/HomeComponents/Testimonial";
import OurPartners from "@/components/HomeComponents/OurPartners";
import ContactForm from "@/components/HomeComponents/ContactForm";
import DynamicCanonical from "@/components/DynamicCanonical";
// ✅ Dynamic metadata function


export const metadata = {

    title: "Cyberspace Works - Website, Software, App Developer | Digital Marketing | Graphics Designing | Business Research & Analysis",
    description:
      "Website, Software, App Developer | Digital Marketing | Graphics Designing | Business Research & Analysis | In Howrah, Kolkata",
    keywords:
      "Web Development Services near me, best Web Development service in Howrah, Kolkata, hire Web Developer, top Web Development company, affordable Web development, App Development Services near me, best App Development service in Howrah, Kolkata, hire App Developer, top App Development company, affordable App development, Software Development Services near me, best Software Development service in Howrah, Kolkata, hire Software Developer, top Software Development company, affordable Software development, UI/UX Designing Services near me, best UI/UX Designing service in Howrah, Kolkata, hire UI/UX Designer, top UI/UX Designing company, affordable UI/UX Designer, Graphics Designing Services near me, best Graphics Designing service in Howrah, Kolkata, hire Graphics Designer, top Graphics Designing company, affordable Graphics Desiging, Digital Marketing Services near me, best Digital Marketing service in Howrah, Kolkata, hire Digital Marketer, top Digital Marketing company, affordable Digital Marketing, Research and Analytical Services near me, best Research and Analytical service in Howrah, Kolkata, hire Research and Analytics Expert, top Research and Analytical company, affordable Research and Analytical expert, official website, Cyberspace Works, official Cyberspace Works, professional Web development, App Development, Software Development, UI/UX Designer, Graphics Designer, Digital Marketing, Research and Analytics, expert solutions, trusted Web development, App Development, Software Development, UI/UX Designer, Graphics Designer, Digital Marketing, Research and Analytics partner, The leading Web development, App Development, Software Development, UI/UX Designer, Graphics Designer, Digital Marketing, Research and Analytics experts, award-winning Web development, App Development, Software Development, UI/UX Designer, Graphics Designer, Digital Marketing, Research and Analytics, guaranteed results, quick & easy solution, client testimonials",
    openGraph: {
      type: "website",
      title: "Cyberspace Works",
      description:
        "Website, Software, App Developer | Digital Marketing | Graphics Designing | Business Research & Analysis | In Howrah, Kolkata",
    
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cyberspace Works",
      description:
        "Website, Software, App Developer | Digital Marketing | Graphics Designing | Business Research & Analysis | In Howrah, Kolkata",
      images: ["/logo.png"],
    },
    icons: {
      icon: "/favicon.ico",
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };


export default function HomePage() {
  return (
    <> 
    <DynamicCanonical />
    <main className="relative min-h-screen bg-black overflow-hidden">
      <HeroSection />
      <WhyChooseUs />
      <OurClients />
      <Dashboard />
      <AboutSection />
      <HowWeDoIt />
      <Testimonial />
      <OurPartners />
      <ContactForm />
    </main>
    </>
  );
}
