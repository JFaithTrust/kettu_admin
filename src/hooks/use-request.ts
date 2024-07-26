import {create} from 'zustand'

type CreateRequestStore = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useCreateRequest = create<CreateRequestStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))