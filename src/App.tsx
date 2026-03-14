import React from 'react';
import {
  Rocket,
  MessageCircle,
  Banknote,
  Zap,
  Smartphone,
  Search,
  MessageSquare,
  Palette,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  User,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const FloatingWhatsApp = () => (
  <a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform" href="https://wa.me/263774292476?text=Hi, I am interested in your web design services." target="_blank" rel="noopener noreferrer">
    <MessageCircle className="w-8 h-8" />
  </a>
);

const Header = () => (
  <header className="sticky top-0 z-40 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80">
    <div className="container mx-auto px-4 lg:px-20 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Rocket className="text-primary w-8 h-8" />
        <span className="text-xl font-extrabold tracking-tight text-primary">primeWeb.studios</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
        <a className="hover:text-primary transition-colors" href="#benefits">Benefits</a>
        <a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
        <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
        <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 inline-block">
          Get Started
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
    <div className="container mx-auto px-4 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Trusted by 200+ Zimbabwean SMEs
          </div>
          <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
            Affordable <span className="text-primary">Web Designing</span> Services For Zimbabwe
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Empowering local businesses with world-class digital presence. Professional, responsive, and SEO-optimized websites tailored specifically for the Zimbabwean market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-primary/90 transition-all shadow-xl shadow-primary/25" href="#pricing">
              View Packages
            </a>
            <a className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-lg font-bold text-center hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="https://wa.me/263774292476?text=Hi, I am interested in your web design services." target="_blank" rel="noopener noreferrer">
              <MessageCircle className="text-[#25D366] w-6 h-6" />
              Chat On WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img className="w-full h-auto object-cover" alt="Modern website design dashboard on laptop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmSa-PnryLyJQWu-DScI5kG1Me_4bQVgYm7MOnRsD9iVwWmV-I6rI1Lor0vJ3YtHSkPXs4rN-A9qnfMbs1PLYTugqmJoIyeC-YF2GmworsBZHle7rkZ2ILFVXTyAXNV90k1RjPOQuV906DxoHhjz_Tyhm7Il-FMQJllz7NuExWKVgjMr7dAXHVW2rOH5fpskDCXn9Si6UcSm7x9VDPtTe_2GboTLxhW3mNy1oOgs9U007KgR2jLbiF23I7ayxMQman9FlBBOH1W0Y" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const benefits = [
    { icon: Banknote, title: "Affordability", desc: "Pricing strategies designed to fit Zimbabwean startups and established corporates alike." },
    { icon: Zap, title: "Lightning Speed", desc: "Fast turnaround times and optimized code for quick loading even on slower local networks." },
    { icon: Smartphone, title: "Responsive Design", desc: "Perfect viewing experience on mobile, tablet, and desktop—essential for the mobile-first Zim market." },
    { icon: Search, title: "SEO Optimized", desc: "Rank higher on Google searches within Zimbabwe and attract organic local traffic." },
    { icon: MessageSquare, title: "WhatsApp Integration", desc: "Direct customer engagement via integrated floating WhatsApp buttons for instant leads." },
    { icon: Palette, title: "Professional Design", desc: "Clean, modern aesthetics that build trust and authority for your brand globally." },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900/50" id="benefits">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Businesses Choose Us</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We combine technical expertise with local market insights to deliver websites that actually sell.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all bg-background-light dark:bg-slate-800/50 group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <b.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Transparent Pricing</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">No hidden fees. Choose a package that fits your business goals.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Startup */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg mb-2">Startup</h4>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-primary">$60</span>
              <span className="text-slate-500 text-sm">/ once</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> 3 Pages Landing Website</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Mobile Responsive</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> WhatsApp Integration</li>
              <li className="flex items-center gap-2"><XCircle className="text-slate-300 w-5 h-5" /> Professional Emails</li>
            </ul>
            <a href="https://wa.me/263774292476?text=Hi, I am interested in the Startup package." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-center block">Order Now</a>
          </div>
          {/* Small Business */}
          <div className="bg-primary p-8 rounded-2xl border-4 border-accent relative flex flex-col shadow-2xl scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Best Seller</div>
            <h4 className="font-bold text-lg mb-2 text-white">Small Business</h4>
            <div className="flex items-baseline gap-1 mb-6 text-white">
              <span className="text-4xl font-black">$100</span>
              <span className="text-white/60 text-sm">/ once</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow text-sm text-white/90">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-5 h-5" /> Up to 5 Pages</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-5 h-5" /> SEO Optimization</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-5 h-5" /> 2 Professional Emails</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-accent w-5 h-5" /> Google Map Integration</li>
            </ul>
            <a href="https://wa.me/263774292476?text=Hi, I am interested in the Small Business package." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-lg bg-accent text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-accent/20 text-center block">Order Now</a>
          </div>
          {/* Medium Business */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg mb-2">Medium Business</h4>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-primary">$250</span>
              <span className="text-slate-500 text-sm">/ once</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Up to 10 Pages</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Catalog/Gallery</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> 5 Professional Emails</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Blog Setup</li>
            </ul>
            <a href="https://wa.me/263774292476?text=Hi, I am interested in the Medium Business package." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-center block">Order Now</a>
          </div>
          {/* Corporate */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-lg mb-2">Corporate</h4>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-primary">$500</span>
              <span className="text-slate-500 text-sm">/ once</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Custom E-commerce</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Unlimited Emails</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Payment Gateway (PayNow)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> 1 Year Free Hosting</li>
            </ul>
            <a href="https://wa.me/263774292476?text=Hi, I am interested in the Corporate package." target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-center block">Order Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      img: "/images (2).jpg",
      category: "Sports & Culture",
      title: "Harare Darts Association",
      link: "https://harare-darts-association.vercel.app/"
    },
    {
      img: "/download.jpg",
      category: "Retail & Fashion",
      title: "MarCo Threads Clothing",
      link: "https://marco-threads-frontend.vercel.app/"
    },
    {
      img: "/download (1).jpg",
      category: "Chatbot",
      title: "City of Harare voice assistance chatbot",
      link: "https://cityofharare-voice-assistant.vercel.app/"
    },
    {
      img: "/images.jpg",
      category: "Clothing",
      title: "Pacewood company",
      link: "https://pacewood-group-1rp1.vercel.app/"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/30" id="projects">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Recent Work</h2>
            <p className="text-slate-600 dark:text-slate-400">Trusted by local brands across various industries.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-slate-300 hover:bg-primary hover:text-white transition-colors"><ArrowLeft className="w-5 h-5" /></button>
            <button className="p-2 rounded-full border border-slate-300 hover:bg-primary hover:text-white transition-colors"><ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg block">
              <img className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" alt={p.title} src={p.img} />
              <div className="p-6">
                <span className="text-xs font-bold text-accent uppercase tracking-tighter">{p.category}</span>
                <h4 className="text-xl font-bold mt-1">{p.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadGen = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 lg:px-20">
      <div className="bg-primary rounded-[2rem] p-8 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Search className="w-40 h-40 text-white" />
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-black">Free Business Website Check Tool</h2>
            <p className="text-white/80 text-lg">Thinking about getting a website? Let us analyze your business niche and provide a free digital roadmap within 24 hours.</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-primary" alt="User avatar 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZefiumR7VhfLak3Li1gn-5krP9MIE6yDm5IxF5pPxyiOl0g5y_oPyQMWMxpqC6ANNhJ1QI1J6ceux9bmLyRGprjc1Kfpj8JGAINR3gdqgEzR1u4ZAWkNnzLsnMXEGCFYv8AZhIZjzq9umxLiKQjzMxXlu-2UPC4jBIPCCnarbe6pueF_GbFyQTVgHdB8EtVu9LFC6Zt5usOR3DC3lDKvxJ2IZWrVcxbbdwZB2N4lgtwTAgZbiAmIJcoqq7odmbElwx56Oq3vvZ98" />
                <img className="w-10 h-10 rounded-full border-2 border-primary" alt="User avatar 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcDHdXRuA0mS77EU9htFrvgOWQGsireiG9II-vG3ploY1ok8ZRhcWFPomoeeDKDnHusu3dYyMowsLe91aTpMdfM9-iw-1pVqtau58j5R62bxMAa1x0bsvQtt7xo1cECKUJe0ymBhOH-pQq55TqvkipbCYbVW1U_9m3WOOg0czsduSwo1xMRRQPweZTcnlCPZY5T_M4xfg2FKLnBrXWPd7xqTs49ESpQsXx7t23gIqYaz8TNHrhKgrtAyllO_dvtqEBAljiGwhP2h0" />
                <img className="w-10 h-10 rounded-full border-2 border-primary" alt="User avatar 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC08PnUeOn2ylg48_-qwS-5yrKLmNWvMzHJMQZuLnIzQqVWWLWs-YFqkUI8OxHxp-pSvqxr8ozhyxXTYay0zZXWZujZAzS-jvpEJgYVfaYKAEB__LSqa08ssvGdXPkqtN_mhMd3XKFFFMb-reqIe9T2hDmZt-BkB4p3D4SPGFpGAvfCz0wMhHzU9Zgej-9i19qyfv8dmfbXrvTf51nVnOHPWTfLJcEIrJLTajB2VWEGE6nc23LCn9rdDLVor4Esb4KcSOLJV5tBReo" />
              </div>
              <span className="text-sm font-medium">Joined by 15 businesses this week</span>
            </div>
          </div>
          <form className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Business Name</label>
              <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none dark:bg-slate-800" placeholder="e.g. Harare Fresh Groceries" type="text" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">WhatsApp Number</label>
              <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none dark:bg-slate-800" placeholder="+263 7..." type="tel" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Business Type</label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none dark:bg-slate-800">
                <option>Retail Store</option>
                <option>Service Provider</option>
                <option>Organization/NGO</option>
                <option>Startup Venture</option>
              </select>
            </div>
            <a href="https://wa.me/263774292476?text=Hi, I would like to get my free business report." target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 transition-all text-center block">Get My Free Report</a>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    { text: "Fast and professional! Our restaurant bookings increased significantly after the site went live.", name: "Farai G.", company: "Mojo Grills Bulawayo" },
    { text: "The WhatsApp integration is a game-changer for our logistics business. We get leads daily now.", name: "Tendai M.", company: "FastLink Couriers" },
    { text: "Best price in Zimbabwe for this level of quality. Highly recommend the Small Business package.", name: "Nyasha S.", company: "Nyasha Designs" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 lg:px-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-background-light dark:bg-slate-800/50 rounded-2xl relative mt-4">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white p-3 rounded-full">
                <Quote className="w-6 h-6 fill-current" />
              </div>
              <div className="flex justify-center gap-1 mb-4 text-accent mt-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic mb-6">"{t.text}"</p>
              <div className="font-bold">{t.name}</div>
              <div className="text-sm text-slate-500">{t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-20" id="contact">
    <div className="container mx-auto px-4 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Talk About Your Project</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Ready to take your business to the next level? Reach out to our lead designers directly.</p>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="font-bold text-lg leading-tight">Anesu</div>
                <div className="text-primary text-sm font-medium">anesu@primeweb.studios</div>
                <div className="text-primary text-sm font-medium">+263 78610 7106</div>
                <a href="https://wa.me/263786107106?text=Hi Anesu, I am interested in your web design services." target="_blank" rel="noopener noreferrer" className="text-[#25D366] text-sm font-medium hover:underline">WhatsApp Anesu</a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-bold text-lg leading-tight">Masimba</div>
                <div className="text-primary text-sm font-medium">masimba@primeweb.studios</div>
                <div className="text-primary text-sm font-medium">+263 774292476</div>
                <a href="https://wa.me/263774292476?text=Hi Masimba, I am interested in your web design services." target="_blank" rel="noopener noreferrer" className="text-[#25D366] text-sm font-medium hover:underline">WhatsApp Masimba</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Full Name</label>
                <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none dark:bg-slate-900" placeholder="John Doe" type="text" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Phone Number</label>
                <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none dark:bg-slate-900" placeholder="+263 77 123 4567" type="tel" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none dark:bg-slate-900" placeholder="How can we help your business?" rows={4}></textarea>
            </div>
            <a href="https://wa.me/263774292476?text=Hi, I have an inquiry about your web design services." target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20 text-center block">Send Inquiry</a>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary text-white pt-20 pb-10">
    <div className="container mx-auto px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-2">
            <Rocket className="text-white w-8 h-8" />
            <span className="text-xl font-extrabold tracking-tight">primeWeb.studios</span>
          </div>
          <p className="text-white/70">Start Your Business Website Today! The digital revolution is here, and we're helping Zimbabwean companies lead the way.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
              <Twitter className="w-5 h-5 fill-current" />
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" href="#">
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold">Services</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Web Design</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Ecommerce</a></li>
              <li><a className="hover:text-white transition-colors" href="#">SEO Services</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Domain Hosting</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Company</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-white transition-colors" href="#projects">Projects</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Testimonials</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Legal</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© 2024 primeWeb.studios. All Rights Reserved. Based in Harare, Zimbabwe.</p>
        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="#">Terms</a>
          <a className="hover:text-white transition-colors" href="#">Privacy</a>
          <a className="hover:text-white transition-colors" href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300 min-h-screen">
      <FloatingWhatsApp />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <Portfolio />
        <LeadGen />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
