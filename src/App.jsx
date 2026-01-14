import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen min-w-[320px] flex items-center justify-center bg-[#242424] text-white dark:text-white">
      <div className="max-w-5xl mx-auto p-8 text-center">
        <div className="flex justify-center">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              alt="Vite logo"
              className="h-24 p-6 transition hover:drop-shadow-[0_0_2em_#646cffaa]"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              alt="React logo"
              className="h-24 p-6 transition hover:drop-shadow-[0_0_2em_#61dafbaa]"
            />
          </a>
        </div>

        <h1 className="text-[3.2em] leading-tight font-bold">Vite + React</h1>

        <div className="p-8">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-[#1a1a1a] transition hover:border-[#646cff] focus:outline focus:outline-4 focus:outline-offset-2"
          >
            count is {count}
          </button>

          <p className="mt-4">
            Edit <code className="font-mono">src/App.jsx</code> and save to test
            HMR
          </p>
        </div>

        <p className="text-[#888]">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
