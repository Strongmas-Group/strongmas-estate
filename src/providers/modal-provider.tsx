"use client";

import { useEffect, useState } from "react";
import BookInspectionModal from "@/components/custom/book-inspection-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <BookInspectionModal />
    </>
  );
};
