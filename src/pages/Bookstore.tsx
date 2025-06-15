import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Bookstore = () => {
  const books = [
    {
      title: "Поток. Психология оптимального переживания",
      author: "Михай Чиксентмихайи",
      price: "₽890",
      rating: 4.8,
      reviews: 1247,
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      type: "Электронная",
    },
    {
      title: "По ту сторону принципа удовольствия",
      author: "Зигмунд Фрейд",
      price: "₽650",
      rating: 4.5,
      reviews: 892,
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
      type: "Бумажная",
    },
    {
      title: "Счастье. Уроки новой науки",
      author: "Ричард Лэйард",
      price: "₽750",
      rating: 4.7,
      reviews: 634,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      type: "Электронная",
    },
    {
      title: "Искусство быть счастливым",
      author: "Артур Шопенгауэр",
      price: "₽580",
      rating: 4.6,
      reviews: 456,
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      type: "Бумажная",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-4">
            Книжный магазин
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Лучшие книги о счастье, отношениях и личностном росте
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium">
            Все книги
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-purple-100">
            Психология
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-purple-100">
            Отношения
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-purple-100">
            Саморазвитие
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {book.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-montserrat font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                  {book.title}
                </h3>

                <p className="text-gray-600 mb-3">{book.author}</p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={
                          i < Math.floor(book.rating) ? "fill-current" : ""
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {book.rating} ({book.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-600">
                    {book.price}
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center space-x-1">
                    <Icon name="ShoppingCart" size={16} />
                    <span>Купить</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookstore;
