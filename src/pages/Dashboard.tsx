import { Leaf, AlertTriangle, Cloud, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PestDetection } from "@/components/PestDetection";
import { WeatherMonitoring } from "@/components/WeatherMonitoring";
import { Chatbot } from "@/components/Chatbot";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black">
            {/* Header */}
            <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="p-2 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                                <Leaf className="h-5 w-5 text-black" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-tighter group-hover:tracking-widest transition-all duration-300">{t.appName}</h1>
                                <p className="text-xs text-zinc-400">{t.appTagline}</p>
                            </div>
                        </Link>
                        <LanguageSelector />
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-6xl space-y-12">
                {/* Hero Section */}
                <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        {t.heroTitle}
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        {t.heroSubtitle}
                    </p>
                </div>

                {/* Weather Alert Section */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                    <WeatherMonitoring />
                </div>

                {/* Pest Detection Section */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <PestDetection />
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Card className="bg-zinc-950 border-zinc-800 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2 text-zinc-100">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                    <Cloud className="h-5 w-5" />
                                </div>
                                {t.weatherMonitoring}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-400 group-hover:text-gray-300 transition-colors">
                                {t.weatherMonitoringDesc}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-950 border-zinc-800 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2 text-zinc-100">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                    <Camera className="h-5 w-5" />
                                </div>
                                {t.aiDetection}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-400 group-hover:text-gray-300 transition-colors">
                                {t.aiDetectionDesc}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-950 border-zinc-800 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2 text-zinc-100">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                    <AlertTriangle className="h-5 w-5" />
                                </div>
                                {t.smartAlerts}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-zinc-400 group-hover:text-gray-300 transition-colors">
                                {t.smartAlertsDesc}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </main>

            {/* Chatbot */}
            <Chatbot />
        </div>
    );
};

export default Dashboard;
