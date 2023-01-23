import React from 'react'
import { useState } from 'react'
import '../css/App.styl'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>DS React-Express Template</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <div className="card">
                <p>Start by editing app name in <code>package.json</code> and <code>index.html</code></p>
                <p>Edit code in <code>src</code> directory</p>
                <p>Run <code>yarn watch</code> to build automatically</p>
                <p>Start server with <code>yarn run</code></p>
            </div>
            <p className="read-the-docs">
                © Gerard Gajda 2023
            </p>
        </div>
    )
}

export default App
