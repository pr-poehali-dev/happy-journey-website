import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-400 via-purple-500 to-blue-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6">
            Откройте для себя
            <span className="block text-yellow-300">Путь к Счастью</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Практические советы, вдохновляющие истории и научные исследования о
            том, как найти радость в каждом дне
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/articles"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-100 transition-all hover:scale-105 flex items-center space-x-2"
            >
              <Icon name="BookOpen" size={20} />
              <span>Читать статьи</span>
            </Link>

            <Link
              to="/videos"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all flex items-center space-x-2"
            >
              <Icon name="Play" size={20} />
              <span>Смотреть видео</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
