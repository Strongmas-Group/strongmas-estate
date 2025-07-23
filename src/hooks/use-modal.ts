
import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = create<ModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

// We will also create a provider for our context to be used in layout
import React, { createContext, useContext, useState } from 'react';

interface IModalContext {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
            {children}
        </ModalContext.Provider>
    )
}
