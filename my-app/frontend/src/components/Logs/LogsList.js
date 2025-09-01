import React from 'react';

function LogsList({ logs }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Request Logs</h2>
      {logs.length === 0 ? (
        <p>No logs available.</p>
      ) : (
        <ul style={{ maxHeight: '300px', overflowY: 'auto', paddingLeft: '20px' }}>
          {logs.map((log, idx) => (
            <li key={idx} style={{ marginBottom: '10px', fontFamily: 'monospace' }}>
              <div><strong>Method:</strong> {log.method}</div>
              <div><strong>URL:</strong> {log.url}</div>
              <div><strong>Timestamp:</strong> {log.timestamp}</div>
              {log.body && (
                <div>
                  <strong>Body:</strong> <pre>{JSON.stringify(log.body, null, 2)}</pre>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LogsList;
