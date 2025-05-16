import { useState, useCallback, useEffect , useRef } from 'react';

import './index.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
    if (numberAllowed) characters += '0123456789';
    if (charAllowed) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let pwd = '';
    for (let i = 0; i < length; i++) {
      const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
      pwd += randomChar;
    }

    setPassword(pwd);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length,numberAllowed,charAllowed]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5);    use to select range .....
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-950 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-xl p-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-400">🔐 Password Generator</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-grow px-3 py-2 rounded-l-lg text-green-400 outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 mb-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-sm">Password Length: <span className="font-bold">{length}</span></label>
            <input
              id="length"
              type="range"
              min="6"
              max="50"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-1/2"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="h-4 w-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm">Include Special Characters</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="h-4 w-4"
            />
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg mt-4 transition duration-300"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
