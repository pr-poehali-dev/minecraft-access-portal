import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const PaymentSelector = ({ value, onChange }: PaymentSelectorProps) => {
  const paymentMethods = [
    { id: "sber", name: "Сбербанк", icon: "" },
    { id: "tinkoff", name: "Тинькофф", icon: "" },
    { id: "vtb", name: "ВТБ", icon: "" },
    { id: "alfa", name: "Альфа-Банк", icon: "" },
    { id: "raiffeisen", name: "Райффайзенбанк", icon: "" },
    { id: "gazprom", name: "Газпромбанк", icon: "" },
    { id: "rosbank", name: "Росбанк", icon: "" },
    { id: "otkritie", name: "Открытие", icon: "" },
  ];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-900">
        Банк для перевода
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full h-12 border-gray-200">
          <SelectValue placeholder="Выберите банк" />
        </SelectTrigger>
        <SelectContent>
          {paymentMethods.map((method) => (
            <SelectItem key={method.id} value={method.id}>
              <span className="font-medium">{method.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PaymentSelector;
