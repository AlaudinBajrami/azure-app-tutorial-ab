import React, {useEffect, useState} from 'react';

import {BackendConnection} from "../services/BackendConnection";
// @ts-ignore

function App() {

  // Lazy initialize backend connection
  const [backendConnection] = useState(() => new BackendConnection());

  // component state
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    backendConnection.livelinessProbe().then((sessionId: React.SetStateAction<string>) => setSessionId(sessionId))
  }, [backendConnection])

  return (
      <div className="App">
        <p>
          {`Http session id from backend ${sessionId}`}
        </p>
      </div>
  );
}

export default App;
