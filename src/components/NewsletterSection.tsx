import { useState } from "react";
import Icon from "@/components/ui/icon";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="text-6xl mb-6">💌</div>
          <h2 className="font-montserrat font-bold text-4xl text-white mb-4">
            Получайте лучшие материалы на почту
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Еженедельная рассылка с новыми статьями, видео и практическими
            советами для счастливой жизни
          </p>

          {isSubscribed ? (
            <div className="bg-green-500 text-white px-8 py-4 rounded-full inline-flex items-center space-x-2 animate-scale-in">
              <Icon name="CheckCircle" size={24} />
              <span className="font-semibold">Спасибо за подписку! 🎉</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Icon name="Send" size={20} />
                <span>Подписаться</span>
              </button>
            </form>
          )}

          <p className="text-purple-200 text-sm mt-4">
            Никакого спама. Отписаться можно в любой момент.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
