import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PaymentSelector from "./PaymentSelector";
import PaymentStep from "./PaymentStep";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal = ({ isOpen, onClose }: PurchaseModalProps) => {
  const [nickname, setNickname] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [currentStep, setCurrentStep] = useState<"form" | "payment">("form");
  const [isLoading, setIsLoading] = useState(false);

  const getBankName = (id: string) => {
    const banks: Record<string, string> = {
      sber: "Сбербанк",
      tinkoff: "Тинькофф",
      vtb: "ВТБ",
      alfa: "Альфа-Банк",
      raiffeisen: "Райффайзенбанк",
      gazprom: "Газпромбанк",
      rosbank: "Росбанк",
      otkritie: "Открытие",
    };
    return banks[id] || "";
  };

  const handleNext = () => {
    if (!nickname.trim() || !paymentMethod) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    setCurrentStep("payment");
  };

  const handlePaymentComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert(
        `Спасибо! Доступ для ${nickname} будет активирован в течение 5 минут.`,
      );
      setIsLoading(false);
      onClose();
      setNickname("");
      setPaymentMethod("");
      setCurrentStep("form");
    }, 1000);
  };

  const handleBack = () => {
    setCurrentStep("form");
  };

  const handleClose = () => {
    onClose();
    setCurrentStep("form");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">
            {currentStep === "form" ? "Покупка проходки" : "Оплата"}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {currentStep === "form" ? (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-2xl font-medium text-gray-900 mb-1">100₽</p>
                <p className="text-sm text-gray-600">Проходка на kleyki.com</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">
                    Никнейм в Minecraft
                  </label>
                  <Input
                    type="text"
                    placeholder="Введите ваш никнейм"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full h-12 border-gray-200"
                  />
                </div>

                <PaymentSelector
                  value={paymentMethod}
                  onChange={setPaymentMethod}
                />
              </div>

              <Button
                onClick={handleNext}
                disabled={!nickname.trim() || !paymentMethod}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3"
              >
                Продолжить
              </Button>
            </div>
          ) : (
            <PaymentStep
              bankName={getBankName(paymentMethod)}
              onBack={handleBack}
              onComplete={handlePaymentComplete}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
