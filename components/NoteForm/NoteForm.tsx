'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "@/lib/api";
import type { NewNote } from "../../types/note";
import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from "./NoteForm.module.css";

interface NoteFormProps{
    onClose: () => void
}
  
const initialValues: NewNote = {
    title: "",
    content: "",
    tag: "Todo",
};

const NoteFormSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, "Title must be at least 3 characters")
        .max(50, "Title is too long")
        .required("Title is required"),
    content: Yup.string()
        .max(500, "Content is too long"),
    tag: Yup.string().oneOf(["Todo", "Work", "Personal", "Meeting", "Shopping"])
        .required("Tag is required")
  });

export default function NoteForm({ onClose }: NoteFormProps) {
    const queryClient = useQueryClient();

    const createNoteMutation = useMutation({
        mutationFn: (noteData: NewNote) => createNote(noteData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notes'] });
            onClose();
        }
    })

    const handleSubmit = (values: NewNote, actions: FormikHelpers<NewNote>) => {
        createNoteMutation.mutate(values);
        actions.resetForm();
    };

return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={NoteFormSchema}> 
    <Form className={css.form}>
        <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <Field id="title" type="text" name="title" className={css.input} />
        <ErrorMessage name="title" component="span" className={css.error} />
        </div>
    
        <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <Field as="textarea"
            id="content"
            name="content"
            rows="8"
            className={css.textarea}
        />
        <ErrorMessage name="content" component="span" className={css.error} />
        </div>
    
        <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <Field as="select" id="tag" name="tag" className={css.select}>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
        </Field>
        <ErrorMessage name="tag" component="span" className={css.error} />
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
    </Form>
</Formik>
}