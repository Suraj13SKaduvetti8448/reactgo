// src/components/FileDelete.js
import React, { useState } from 'react';

const FileDelete = () => {
  const [filename, setFilename] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!filename) {
      return alert("Please provide a filename");
    }

    try {
      const res = await fetch(`http://localhost:5000/api/delete-file/${filename}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("File deleted successfully.");
      } else {
        setMessage("Delete failed.");
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error deleting file.");
    }
  };

  return (
    <div>
      <h2>Delete File</h2>
      <input
        type="text"
        placeholder="Filename to delete (with extension)"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      <p>{message}</p>
    </div>
  );
};

export default FileDelete;
