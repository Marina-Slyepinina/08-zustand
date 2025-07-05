"use client"

import NoteForm from "@/components/NoteForm/NoteForm";
import  css from "./page.module.css";
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

    return (
        <main className={css.main}>
            <div className={css.container}>
                <h1 className={css.title}>Create note</h1>
                <NoteForm onClose={handleClose}/>
            </div>
        </main>
    )
}

export default CreateNoteClient;
