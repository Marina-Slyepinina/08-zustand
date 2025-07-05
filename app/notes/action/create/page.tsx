import CreateNoteClient from "./CreateNote.client";
import  css from "./page.module.css";


const CreateNote = () => {
    return (
        <main className={css.main}>
            <div className={css.container}>
                <h1 className={css.title}>Create note</h1>
                <CreateNoteClient />
            </div>
        </main>
    )
}

export default CreateNote;




// Для файлу сторінки app\\notes\\action\\create\\page.tsx реалізуйте експорт об’єкта metadata з полями title, description та url. Значення цих полів мають містити назву і короткий опис сторінки для створення нової нотатки. Додайте також Open Graph мета-теги title, description, url та imagesз відповідними значеннями.

// "use client"

// import NoteForm from "@/components/NoteForm/NoteForm";
// import  css from "./page.module.css";
// import { useRouter } from "next/navigation";

// const CreateNote = () => {

//     const router = useRouter();
//     const handleClose = () => {
//         router.back();
//     }

//     return (
//         <main className={css.main}>
//             <div className={css.container}>
//                 <h1 className={css.title}>Create note</h1>
//                 <NoteForm onClose={handleClose}/>
//             </div>
//         </main>
//     )
// }

// export default CreateNote;
