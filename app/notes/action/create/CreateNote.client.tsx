"use client"

import NoteForm from "@/components/NoteForm/NoteForm";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Note",
  description:
    "",
  openGraph: {
    title: "Create New Note",
    description:
      "",
    url: "",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Create New Note",
      },
    ],
  },
};

const CreateNoteClient = () => {

    const router = useRouter();
    const handleClose = () => {
        router.back();
    }

    return <NoteForm onClose={handleClose} />;
}

export default CreateNoteClient;
