// store/modal.ts
import { create } from 'zustand'

interface ModalState {
  menuOpen: boolean
  cartOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  openCart: () => void
  closeCart: () => void
}

const useModal = create<ModalState>((set) => ({
  menuOpen: false,
  cartOpen: false,
  openMenu: () => set({ menuOpen: true }),
  closeMenu: () => set({ menuOpen: false }),
  openCart: () => set({ cartOpen: true }),
  closeCart: () => set({ cartOpen: false }),
}))

export default useModal
