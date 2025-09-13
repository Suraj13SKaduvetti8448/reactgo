// src/components/FileRename.js
import React, { useState } from 'react';

const FileRename = () => {
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");

  const handleRename = async () => {
    if (!oldName || !newName) {
      return alert("Both filenames are required");
    }

    try {
      const res = await fetch(`http://localhost:5000/api/update-file/${oldName}/${newName}`, {
        method: "PUT",
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("File renamed successfully.");
      } else {
        setMessage("Rename failed.");
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error renaming file.");
    }
  };

  return (
    <div>
      <h2>Rename File</h2>
      <input
        type="text"
        placeholder="Old filename (with extension)"
        value={oldName}
        onChange={(e) => setOldName(e.target.value)}
      />
      <input
        type="text"
        placeholder="New filename (with extension)"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleRename}>Rename</button>
      <p>{message}</p>
    </div>
  );
};

export default FileRename;
