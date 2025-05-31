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
    { id: "sber", name: "Сбербанк", icon: "🟢" },
    { id: "tinkoff", name: "Тинькофф", icon: "🟡" },
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Способ оплаты</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Выберите способ оплаты" />
        </SelectTrigger>
        <SelectContent>
          {paymentMethods.map((method) => (
            <SelectItem key={method.id} value={method.id}>
              <div className="flex items-center space-x-2">
                <span>{method.icon}</span>
                <span>{method.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PaymentSelector;
