// store/modal.ts
import { create } from "zustand";

interface ModalState {
  menuOpen: boolean;
  cartOpen: boolean;
  searchOpen: boolean;
  filterOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  openFilter: () => void;
  closeFilter: () => void;
}

const useModal = create<ModalState>((set) => ({
  menuOpen: false,
  cartOpen: false,
  searchOpen: false,
  filterOpen: false,
  openMenu: () => set({ menuOpen: true }),
  closeMenu: () => set({ menuOpen: false }),
  openCart: () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),
  openSearch: () => set({ searchOpen: true }),
  closeSearch: () => set({ searchOpen: false }),
  openFilter: () => set({ filterOpen: true }),
  closeFilter: () => set({ filterOpen: false }),
}));

export default useModal;
