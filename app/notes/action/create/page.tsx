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
