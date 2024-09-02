import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";

function NoteDetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { data } = await getNote(id);
      console.log(data);
      if (data) {
        setNote(data);
      }
    }
    fetchData();
  }, [id]);

  return (
    <section>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>{note.title}</h2>
          </div>
          <div className="card-body">
            <p className="note-item__date">{note.createdAt}</p>
            <p className="note-item__body">{note.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoteDetailPage;
