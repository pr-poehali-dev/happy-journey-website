import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/articles", label: "Статьи", icon: "FileText" },
    { path: "/videos", label: "Видео", icon: "Play" },
    { path: "/quotes", label: "Афоризмы", icon: "Quote" },
    { path: "/bookstore", label: "Книги", icon: "Book" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl">😊</div>
            <span className="font-montserrat font-bold text-xl text-gray-800">
              Путь к Счастью
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-purple-600 p-2">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
