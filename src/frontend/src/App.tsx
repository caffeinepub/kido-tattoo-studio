import {
  Layers,
  MapPin,
  Menu,
  Paintbrush,
  Palette,
  Phone,
  Shield,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const GALLERY_ITEMS = [
  {
    label: "Blackwork",
    img: "/assets/generated/gallery-blackwork.dim_400x300.jpg",
    gradient: "from-neutral-950 to-neutral-800",
  },
  {
    label: "Japanese",
    img: "/assets/generated/gallery-japanese.dim_400x300.jpg",
    gradient: "from-stone-950 to-red-950",
  },
  {
    label: "Realistic Portrait",
    img: "/assets/generated/gallery-realistic.dim_400x300.jpg",
    gradient: "from-zinc-950 to-zinc-800",
  },
  {
    label: "Dotwork",
    img: "/assets/generated/gallery-dotwork.dim_400x300.jpg",
    gradient: "from-neutral-900 to-stone-950",
  },
  {
    label: "Geometric",
    img: "/assets/generated/gallery-geometric.dim_400x300.jpg",
    gradient: "from-slate-950 to-neutral-900",
  },
  {
    label: "Tribal",
    img: "/assets/generated/gallery-tribal.dim_400x300.jpg",
    gradient: "from-stone-900 to-zinc-950",
  },
  {
    label: "Watercolor",
    img: "/assets/generated/gallery-watercolor.dim_400x300.jpg",
    gradient: "from-neutral-950 to-slate-900",
  },
  {
    label: "Neo-Traditional",
    img: "/assets/generated/gallery-neotraditional.dim_400x300.jpg",
    gradient: "from-zinc-900 to-stone-950",
  },
];

const SERVICES = [
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Custom Designs",
    desc: "Unique artwork crafted exclusively for you. We collaborate closely to bring your vision to life.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Black & Gray",
    desc: "Masterful shading and depth in monochrome. From subtle gradients to dramatic contrasts.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Color Tattoos",
    desc: "Vivid, long-lasting color work that pops. Watercolor, traditional, and neo-trad styles.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cover-Ups",
    desc: "Transform old or unwanted ink into stunning new artwork with expert cover-up techniques.",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "gallery", "services", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          className="flex flex-col leading-none"
          data-ocid="nav.link"
        >
          <span className="font-heading text-3xl md:text-4xl font-black tracking-widest text-gold">
            KIDO
          </span>
          <span className="font-heading text-xs font-semibold tracking-[0.3em] text-muted-foreground -mt-1">
            TATTOO
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className={`font-heading text-sm font-semibold tracking-widest transition-colors relative pb-1 ${
                  isActive
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-card border-b border-border px-4 py-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                onClick={() => setMobileOpen(false)}
                className="block font-heading text-lg font-semibold tracking-widest py-3 border-b border-border last:border-0 text-muted-foreground hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, oklch(0.72 0.1 75) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, oklch(0.72 0.1 75) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-20 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center min-h-screen py-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block border border-gold/40 px-3 py-1 mb-6">
              <span className="font-heading text-xs font-semibold tracking-[0.3em] text-gold">
                KANYAKUMARI DISTRICT
              </span>
            </div>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 text-foreground">
              INK YOUR
              <span className="block text-gold">STORY.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md font-body">
              South India's premier tattoo studio in Kanyakumari. Where artistry
              meets skin — custom designs, black &amp; gray mastery, and vibrant
              color work crafted for life.
            </p>
            <a
              href="https://wa.me/916380021756"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-3 bg-gold text-[#111] font-heading text-sm font-bold tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
            >
              <SiWhatsapp className="w-5 h-5" />
              BOOK ON WHATSAPP
            </a>
          </motion.div>

          {/* Right: Image with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
              <img
                src="/assets/generated/hero-tattoo-artist.dim_800x600.jpg"
                alt="Kido Tattoo Artist at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/30 rounded-sm pointer-events-none" />
            {/* Stats badge */}
            <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm border border-border px-4 py-3">
              <div className="font-heading text-2xl font-black text-gold">
                5+
              </div>
              <div className="font-body text-xs text-muted-foreground tracking-wider">
                YEARS EXPERIENCE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-card section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-black text-foreground mb-3">
            GALLERY
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
          <p className="text-muted-foreground mt-4 font-body">
            A showcase of our finest work
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-ocid={`gallery.item.${i + 1}`}
              className="relative group overflow-hidden rounded-sm aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="font-heading text-sm font-bold tracking-wider text-foreground">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-300 rounded-sm" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/kido_tattoo_kanyakumari"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="gallery.primary_button"
            className="inline-flex items-center gap-2 border border-gold text-gold font-heading text-sm font-bold tracking-widest px-8 py-3 hover:bg-gold hover:text-[#111] transition-all duration-200"
          >
            <SiInstagram className="w-4 h-4" />
            VIEW MORE ON INSTAGRAM
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-black text-foreground mb-3">
            SERVICES
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
          <p className="text-muted-foreground mt-4 font-body">
            Exceptional artistry at every session
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`services.card.${i + 1}`}
              className="bg-card border border-border p-6 group hover:border-gold/50 transition-colors duration-300"
            >
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold tracking-wider text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-black text-foreground mb-3">
            CONTACT
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
          <p className="text-muted-foreground mt-4 font-body">
            Find us & get in touch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-sm overflow-hidden border border-border h-80 md:h-96"
          >
            <iframe
              title="Kido Tattoo Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.5!2d77.5!3d8.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f5a5a5a5a5a5%3A0x0!2sMulagumoodu%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-background border border-border p-6">
              <h3 className="font-heading text-2xl font-bold tracking-wider text-gold mb-6">
                GET IN TOUCH
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="text-gold mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold tracking-widest text-muted-foreground mb-1">
                      ADDRESS
                    </div>
                    <p className="text-foreground font-body text-sm leading-relaxed">
                      Kootamavu, Mulagumoodu (P.O.)
                      <br />
                      Kanyakumari District — 629167
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-center gap-4">
                  <div className="text-gold">
                    <SiWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold tracking-widest text-muted-foreground mb-1">
                      WHATSAPP
                    </div>
                    <a
                      href="https://wa.me/916380021756"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.primary_button"
                      className="text-foreground hover:text-gold transition-colors font-body text-sm"
                    >
                      +91 6380021756
                    </a>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-center gap-4">
                  <div className="text-gold">
                    <SiInstagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold tracking-widest text-muted-foreground mb-1">
                      INSTAGRAM
                    </div>
                    <a
                      href="https://www.instagram.com/kido_tattoo_kanyakumari"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.secondary_button"
                      className="text-foreground hover:text-gold transition-colors font-body text-sm"
                    >
                      @kido_tattoo_kanyakumari
                    </a>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="flex items-center gap-4">
                  <div className="text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold tracking-widest text-muted-foreground mb-1">
                      HOURS
                    </div>
                    <p className="text-foreground font-body text-sm">
                      Mon–Sat: 10:00 AM – 8:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/916380021756"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.open_modal_button"
              className="flex items-center justify-center gap-3 w-full bg-gold text-[#111] font-heading text-sm font-bold tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
            >
              <SiWhatsapp className="w-5 h-5" />
              BOOK YOUR SESSION NOW
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo + Tagline */}
          <div>
            <div className="font-heading text-4xl font-black tracking-widest text-gold leading-none">
              KIDO
            </div>
            <div className="font-heading text-xs font-semibold tracking-[0.3em] text-muted-foreground mt-1 mb-3">
              TATTOO STUDIO
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Premium tattoo artistry in Kanyakumari District. Every design
              tells a story.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest text-gold mb-4">
              QUICK LINKS
            </h4>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="footer.link"
                  className="block font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social + Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-widest text-gold mb-4">
              CONNECT WITH US
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/kido_tattoo_kanyakumari"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors font-body text-sm"
              >
                <SiInstagram className="w-4 h-4" />
                @kido_tattoo_kanyakumari
              </a>
              <a
                href="https://wa.me/916380021756"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors font-body text-sm"
              >
                <SiWhatsapp className="w-4 h-4" />
                +91 6380021756
              </a>
              <div className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kootamavu, Mulagumoodu, Kanyakumari — 629167</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs font-body">
            © {year} Kido Tattoo Studio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs font-body">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:opacity-80 transition-opacity"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/916380021756"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.primary_button"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <GallerySection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
