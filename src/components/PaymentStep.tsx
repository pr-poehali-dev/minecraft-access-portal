import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PaymentStepProps {
  bankName: string;
  onBack: () => void;
  onComplete: () => void;
}

const PaymentStep = ({ bankName, onBack, onComplete }: PaymentStepProps) => {
  const cardNumber = "2200701916615468";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h3 className="text-lg font-medium">Перевод через {bankName}</h3>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="text-center mb-6">
          <div className="text-2xl font-medium text-gray-900 mb-2">100₽</div>
          <p className="text-sm text-gray-600">Проходка kleyki.com</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Номер карты для перевода
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-white border border-gray-200 rounded-lg p-3 font-mono text-sm">
                {cardNumber}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(cardNumber)}
                className="p-2"
              >
                <Icon name="Copy" size={16} />
              </Button>
            </div>
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            <p>• Переведите точную сумму 100₽</p>
            <p>• Доступ активируется автоматически</p>
            <p>• Время зачисления: до 5 минут</p>
          </div>
        </div>
      </div>

      <Button
        onClick={onComplete}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3"
      >
        Я перевел деньги
      </Button>
    </div>
  );
};

export default PaymentStep;
