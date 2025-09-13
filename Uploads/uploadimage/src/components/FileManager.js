// src/components/FileManager.js
import React, { useEffect, useState } from 'react';

const FileManager = () => {
  const [files, setFiles] = useState([]);
  const [renameMap, setRenameMap] = useState({});
  const [message, setMessage] = useState("");

  const fetchFiles = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/list-files");
      const data = await res.json();
      setFiles(data.files || []);
    } catch (error) {
      console.error("Error fetching files", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleRenameChange = (filename, newName) => {
    setRenameMap((prev) => ({ ...prev, [filename]: newName }));
  };

  const renameFile = async (oldName) => {
    const newName = renameMap[oldName];
    if (!newName || newName === oldName) {
      return alert("Invalid new name");
    }

    try {
      const res = await fetch(`http://localhost:5000/api/update-file/${oldName}/${newName}`, {
        method: "PUT",
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`Renamed ${oldName} to ${newName}`);
        fetchFiles();
      } else {
        setMessage(`Failed to rename ${oldName}`);
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error renaming file");
    }
  };

  const deleteFile = async (filename) => {
    if (!window.confirm(`Are you sure you want to delete "${filename}"?`)) return;

    try {
      const res = await fetch(`http://localhost:5000/api/delete-file/${filename}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`Deleted ${filename}`);
        fetchFiles();
      } else {
        setMessage(`Failed to delete ${filename}`);
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error deleting file");
    }
  };

  return (
    <div>
      <h2>Uploaded Files</h2>
      {files.length === 0 ? (
        <p>No files uploaded yet.</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file} style={{ marginBottom: '10px' }}>
              <strong>{file}</strong>
              <input
                type="text"
                placeholder="New name"
                value={renameMap[file] || ''}
                onChange={(e) => handleRenameChange(file, e.target.value)}
                style={{ marginLeft: '10px' }}
              />
              <button onClick={() => renameFile(file)} style={{ marginLeft: '5px' }}>
                Rename
              </button>
              <button onClick={() => deleteFile(file)} style={{ marginLeft: '5px', color: 'red' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>{message}</p>
    </div>
  );
};

export default FileManager;
