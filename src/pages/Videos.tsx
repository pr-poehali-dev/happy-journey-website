import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Videos = () => {
  const videos = [
    {
      title: "Утренняя медитация для счастья",
      duration: "15:30",
      views: "12K",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    },
    {
      title: "Как найти свое предназначение",
      duration: "22:15",
      views: "8.5K",
      thumbnail:
        "https://images.unsplash.com/photo-1494178270175-e96de2971df9?w=400&h=250&fit=crop",
    },
    {
      title: "Техники управления стрессом",
      duration: "18:42",
      views: "15K",
      thumbnail:
        "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=250&fit=crop",
    },
    {
      title: "Позитивное мышление: миф или реальность?",
      duration: "25:10",
      views: "20K",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-4">
            Видео о счастье
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Практические видео-уроки и медитации для развития счастья
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-white bg-opacity-90 p-4 rounded-full">
                    <Icon name="Play" size={32} className="text-purple-600" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-3">
                  {video.title}
                </h3>

                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center">
                    <Icon name="Eye" size={14} className="mr-1" />
                    {video.views} просмотров
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {video.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
