import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onPurchaseClick: () => void;
}

const HeroSection = ({ onPurchaseClick }: HeroSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-montserrat">
            kleyki.com
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Проходка на Minecraft сервер
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700">
          <div className="text-6xl mb-4">💎</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Получи доступ к серверу
          </h2>
          <div className="text-5xl font-bold text-emerald-400 mb-6">100₽</div>
          <p className="text-gray-400 mb-8">
            Мгновенная активация после оплаты
          </p>

          <Button
            onClick={onPurchaseClick}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Купить проходку
          </Button>
        </div>

        <p className="text-sm text-gray-500">
          Сервер: kleyki.com • Мгновенная активация
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
