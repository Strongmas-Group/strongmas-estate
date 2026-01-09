"use client";

import * as React from "react";
import { useModal } from "@/hooks/use-modal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const BookInspectionModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "bookInspection";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 max-w-2xl w-full h-[95vh] overflow-hidden">
        <DialogTitle className="sr-only">Book a Tour</DialogTitle>
        <iframe
          src="https://forms.zohopublic.com/strongmas1/form/BookATour/formperma/MMee_AahBlWQ_1veM5wwNc5TrcIkVWXWncFb2ULX8FE?zf_rszfm=1"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Book a Tour"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default BookInspectionModal;
