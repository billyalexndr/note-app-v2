import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/api";
import { showFormattedDate } from "../utils/index";
import NotFoundPage from "./NotFoundPage";
import Loading from "../components/Loading";

const DetailPage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const fetchedNote = await getNote(id);
                setNote(fetchedNote);
                setLoading(false); 
            } catch (error) {
                setLoading(false); 
            }
        };

        fetchNote();
    }, [id]);
    
    if (loading) {
        return <Loading />; 
    }

    if (!note) {
        return <NotFoundPage />;
    }

    return (
        <div className="note-app">
            <div className="note-app__body">
                <>
                    <h2>{note.data.title}</h2>
                    <p>{showFormattedDate(note.data.createdAt)}</p>
                    <p>{note.data.body}</p>
                </>
            </div>
        </div>
    );
};

export default DetailPage;
