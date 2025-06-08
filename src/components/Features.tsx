import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Palette",
      title: "Современный дизайн",
      description:
        "Красивые и функциональные интерфейсы, созданные с вниманием к деталям",
    },
    {
      icon: "Code",
      title: "Чистый код",
      description:
        "Высококачественный код с использованием лучших практик разработки",
    },
    {
      icon: "Smartphone",
      title: "Адаптивность",
      description: "Идеальная работа на всех устройствах и размерах экранов",
    },
    {
      icon: "Rocket",
      title: "Высокая производительность",
      description: "Оптимизированная работа и быстрая загрузка страниц",
    },
    {
      icon: "Users",
      title: "Удобство использования",
      description:
        "Интуитивно понятный интерфейс для лучшего пользовательского опыта",
    },
    {
      icon: "Settings",
      title: "Гибкость настроек",
      description: "Множество возможностей для кастомизации под ваши нужды",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Возможности
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
            Всё необходимое для создания современных веб-приложений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Icon
                  name={feature.icon as any}
                  className="text-white"
                  size={28}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-open-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
