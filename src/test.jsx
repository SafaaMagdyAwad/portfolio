import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap, Users, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { toast } from 'react-toastify';

export default function MindUpPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState('en');
  const [form, setForm] = useState(
    {
      name: "",
      email: "",
      message: "",
    }
  );
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
        ],
      },
      contact: {
        title: ["Let's Build Something ", "Amazing"],
        desc: "Have a project in mind? Let's talk.",
        alert: ["Message sent successfully!", "Please fill all fields"],
        info: ["Contact Information", "Email Us", "Call Us", "Visit Us", "Follow Us"], // MISSING
        form: ["Name", "Your Name", "Email", "Your Email", "Message", "Your Message", "Send Message","Phone" ,"Your phon"] // MISSING
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
          }
        ]
      },
      contact: {
        title: ["لنبني شيئًا ", "مذهلًا"],
        desc: "هل لديك فكرة؟ تواصل معنا.",
        alert: ["تم إرسال الرسالة!", "يرجى ملء جميع الحقول"],
        info: ["معلومات الاتصال", "البريد الإلكتروني", "اتصل بنا", "الموقع", "تابعنا"], // MISSING
        form: ["الاسم", "اسمك", "البريد الإلكتروني", "بريدك الإلكتروني", "الرسالة", "رسالتك", "إرسال الرسالة","الهاتف","رقم الهاتف"] // MISSING
      },
      footer: "© 2026 MindUp",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }


  const handleSendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_hi7ocz3",      
                "template_shn9lrc",   
                formRef.current,
                "jUG-YiSTnuI9350nj"    
            )

            .then(
                () => {
                    toast.success("تم إرسال الرسالة بنجاح ✅");
                    formRef.current.reset();
                },
                (error) => {
                    toast.error("حصل خطأ ❌");
                    console.log(error.text);
                }
            );
    };

  const t = content[language];
  const isRTL = language === 'ar';
  const tech = [['React', 'Node.js', 'MongoDB', 'Stripe'], ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'], ['React Native', 'Firebase', 'GraphQL'], ['Next.js', 'WebRTC', 'Redis', 'AWS'], ['React', 'OpenAI API', 'Express', 'Docker'], ['Angular', 'IoT', 'Microservices', 'Kubernetes']];
  const gradients = ['from-purple-600 to-pink-600', 'from-blue-600 to-cyan-600', 'from-green-600 to-teal-600', 'from-orange-600 to-red-600', 'from-indigo-600 to-purple-600', 'from-yellow-600 to-orange-600'];

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

 

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ left: `${mousePosition.x / 20}px`, top: `${mousePosition.y / 20}px` }} />
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{ right: `${mousePosition.x / 30}px`, bottom: `${mousePosition.y / 30}px` }} />
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 top-1/2 left-1/2" />
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">MindUp</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'projects', 'contact'].map((s, i) => (
                <button key={s} onClick={() => scrollTo(s)} className={`hover:text-cyan-400 transition-colors relative group ${activeSection === s ? 'text-cyan-400' : ''}`}>
                  {t.nav[i]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
              </button>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['home', 'about', 'projects', 'contact'].map((s, i) => (
                <button key={s} onClick={() => scrollTo(s)} className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">
                  {t.nav[i]}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-block animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
              <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">{t.hero.badge}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            {t.hero.title[0]}
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">{t.hero.title[1]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">{t.hero.desc}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button onClick={() => scrollTo('projects')} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">{t.hero.btn[0]}</button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300">{t.hero.btn[1]}</button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 animate-fade-in-up animation-delay-600">
            {[['150+', t.hero.stats[0]], ['50+', t.hero.stats[1]], ['99%', t.hero.stats[2]]].map(([num, label], i) => (
              <div key={i} className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{num}</div>
                <div className="text-gray-400 text-sm mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.about.title[0]}<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t.about.title[1]}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.about.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.about.items.map(([title, desc], i) => {
              const Icon = [Code, Users, Zap][i];
              return (
                <div key={i} className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${gradients[i]} rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{desc}</p>
                </div>
              );
            })}
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

      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title[0]}<span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t.contact.title[1]}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.contact.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold mb-6">{t.contact.info[0]}</h3>

                {[[Mail, 'hello@mindup.dev', t.contact.info[1]], [Phone, '+1 (555) 123-4567', t.contact.info[2]], [MapPin, 'San Francisco, CA', t.contact.info[3]]].map(([Icon, text, label], i) => (
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
                    {[Github, Linkedin, Twitter].map((Icon, i) => (
                      <button key={i} className="p-3 bg-white/5 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transform hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10">
              <form onSubmit={handleSendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.form[0]}</label>
                  <input type="text" name='name' value={form.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors" placeholder={t.contact.form[1]} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.form[6]}</label>
                  <input type="text" name='phone' value={form.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors" placeholder={t.contact.form[7]} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.form[2]}</label>
                  <input type="email" name='email' value={form.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors" placeholder={t.contact.form[3]} />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.form[4]}</label>
                  <textarea value={form.message} name='message' onChange={handleChange} rows="5" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors resize-none" placeholder={t.contact.form[5]} />
                </div>

                <button type='submit' className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
                  {t.contact.form[6]}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">{t.footer}</p>
        </div>
      </footer>

      <style>{`
        @keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animation-delay-200 { animation-delay: 0.2s; animation-fill-mode: both; }
        .animation-delay-400 { animation-delay: 0.4s; animation-fill-mode: both; }
        .animation-delay-600 { animation-delay: 0.6s; animation-fill-mode: both; }
      `}</style>
    </div>
  );
}