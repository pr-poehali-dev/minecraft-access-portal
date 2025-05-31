import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onPurchaseClick: () => void;
}

const HeroSection = ({ onPurchaseClick }: HeroSectionProps) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            kleyki.com
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Проходка на Minecraft сервер
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            Получить доступ
          </h2>
          <div className="text-3xl font-light text-gray-900 mb-8">100₽</div>

          <Button
            onClick={onPurchaseClick}
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg text-base transition-colors"
            size="lg"
          >
            Купить
          </Button>
        </div>

        <p className="text-sm text-gray-400">
          kleyki.com • Мгновенная активация
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
