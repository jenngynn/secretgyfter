import { useState } from 'react'

export default function Allocator() {
  const [name, setName] = useState('')
  const [assignedFruit, setAssignedFruit] = useState<string | null>(null)

  const fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange', '🍇 Grapes', '🍓 Strawberry', '🍉 Watermelon', '🍑 Peach', '🍍 Pineapple', '🥝 Kiwi', '🥭 Mango']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      const randomIndex = Math.floor(Math.random() * fruits.length)
      setAssignedFruit(fruits[randomIndex])
    }
  }

  const handleReset = () => {
    setName('')
    setAssignedFruit(null)
  }

  return (
    <div className="app-container">
      <h1>🎁 Secret Gyfter - Fruit Edition 🍎</h1>
      <p className="subtitle">Enter your name to get randomly assigned a fruit!</p>
      
      {!assignedFruit ? (
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="name-input"
            required
          />
          <button type="submit" className="submit-button">
            Get My Fruit!
          </button>
        </form>
      ) : (
        <div className="result-container">
          <h2>Hello, {name}! 👋</h2>
          <div className="fruit-result">
            <p>Your fruit is:</p>
            <h1 className="fruit-display">{assignedFruit}</h1>
          </div>
          <button onClick={handleReset} className="reset-button">
            Try Again
          </button>
        </div>
      )}
    </div>
  )
}
