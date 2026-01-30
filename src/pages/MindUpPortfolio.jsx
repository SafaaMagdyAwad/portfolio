import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Zap, Users, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'; // Ensure this is installed

export default function MindUpPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState('en');

  // Use a ref for the form for emailjs
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    message: "",
  });

  const content = {
    en: {
      nav: ["Home", "About", "Projects", "Contact"],
      hero: {
        badge: "Web Development Excellence",
        title: ["We Transform Ideas Into", "Digital Experiences"],
        desc: "MindUp builds modern web solutions that are fast, scalable, and user-focused.",
        btn: ["View Our Work", "Get In Touch"],
        stats: ["Projects Delivered", "Happy Clients", "Satisfaction Rate"],
      },
      about: {
        title: ["Why Choose ", "MindUp?"],
        desc: "We blend creativity, engineering, and strategy.",
        items: [
          ["Expert Development", "Clean, scalable, modern architecture."],
          ["User-Centered Design", "Beautiful UX that users love."],
          ["Reliable Support", "Long-term partnership and support."],
        ],
      },
      projects: {
        title: ["Our Latest ", "Projects"],
        desc: "Real products, real impact.",
        items: [
          {
            title: "Emti7any – Online Exams",
            category: "Web App",
            desc: "Secure exam platform with anti-cheating system and reports.",
            image: "Emti7ani.png",
            link: "https://online-exam-front.vercel.app/",
            tech: ["React", "Node.js", "MongoDB"],
          },
          {
            title: "Online Store",
            category: "E-Commerce",
            desc: "Online store with local & global payments.",
            image: "Store.png",
            link: "https://online-store-sigma-five.vercel.app/",
            tech: ["React", "Stripe", "Express"],
          },
          {
            title: "Terhal – AI Tour Guide",
            category: "AI Web App",
            desc: "AI-powered recommendations for travelers.",
            image: "Ter7al.png",
            link: "https://v1-ashy-alpha.vercel.app/",
            tech: ["React", "OpenAI API", "Node.js"],
          },
          {
            title: "Flowers Shop",
            category: "Landing Page",
            desc: "Modern landing page for flower business.",
            image: "flowersLanding.png",
            link: "https://flowers-shop-landing-page.vercel.app/",
            tech: ["React", "Tailwind"],
          },
          {
            title: "AI Chat System",
            category: "OpenAI",
            desc: "ChatGPT-like interface powered by OpenAI.",
            image: "chatgpt.png",
            link: "https://open-ai-two-theta.vercel.app/",
            tech: ["React", "OpenAI API"],
          },
          {
            title: "Doctor Clinic",
            category: "Landing Page",
            desc: "Clinic website with booking UX.",
            image: "doctorClinic.png",
            link: "https://doctor-clinic-three.vercel.app/",
            tech: ["React", "Tailwind"],
          },
          {
            title: 'Medical analysis Lap',
            category: "Web App",
            desc: "Midical Lap website ,with Booking , result delivery on site",
            image: 'MidLap.png',
            link: 'https://medical-lap-nine.vercel.app/',
            tech: ['React', 'Tailwind CSS']
          },
          {
            title: ' Resturant',
            category: 'Wep App',
            desc: "Resturant web site with QR Code leads to resturant menue, availability to update the menue items , clint can book a table or make an order",
            image: 'Resturant.png',
            link: 'https://resturant-five-lake.vercel.app/',
            tech: ['React', 'Tailwind CSS','node js' ,'express','mongoDB']
          },
          {
            title: 'PureScience',
            category: 'Landing Page',
            desc: "Youtupe channel landing page with contact info , social media links ",
            image: 'commingSoon.jpg',
            link: '',
            tech: ['React', 'Tailwind CSS']
          }
        ],
      },
      contact: {
        title: ["Let's Build Something ", "Amazing"],
        desc: "Have a project in mind? Let's talk.",
        alert: ["Message sent successfully!", "Please fill all fields"],
        info: ["Contact Information", "Email Us", "Call Us", "Visit Us", "Follow Us"],
        // Corrected indexing: [0]Label, [1]Place, [2]Label, [3]Place, [4]Label, [5]Place, [6]Btn, [7]PhoneLabel, [8]PhonePlace
        form: ["Name", "Your Name", "Email", "Your Email", "Message", "Your Message", "Send Message", "Phone", "Your Phone Number"]
      },
      footer: "© 2026 MindUp. All rights reserved.",
    },
    ar: {
      nav: ["الرئيسية", "عن الشركة", "المشاريع", "اتصل بنا"],
      hero: {
        badge: "التميز في تطوير الويب",
        title: ["نحوّل الأفكار إلى", "تجارب رقمية"],
        desc: "نصنع حلول ويب حديثة وسريعة وقابلة للتوسع.",
        btn: ["أعمالنا", "تواصل معنا"],
        stats: ["مشروع", "عميل", "رضا العملاء"],
      },
      about: {
        title: ["لماذا ", "MindUp؟"],
        desc: "نمزج بين التصميم والهندسة.",
        items: [
          ["تطوير احترافي", "كود نظيف وقابل للتوسع."],
          ["تصميم متمحور حول المستخدم", "تجربة استخدام قوية."],
          ["دعم مستمر", "شراكة طويلة المدى."],
        ],
      },
      projects: {
        title: ['أحدث ', 'مشاريعنا'],
        desc: 'مجموعة من المشاريع الحقيقية التي قمنا بتنفيذها باستخدام أحدث تقنيات الويب.',
        items: [
          {
            title: 'إمتحاني – منصة امتحانات أونلاين',
            category: 'تطبيق ويب',
            desc: 'منصة امتحانات إلكترونية متكاملة تمنع الغش، وتوفر تقارير ذكية، وتجربة سهلة للمدرسين والطلاب.',
            image: 'Emti7ani.png',
            link: 'https://online-exam-front.vercel.app/',
            tech: ['React', 'Node.js', 'MongoDB']
          },
          {
            title: 'متجر إلكتروني',
            category: 'تجارة إلكترونية',
            desc: 'متجر إلكتروني متكامل يدعم وسائل الدفع المحلية والعالمية مع تجربة شراء سلسة.',
            image: 'Store.png',
            link: 'https://online-store-sigma-five.vercel.app/',
            tech: ['React', 'Stripe', 'Express']
          },
          {
            title: 'ترحال – دليل سياحي ذكي',
            category: 'تطبيق ويب بالذكاء الاصطناعي',
            desc: 'تطبيق سياحي ذكي يعتمد على الذكاء الاصطناعي لتقديم اقتراحات مخصصة وخطط سفر ذكية.',
            image: 'Ter7al.png',
            link: 'https://v1-ashy-alpha.vercel.app/',
            tech: ['React', 'OpenAI API', 'Node.js']
          },
          {
            title: 'متجر زهور',
            category: 'صفحة هبوط',
            desc: 'صفحة هبوط حديثة لمتجر زهور تركز على الجاذبية البصرية وزيادة التحويل.',
            image: 'flowersLanding.png',
            link: 'https://flowers-shop-landing-page.vercel.app/',
            tech: ['React', 'Tailwind CSS']
          },
          {
            title: 'نظام دردشة بالذكاء الاصطناعي',
            category: 'OpenAI',
            desc: 'نظام دردشة شبيه بـ ChatGPT يعتمد على واجهات OpenAI لتجربة محادثة ذكية.',
            image: 'chatgpt.png',
            link: 'https://open-ai-two-theta.vercel.app/',
            tech: ['React', 'OpenAI API']
          },
          {
            title: 'موقع عيادة طبية',
            category: 'صفحة هبوط',
            desc: 'موقع تعريفي لعيادة طبية مع تصميم احترافي وتجربة استخدام واضحة.',
            image: 'doctorClinic.png',
            link: 'https://doctor-clinic-three.vercel.app/',
            tech: ['React', 'Tailwind CSS']
          },
          {
            title: 'موقع معمل تحاليل طبية',
            category: 'تطبيق ويب',
            desc: "موقع للتعريف بمعمل التحاليل الطبيه و اتاحه الحجز و استلام النتائج من خلاله",
            image: 'MidLap.png',
            link: 'https://medical-lap-nine.vercel.app/',
            tech: ['React', 'Tailwind CSS']
          },
          {
            title: ' مطعم',
            category: 'تطبيق ويب',
            desc: "موقع تعريقي بالمطعم و QR code  لقائمه الطعام مع امكانيه التعديل  بالاضافه والحذف و امكانيه حجز طاوله او طلب الطعام للمنزل",
            image: 'Resturant.png',
            link: 'https://resturant-five-lake.vercel.app/',
            tech: ['React', 'Tailwind CSS','node js' ,'express','mongoDB']
          },
          {
            title: 'PureScience',
            category: 'صفحه هبوط',
            desc: "صفحه تعريفيه بقناه يوتيوب مربوطه بوسائل التواصل ",
            image: 'commingSoon.jpg',
            link: '',
            tech: ['React', 'Tailwind CSS']
          }
        ]
      },
      contact: {
        title: ["لنبني شيئًا ", "مذهلًا"],
        desc: "هل لديك فكرة؟ تواصل معنا.",
        alert: ["تم إرسال الرسالة بنجاح!", "يرجى ملء جميع الحقول"],
        info: ["معلومات الاتصال", "البريد الإلكتروني", "اتصل بنا", "الموقع", "تابعنا"],
        form: ["الاسم", "اسمك الكامل", "البريد الإلكتروني", "بريدك الإلكتروني", "الرسالة", "اكتب رسالتك هنا...", "إرسال الرسالة", "رقم الهاتف", "رقم هاتفك"]
      },
      footer: "© 2026 MindUp. جميع الحقوق محفوظة.",
    },
  };

  const t = content[language];
  const isRTL = language === 'ar';
  const gradients = ['from-purple-600 to-pink-600', 'from-blue-600 to-cyan-600', 'from-green-600 to-teal-600', 'from-orange-600 to-red-600', 'from-indigo-600 to-purple-600', 'from-yellow-600 to-orange-600','from-blue-600 to-purple-600','from-purple-600 to-yellow-600', 'from-orange-600 to-red-600'];

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      toast.error(t.contact.alert[1]);
      return;
    }

    emailjs.sendForm(
      "service_hi7ocz3",
      "template_shn9lrc",
      formRef.current,
      "jUG-YiSTnuI9350nj"
    )
      .then(() => {
        toast.success(t.contact.alert[0]);
        setForm({ name: "", email: "", phone: "", message: "" });
        formRef.current.reset();
      })
      .catch((error) => {
        toast.error("Error sending message");
        console.error(error.text);
      });
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-slate-900 text-white selection:bg-cyan-500/30`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" style={{ left: `${mousePosition.x / 20}px`, top: `${mousePosition.y / 20}px` }} />
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" style={{ right: `${mousePosition.x / 30}px`, bottom: `${mousePosition.y / 30}px` }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg group-hover:rotate-12 transition-all">
              <Code className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">MindUp</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['home', 'about', 'projects', 'contact'].map((s, i) => (
              <button key={s} onClick={() => scrollTo(s)} className={`hover:text-cyan-400 transition-colors relative group ${activeSection === s ? 'text-cyan-400' : ''}`}>
                {t.nav[i]}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-500 transition-all duration-300 ${activeSection === s ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
            <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">{t.hero.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t.hero.title[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">{t.hero.title[1]}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">{t.hero.desc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollTo('projects')} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:scale-105 transition-all">
              {t.hero.btn[0]}
            </button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-4 border border-cyan-500/50 rounded-full font-bold hover:bg-cyan-500/10 transition-all">
              {t.hero.btn[1]}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.about.title[0]}<span className="text-cyan-400">{t.about.title[1]}</span></h2>
            <p className="text-gray-400">{t.about.desc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.about.items.map(([title, desc], i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.projects.title[0]}<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t.projects.title[1]}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.projects.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.items.map((project, i) => (
              <div key={i} className="group relative backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Project Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="relative p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${gradients[i]} text-xs font-semibold`}>
                      {project.category}
                    </div>
                    {/* Project Link Icon */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className={`w-5 h-5 text-gray-400 group-hover:text-cyan-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ${isRTL ? 'rotate-180' : ''}`} />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((techName, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">
                        {techName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold mb-6">{t.contact.info[0]}</h3>

                {[[Mail, 'safaa.magdy.awad.mohammed@gmail.com', t.contact.info[1]], [Phone, '+201067605447', t.contact.info[2]]].map(([Icon, text, label], i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{label}</div>
                      <div className="text-lg group-hover:text-cyan-400 transition-colors">{text}</div>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400 mb-4">{t.contact.info[4]}</p>
                  <div className="flex gap-4">
                    {[
                      { Icon: Github, link: "https://github.com/yourprofile" },
                      { Icon: Linkedin, link: "https://linkedin.com/in/yourprofile" },
                      { Icon: Twitter, link: "https://twitter.com/yourprofile" }
                    ].map(({ Icon, link }, i) => (
                      <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSendEmail} className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-2">{t.contact.form[0]}</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500" placeholder={t.contact.form[1]} />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2">{t.contact.form[7]}</label>
                  <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500" placeholder={t.contact.form[8]} />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">{t.contact.form[2]}</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500" placeholder={t.contact.form[3]} />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">{t.contact.form[4]}</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500" placeholder={t.contact.form[5]} />
              </div>
              <button type="submit" className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-bold transition-all">
                {t.contact.form[6]}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-gray-500 text-sm">
        {t.footer}
      </footer>
    </div>
  );
}