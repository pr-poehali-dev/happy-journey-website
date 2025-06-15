import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const FeaturedContent = () => {
  const featuredItems = [
    {
      type: "Статья",
      title: "7 научных способов стать счастливее",
      description:
        "Исследования показывают, что счастье можно развивать как навык",
      image:
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      link: "/articles",
      icon: "FileText",
    },
    {
      type: "Видео",
      title: "Медитация для начинающих",
      description: "15-минутная практика для обретения внутреннего покоя",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      link: "/videos",
      icon: "Play",
    },
    {
      type: "Книга",
      title: "Психология счастья",
      description: "Бестселлер о науке позитивной психологии",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      link: "/bookstore",
      icon: "Book",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-4">
            Рекомендуемый контент
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Лучшие материалы для вашего пути к счастью
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Icon name={item.icon as any} size={14} />
                  <span>{item.type}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
