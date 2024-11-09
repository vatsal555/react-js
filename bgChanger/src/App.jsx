import { useState } from "react"


function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 px-3 py-2 justify-center shadow-lg bg-white rounded-3xl">
          <button onClick={() => setColor('red')} className="outline-none px-3 py-1 rounded-full text-white shadow-xl" style={{backgroundColor : 'red'}}>Red</button>
          <button onClick={() => setColor('green')} className="outline-none px-3 py-1 rounded-full text-white shadow-xl" style={{backgroundColor : 'green'}}>Green</button>
          <button onClick={() => setColor('blue')} className="outline-none px-3 py-1 rounded-full text-white shadow-xl" style={{backgroundColor : 'blue'}}>Blue</button>
          <button onClick={() => setColor('olive')} className="outline-none px-3 py-1 rounded-full text-white shadow-xl" style={{backgroundColor : 'olive'}}>Olive</button>
          <button onClick={() => setColor('grey')} className="outline-none px-3 py-1 rounded-full text-white shadow-xl" style={{backgroundColor : 'grey'}}>Gray</button>
          </div>
      </div>
    </div>
  )
}

export default App
