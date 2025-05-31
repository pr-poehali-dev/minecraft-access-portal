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

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal = ({ isOpen, onClose }: PurchaseModalProps) => {
  const [nickname, setNickname] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    if (!nickname.trim() || !paymentMethod) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    setIsLoading(true);

    // Имитация перехода к оплате
    setTimeout(() => {
      alert(
        `Переход к оплате через ${paymentMethod === "sber" ? "Сбербанк" : "Тинькофф"} для игрока ${nickname}`,
      );
      setIsLoading(false);
      onClose();
      setNickname("");
      setPaymentMethod("");
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Покупка проходки
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="text-center">
            <div className="text-3xl mb-2">💎</div>
            <p className="text-2xl font-bold text-emerald-600">100₽</p>
            <p className="text-sm text-gray-500">Проходка на kleyki.com</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Никнейм в Minecraft
              </label>
              <Input
                type="text"
                placeholder="Введите ваш никнейм"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full"
              />
            </div>

            <PaymentSelector
              value={paymentMethod}
              onChange={setPaymentMethod}
            />
          </div>

          <Button
            onClick={handlePurchase}
            disabled={isLoading || !nickname.trim() || !paymentMethod}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3"
          >
            {isLoading ? "Обработка..." : "Перейти к оплате"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            После оплаты проходка будет активирована автоматически
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
