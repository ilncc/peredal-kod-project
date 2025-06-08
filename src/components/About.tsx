import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
              О проекте
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-open-sans">
              Мы создаем современные веб-решения, которые помогают бизнесу расти
              и развиваться. Наш подход сочетает в себе передовые технологии и
              внимание к пользовательскому опыту.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-open-sans">
              Каждый проект уникален, и мы стремимся найти идеальное решение для
              ваших задач.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                Связаться с нами
                <Icon name="Mail" className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3"
              >
                Портфолио
                <Icon name="ExternalLink" className="ml-2" size={18} />
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 font-montserrat">
                  100+
                </div>
                <div className="text-sm text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 font-montserrat">
                  5+
                </div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 font-montserrat">
                  50+
                </div>
                <div className="text-sm text-gray-600">Клиентов</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon
                    name="TrendingUp"
                    className="text-purple-600 mb-3"
                    size={32}
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Рост</h4>
                  <p className="text-sm text-gray-600">
                    Постоянное развитие и улучшение
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon
                    name="Award"
                    className="text-purple-600 mb-3"
                    size={32}
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Качество</h4>
                  <p className="text-sm text-gray-600">
                    Высокие стандарты в каждом проекте
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon
                    name="Users"
                    className="text-purple-600 mb-3"
                    size={32}
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Команда</h4>
                  <p className="text-sm text-gray-600">
                    Профессиональные специалисты
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon
                    name="Clock"
                    className="text-purple-600 mb-3"
                    size={32}
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Сроки</h4>
                  <p className="text-sm text-gray-600">
                    Всегда в срок и в рамках бюджета
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
