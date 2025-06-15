import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Articles = () => {
  const articles = [
    {
      title: "Наука счастья: что говорят исследования",
      excerpt:
        "Современные научные исследования раскрывают секреты счастливой жизни",
      readTime: "5 мин",
      category: "Психология",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    },
    {
      title: "Благодарность как путь к счастью",
      excerpt: "Практические упражнения для развития чувства благодарности",
      readTime: "7 мин",
      category: "Практика",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    },
    {
      title: "Отношения и счастье: связь доказана",
      excerpt: "Почему качественные отношения — основа счастливой жизни",
      readTime: "6 мин",
      category: "Отношения",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop",
    },
    {
      title: "Mindfulness в повседневной жизни",
      excerpt:
        "Как практика осознанности помогает найти счастье здесь и сейчас",
      readTime: "8 мин",
      category: "Медитация",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-4">
            Статьи о счастье
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Практические советы и научные исследования для счастливой жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h2 className="font-montserrat font-bold text-xl text-gray-800 mb-3">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-4">{article.excerpt}</p>

                <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                  <span>Читать далее</span>
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
