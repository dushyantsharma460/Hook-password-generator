```markdown
# 🔐 React Password Generator

A sleek and customizable password generator built with React and Tailwind CSS.

## ✨ Features
- Password length slider (6–50 characters)
- Toggle to include numbers
- Toggle to include special characters
- Auto-generates password on change
- One-click copy to clipboard

## 🛠️ Setup
```bash
npm install
npm start
```

## 🧠 Core Logic
- `useState` manages the password length and character settings.
- `useCallback` optimizes `generatePassword` and `copyToClipboard` to avoid unnecessary re-renders. 
- `useEffect` auto-generates a new password when settings change.
- `useRef` targets the input for clipboard copying.

## 📋 Copy to Clipboard Logic
```js
const passwordRef = useRef(null);
const copyToClipboard = useCallback(() => {
  passwordRef.current?.select();
  navigator.clipboard.writeText(password);
});
```

## 🧪 Technologies
- React (with Hooks)
- Tailwind CSS
- Clipboard API

---
MIT License
```
