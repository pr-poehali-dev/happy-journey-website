import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Quotes = () => {
  const quotes = [
    {
      text: "Счастье не в том, чтобы делать всегда то, что хочешь, а в том, чтобы всегда хотеть то, что делаешь.",
      author: "Толстой Л.Н.",
    },
    {
      text: "Радость — это не то, что с нами происходит. Это то, что мы делаем с тем, что с нами происходит.",
      author: "Джим Рон",
    },
    {
      text: "Счастье приходит не к тем, кто его ждет, а к тем, кто живет полной жизнью.",
      author: "Ральф Эмерсон",
    },
    {
      text: "Самый счастливый человек тот, кто дарит счастье наибольшему числу людей.",
      author: "Дени Дидро",
    },
    {
      text: "Счастье — это когда твои мысли, слова и дела находятся в гармонии.",
      author: "Махатма Ганди",
    },
    {
      text: "Не ждите особенного момента — сделайте каждый момент особенным.",
      author: "Неизвестный автор",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-4">
            Афоризмы о счастье
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мудрые слова великих людей о поиске счастья и смысла жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 left-4 text-purple-200">
                <Icon name="Quote" size={32} />
              </div>

              <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed pt-8">
                "{quote.text}"
              </blockquote>

              <div className="flex items-center justify-end">
                <div className="text-right">
                  <div className="font-montserrat font-semibold text-purple-600">
                    — {quote.author}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center space-x-2">
            <Icon name="RefreshCw" size={20} />
            <span>Показать еще</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
