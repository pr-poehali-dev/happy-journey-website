import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Психолог",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b6cb4c5c?w=100&h=100&fit=crop&crop=face",
      text: "Этот блог изменил мое отношение к жизни. Практические советы действительно работают!",
      rating: 5,
    },
    {
      name: "Михаил Козлов",
      role: "Предприниматель",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Благодаря статьям о mindfulness научился находить баланс между работой и личной жизнью.",
      rating: 5,
    },
    {
      name: "Елена Сидорова",
      role: "Мама двоих детей",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Видео-медитации помогают мне каждое утро настраиваться на позитивный лад. Спасибо!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-4">
            Что говорят наши читатели
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Истории людей, которые изменили свою жизнь к лучшему
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={18}
                    className="text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
