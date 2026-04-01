import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Editor from './pages/Editor'

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="p-4 bg-white shadow">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Viral Reels</h1>
                    <nav>
                        <Link to="/" className="mr-4 text-blue-600">Home</Link>
                        <Link to="/editor" className="text-blue-600">Editor</Link>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/editor" element={<Editor />} />
                </Routes>
            </main>
        </div>
    )
}
