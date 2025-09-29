import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp, Users, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
    const { t } = useTranslation();
    const stats = [
        {
            icon: TrendingUp,
            label: t("stats.sold"),
            value: 7,
            suffix: "+",
            color: "text-emerald-500",
        },
        {
            icon: Star,
            label: t("stats.rating"),
            value: 5,
            decimals: 1,
            color: "text-amber-500",
        },
        {
            icon: Users,
            label: t("stats.reviews"),
            value: 1,
            suffix: "+",
            color: "text-blue-500",
        },
    ];

    return (
        <section className='py-24 bg-gradient-radial from-white/80 via-white/70 to-white/90 dark:from-primary/10 dark:via-primary/5 dark:to-black/95'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-6'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent'>
                            {t("stats.heading")}
                        </h2>
                        <p className='text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium max-w-2xl mx-auto'>
                            {t("stats.subheading")}
                        </p>
                    </div>

                    <div className='grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto'>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className='text-center bg-card rounded-3xl p-4 sm:p-6 md:p-8 shadow-card 
                                            hover:shadow-elegant transition-all duration-500 group'
                                style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className='inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-primary rounded-2xl mb-3 sm:mb-4 md:mb-6 lg:mb-7 xl:mb-8 group-hover:scale-110 transition-transform duration-300'>
                                    <stat.icon className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-primary-foreground' />
                                </div>

                                <div className='mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
                                    <AnimatedCounter
                                        end={stat.value}
                                        decimals={stat.decimals || 0}
                                        suffix={stat.suffix || ""}
                                        duration={2500}
                                    />
                                </div>

                                <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
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
