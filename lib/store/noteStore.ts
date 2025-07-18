import { NewNote } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type NoteDraftStore = {
    draft: NewNote;
    setDraft: (note: NewNote) => void;
    clearDraft: () => void;
  };

const initialDraft: NewNote = {
    title: '',
    content: '',
    tag: 'Todo',
};

export const useNoteDraft = create<NoteDraftStore>()(
    persist(
        (set) => {
            return {
                draft: initialDraft,
                setDraft: (note) => set(() => ({ draft: note })),
                clearDraft: () => set(() => ({ draft: initialDraft })),
            }
        },
        {
            name: "note-draft",
            partialize: (state) => ({ draft: state.draft }),
        }
    )
)
