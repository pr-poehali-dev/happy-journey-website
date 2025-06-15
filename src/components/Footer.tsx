import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Контент",
      links: [
        { label: "Статьи", path: "/articles" },
        { label: "Видео", path: "/videos" },
        { label: "Афоризмы", path: "/quotes" },
        { label: "Книги", path: "/bookstore" },
      ],
    },
    {
      title: "Темы",
      links: [
        { label: "Психология счастья", path: "/articles" },
        { label: "Отношения", path: "/articles" },
        { label: "Медитация", path: "/videos" },
        { label: "Саморазвитие", path: "/bookstore" },
      ],
    },
    {
      title: "Поддержка",
      links: [
        { label: "Часто задаваемые вопросы", path: "/" },
        { label: "Обратная связь", path: "/" },
        { label: "Политика конфиденциальности", path: "/" },
        { label: "Условия использования", path: "/" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" },
    { name: "Telegram", icon: "Send", url: "#" },
    { name: "VK", icon: "Users", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Логотип и описание */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">😊</div>
              <span className="font-montserrat font-bold text-xl text-white">
                Путь к Счастью
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Ваш гид по психологии счастья и позитивной жизни. Практические
              советы для каждого дня.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Колонки ссылок */}
          {footerSections.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="font-montserrat font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Путь к Счастью. Все права защищены.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/" className="hover:text-purple-400 transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
