import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "Users",
      number: "10,000+",
      label: "Счастливых читателей",
    },
    {
      icon: "FileText",
      number: "150+",
      label: "Полезных статей",
    },
    {
      icon: "Play",
      number: "50+",
      label: "Видео-уроков",
    },
    {
      icon: "Book",
      number: "200+",
      label: "Рекомендованных книг",
    },
  ];

  return (
    <section className="py-16 bg-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-full">
                  <Icon name={stat.icon as any} size={32} />
                </div>
              </div>
              <div className="font-montserrat font-bold text-3xl mb-2">
                {stat.number}
              </div>
              <div className="text-purple-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
