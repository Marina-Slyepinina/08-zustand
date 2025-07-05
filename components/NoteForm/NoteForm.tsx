'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "@/lib/api";
import type { NewNote, Tag} from "../../types/note";
import css from "./NoteForm.module.css";


interface NoteFormProps{
    onClose: () => void
}

export default function NoteForm({ onClose }: NoteFormProps) {
    const queryClient = useQueryClient();

    const createNoteMutation = useMutation({
        mutationFn: (noteData: NewNote) => createNote(noteData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notes'] });
            onClose();
        }
    })


    const handleSubmit = (formData: FormData) => {
        const res = Object.fromEntries(formData);
        const newNote: NewNote = {
            title: String(res.title ?? '').trim(),
            content: String(res.content ?? '').trim(),
            tag: res.tag as Tag,
        };

        // const newNote = {
        //     title: formData.get("title") as string,
        //     content: formData.get("content") as string,
        //     tag: formData.get("tag") as Tag,
        // }

        createNoteMutation.mutate(newNote);
    }

    

return <form className={css.form} action={handleSubmit}>
        <div className={css.formGroup}>
            <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" className={css.input} minLength={3} maxLength={50} required 
        />
        </div>
    
        <div className={css.formGroup}>
            <label htmlFor="content">Content</label>
            <textarea
                id="content"
                name="content"
                rows={8}
                className={css.textarea}
                maxLength={500}
            />
        </div>
    
        <div className={css.formGroup}>
            <label htmlFor="tag">Tag</label>
            <select id="tag" name="tag" className={css.select}
                required>
                <option value="Todo">Todo</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
            </select>
        </div>
    
        <div className={css.actions}>
        <button type="button" className={css.cancelButton} onClick={onClose}>
            Cancel
        </button>
        <button
            type="submit"
            className={css.submitButton}
            disabled={createNoteMutation.isPending}
        >
            Create note
        </button>
        </div>
    </form>
}