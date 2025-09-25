import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ShieldCheck,
  Droplets,
  Waves,
  Home,
  Building,
  Square,
  Sun,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Clock,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { mockData } from "./mock";

const iconMap = {
  ShieldCheck,
  Droplets,
  Waves,
  Home,
  Building,
  Square,
  Sun,
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-navy-900">
              {mockData.company.name}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-navy-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Accueil
              </a>
              <a
                href="#services"
                className="text-navy-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-navy-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                À propos
              </a>
              <a
                href="#portfolio"
                className="text-navy-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="text-navy-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#home"
                className="block text-navy-700 hover:text-emerald-600 px-3 py-2 text-base font-medium"
              >
                Accueil
              </a>
              <a
                href="#services"
                className="block text-navy-700 hover:text-emerald-600 px-3 py-2 text-base font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-navy-700 hover:text-emerald-600 px-3 py-2 text-base font-medium"
              >
                À propos
              </a>
              <a
                href="#portfolio"
                className="block text-navy-700 hover:text-emerald-600 px-3 py-2 text-base font-medium"
              >
                Réalisations
              </a>
              <a
                href="#contact"
                className="block text-navy-700 hover:text-emerald-600 px-3 py-2 text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const HeroSection = () => {
  const handleClick = () => {
    const numero = "237690659449";
    const message =
      "Bonjour, je souhaite demander un devis pour vos solutions d'étanchéité au Cameroun.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
            {mockData.company.tagline}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Spécialiste de l'étanchéité depuis plus de 5 ans. Solutions
            professionnelles pour particuliers et entreprises avec garantie de
            qualité.Nous intervenons dans tout le Cameroun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleClick}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
            >
              Demander un devis
              <ArrowRight className="ml-2" size={20} />
            </Button>

            <a href="tel:+237690460271" style={{ textDecoration: "none" }}>
              <Button
                href="tel:+237690659449"
                variant="outline"
                size="lg"
                className="border-navy-700 text-navy-700 hover:bg-navy-50 px-8 py-3 text-lg"
              >
                <Phone className="mr-2" size={20} />
                {mockData.company.contact.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Nos Services d'Étanchéité
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services d'étanchéité pour tous
            vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors">
                      <IconComponent className="text-emerald-600" size={32} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              À propos d'ETANCHEXPERT
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {mockData.company.description}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nous mettons notre savoir-faire au service de votre patrimoine
              avec des techniques innovantes et des matériaux de qualité
              supérieure. Chaque projet bénéficie d'un diagnostic personnalisé
              et d'un suivi rigoureux.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {mockData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
              alt="Équipe EtanchExpert"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <Award className="text-emerald-600" size={24} />
                <div>
                  <div className="font-semibold text-navy-900">Certifié</div>
                  <div className="text-sm text-gray-600">Qualibat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.portfolio.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-emerald-600 font-medium mb-1">
                  {project.category}
                </div>
                <h3 className="font-semibold text-navy-900">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Avis Clients
          </h2>
          <p className="text-xl text-gray-600">
            La satisfaction de nos clients est notre priorité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold text-navy-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Merci ! Votre message a été envoyé. Nous vous contacterons rapidement."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600">
            Une question ? Un projet ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">
              Demander un devis gratuit
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Envoyer la demande
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-navy-900 mb-6">
              Nos coordonnées
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-emerald-600 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-navy-900">Téléphone</div>
                  <div className="text-gray-600">
                    {mockData.company.contact.phone}
                  </div>
                  <div className="text-sm text-gray-500">
                    Disponible 24h/24 pour les urgences
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-emerald-600 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-navy-900">Email</div>
                  <div className="text-gray-600">
                    {mockData.company.contact.email}
                  </div>
                  <div className="text-sm text-gray-500">Réponse sous 24h</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-emerald-600 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-navy-900">Adresse</div>
                  <div className="text-gray-600">
                    {mockData.company.contact.address}
                  </div>
                  <div className="text-sm text-gray-500">
                    Intervention dans tout le Cameroun
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-emerald-600 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-navy-900">Horaires</div>
                  <div className="text-gray-600">Lun - Ven : 8h - 18h</div>
                  <div className="text-gray-600">Sam : 9h - 17h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              {mockData.company.name}
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire de confiance pour tous vos travaux d'étanchéité.
              Qualité, durabilité et service client d'exception.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                LinkedIn
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Réalisations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{mockData.company.contact.phone}</li>
              <li>{mockData.company.contact.email}</li>
              <li>{mockData.company.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {mockData.company.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
