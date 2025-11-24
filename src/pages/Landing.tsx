import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Cloud, Camera, AlertTriangle, ArrowRight, CheckCircle2, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Landing = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-white selection:text-black">
            {/* Header */}
            <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="p-2 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                            <Leaf className="h-5 w-5 text-black" />
                        </div>
                        <span className="text-xl font-bold tracking-tighter group-hover:tracking-widest transition-all duration-300">CropGuard AI</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Features', 'How it Works', 'About'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                                className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link to="/app" className="hidden md:block">
                            <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-full px-6 font-semibold hover:scale-105 active:scale-95">
                                Get Started
                            </Button>
                        </Link>

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-zinc-100 hover:bg-zinc-800">
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="bg-zinc-950 border-zinc-800 text-zinc-100">
                                    <div className="flex flex-col gap-8 mt-8">
                                        <nav className="flex flex-col gap-6">
                                            {['Features', 'How it Works', 'About'].map((item) => (
                                                <button
                                                    key={item}
                                                    onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                                                    className="text-lg font-medium text-zinc-400 hover:text-zinc-100 transition-colors text-left"
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </nav>
                                        <Link to="/app">
                                            <Button className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-full font-semibold">
                                                Get Started
                                            </Button>
                                        </Link>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 md:py-48 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium transition-all hover:border-zinc-8000 hover:bg-white/5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
                            New Generation of Farming
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                            Smart Farming <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Simplified.</span>
                        </h1>

                        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            Protect your crops with AI-powered pest detection, real-time weather monitoring, and smart alerts. The future of agriculture is here.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                            <Link to="/app">
                                <Button size="lg" className="h-14 px-10 text-lg gap-2 bg-white text-black hover:bg-gray-200 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                                    Start Detecting <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                            <a href="#about">
                                <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold border-zinc-600 text-white bg-white/5 hover:bg-white/10 hover:text-white hover:border-white rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95">
                                    Learn More
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 md:py-32 border-t border-zinc-800 bg-zinc-950/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Why CropGuard AI?</h2>
                            <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                                CropGuard AI is more than just an app; it's your digital farming companion.
                                We combine cutting-edge artificial intelligence with real-time environmental data
                                to empower farmers with actionable insights. Our mission is to reduce crop loss,
                                minimize chemical usage, and ensure a sustainable future for agriculture.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                <div className="p-6 rounded-2xl bg-black border border-zinc-800">
                                    <h3 className="text-xl font-semibold mb-3 text-zinc-100">Precision Farming</h3>
                                    <p className="text-zinc-400">Targeted interventions based on accurate data, saving resources and maximizing yield.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-black border border-zinc-800">
                                    <h3 className="text-xl font-semibold mb-3 text-zinc-100">Early Detection</h3>
                                    <p className="text-zinc-400">Identify threats before they spread, protecting your harvest and investment.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-black border border-zinc-800">
                                    <h3 className="text-xl font-semibold mb-3 text-zinc-100">Sustainable Future</h3>
                                    <p className="text-zinc-400">Promoting eco-friendly practices for long-term soil health and biodiversity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 md:py-32 bg-black relative">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Powerful Features</h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                                Everything you need to monitor and protect your crops in one place.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Cloud,
                                    title: "Weather Monitoring",
                                    desc: "Real-time weather updates and forecasts to help you plan your farming activities effectively."
                                },
                                {
                                    icon: Camera,
                                    title: "AI Pest Detection",
                                    desc: "Instant identification of pests and diseases using advanced AI technology on your phone."
                                },
                                {
                                    icon: AlertTriangle,
                                    title: "Smart Alerts",
                                    desc: "Get notified immediately about potential risks to your crops so you can take action fast."
                                }
                            ].map((feature, index) => (
                                <Card key={index} className="bg-zinc-950/50 border-zinc-800 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <CardHeader>
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                                            <feature.icon className="h-7 w-7 text-zinc-100 group-hover:text-black transition-colors duration-500" />
                                        </div>
                                        <CardTitle className="text-2xl text-zinc-100 group-hover:text-zinc-100 transition-colors">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-zinc-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <section id="how-it-works" className="py-20 md:py-32 border-t border-zinc-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-20">
                            <div className="flex-1 space-y-12">
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">How It Works</h2>

                                {[
                                    { step: 1, title: "Take a Photo", desc: "Simply take a photo of your crop using your smartphone camera." },
                                    { step: 2, title: "AI Analysis", desc: "Our advanced AI analyzes the image to detect pests or diseases." },
                                    { step: 3, title: "Get Solutions", desc: "Receive instant treatment recommendations and preventive measures." }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-6 group">
                                        <div className="flex-none">
                                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-bold text-lg group-hover:bg-white group-hover:text-black transition-all duration-300">
                                                {item.step}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold mb-3 group-hover:text-zinc-100 transition-colors">{item.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex-1 relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl blur-2xl opacity-20 animate-pulse" />
                                <div className="bg-zinc-950 rounded-3xl p-12 min-h-[500px] flex items-center justify-center border border-zinc-800 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                                    <div className="text-center relative z-10 transform transition-transform duration-700 group-hover:scale-110">
                                        <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-zinc-800 group-hover:border-white/30 transition-colors">
                                            <Camera className="h-16 w-16 text-zinc-100/50 group-hover:text-zinc-100 transition-colors duration-500" />
                                        </div>
                                        <p className="text-zinc-400 font-medium tracking-widest uppercase text-sm">App Interface Preview</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white text-black transform skew-y-3 scale-110 origin-bottom-left -z-10" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-black">Ready to Protect Your Crops?</h2>
                        <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
                            Join thousands of farmers using CropGuard AI to ensure healthy harvests.
                        </p>
                        <Link to="/app">
                            <Button size="lg" className="h-16 px-12 text-xl bg-black text-zinc-100 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl">
                                Get Started Now
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black py-16 border-t border-zinc-800">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="p-1.5 bg-white rounded-full">
                                    <Leaf className="h-4 w-4 text-black" />
                                </div>
                                <span className="text-xl font-bold">CropGuard AI</span>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Empowering farmers with technology for a sustainable future.
                            </p>
                        </div>
                        {[
                            { title: "Product", links: ["Features", "Pricing", "API"] },
                            { title: "Company", links: ["About Us", "Blog", "Careers"] },
                            { title: "Legal", links: ["Privacy Policy", "Terms of Service"] }
                        ].map((col, index) => (
                            <div key={index}>
                                <h4 className="font-bold mb-6 text-zinc-100">{col.title}</h4>
                                <ul className="space-y-4 text-sm text-zinc-400">
                                    {col.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="hover:text-zinc-100 transition-colors flex items-center gap-2 group">
                                                <span className="w-0 group-hover:w-2 h-[1px] bg-white transition-all duration-300"></span>
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-zinc-800 pt-8 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} CropGuard AI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default Landing;
