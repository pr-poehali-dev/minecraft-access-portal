import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import PurchaseModal from "@/components/PurchaseModal";

const Index = () => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handlePurchaseClick = () => {
    setIsPurchaseModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPurchaseModalOpen(false);
  };

  return (
    <>
      <HeroSection onPurchaseClick={handlePurchaseClick} />
      <PurchaseModal isOpen={isPurchaseModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Index;
