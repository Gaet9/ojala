import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp, Users, Star } from "lucide-react";

const StatsSection = () => {
    const stats = [
        {
            icon: TrendingUp,
            label: "Exemplaires vendus",
            value: 7,
            suffix: "+",
            color: "text-emerald-500",
        },
        {
            icon: Star,
            label: "Note moyenne",
            value: 5,
            decimals: 1,
            suffix: "/5",
            color: "text-amber-500",
        },
        {
            icon: Users,
            label: "Avis",
            value: 1,
            suffix: "+",
            color: "text-blue-500",
        },
    ];

    return (
        <section className='py-24'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-6'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent'>
                            Approuvé par les lecteurs
                        </h2>
                        <p className='text-xl text-muted-foreground font-medium max-w-2xl mx-auto'>
                            Rejoignez les lecteurs passionés de voyage et d'aventure.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className='text-center bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 group'
                                style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                                    <stat.icon className='w-8 h-8 text-primary-foreground' />
                                </div>

                                <div className='mb-4'>
                                    <AnimatedCounter
                                        end={stat.value}
                                        decimals={stat.decimals || 0}
                                        suffix={stat.suffix || ""}
                                        duration={2500}
                                    />
                                </div>

                                <p className='text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* <div className='text-center mt-16'>
                        <div className='inline-flex items-center gap-4 bg-accent/50 rounded-full px-6 py-3 backdrop-blur-sm'>
                            <div className='flex -space-x-2'>
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className='w-8 h-8 bg-gradient-primary rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground'>
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                ))}
                            </div>
                            <span className='text-sm font-medium text-muted-foreground'>Real readers, real impact</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
