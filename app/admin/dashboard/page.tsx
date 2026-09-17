'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSave, FaImage, FaSignOutAlt, FaUserCircle, FaFileAlt, FaCheckCircle, FaPlus, FaTrash, FaBriefcase, FaEnvelope } from 'react-icons/fa'

export default function AdminDashboard() {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [saveSuccess, setSaveSuccess] = useState(false)
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('hero')

    useEffect(() => {
        const isAdmin = localStorage.getItem('isAdmin')
        if (!isAdmin) {
            router.push('/admin/login')
            return
        }

        fetch('/api/content')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [router])

    const handleSave = async () => {
        setSaving(true)
        setSaveSuccess(false)
        try {
            const res = await fetch('/api/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
            if (res.ok) {
                setSaveSuccess(true)
                setTimeout(() => setSaveSuccess(false), 3000)
            } else {
                alert('Failed to save changes.')
            }
        } catch (e) {
            alert('Error saving changes.')
        } finally {
            setSaving(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('isAdmin')
        router.push('/admin/login')
    }

    const handleChange = (section: string, field: string, value: any) => {
        setData((prev: any) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }))
    }

    const handleArrayChange = (section: string, index: number, field: string, value: any) => {
        setData((prev: any) => {
            const newArray = [...prev[section]]
            newArray[index] = { ...newArray[index], [field]: value }
            return { ...prev, [section]: newArray }
        })
    }

    const addProject = () => {
        setData((prev: any) => ({
            ...prev,
            projects: [
                ...prev.projects,
                {
                    id: Date.now(),
                    title: 'New Project',
                    description: 'Project description here',
                    tech: ['Technology'],
                    demo: '#',
                    github: '#',
                    image: ''
                }
            ]
        }))
    }

    const deleteProject = (index: number) => {
        if (confirm('Are you sure you want to delete this project?')) {
            setData((prev: any) => ({
                ...prev,
                projects: prev.projects.filter((_: any, i: number) => i !== index)
            }))
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-accent-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading Dashboard...</p>
                </div>
            </div>
        )
    }

    const tabs = [
        { id: 'hero', name: 'Hero', icon: FaUserCircle, color: 'from-blue-500 to-cyan-500' },
        { id: 'about', name: 'About', icon: FaFileAlt, color: 'from-purple-500 to-pink-500' },
        { id: 'services', name: 'Services', icon: FaBriefcase, color: 'from-orange-500 to-red-500' },
        { id: 'projects', name: 'Projects', icon: FaImage, color: 'from-green-500 to-teal-500' },
        { id: 'contact', name: 'Contact', icon: FaEnvelope, color: 'from-indigo-500 to-purple-500' },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Top Navigation Bar */}
            <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-tr from-accent-purple to-accent-pink rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                P
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Portfolio Admin</h1>
                                <p className="text-xs text-gray-500">Content Management</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className={`px-5 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 text-sm ${saveSuccess
                                    ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                                    : 'bg-gradient-to-r from-accent-purple to-accent-pink text-white hover:shadow-lg'
                                    }`}
                            >
                                {saveSuccess ? <FaCheckCircle /> : <FaSave />}
                                <span className="hidden sm:inline">{saving ? 'Saving...' : saveSuccess ? 'Saved!' : 'Save'}</span>
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all flex items-center gap-2 text-sm"
                            >
                                <FaSignOutAlt />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-gray-100 p-3 sticky top-24">
                            <nav className="space-y-1">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-3 group ${activeTab === tab.id
                                                ? `bg-gradient-to-r ${tab.color} text-white shadow-lg shadow-${tab.color}/20`
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                                                }`}>
                                                <Icon className={activeTab === tab.id ? 'text-white' : 'text-gray-600'} />
                                            </div>
                                            <span className="text-sm">{tab.name}</span>
                                        </button>
                                    )
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white/90 backdrop-blur rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 capitalize">{activeTab}</h2>
                                        <p className="text-sm text-gray-500 mt-1">Manage your {activeTab} content</p>
                                    </div>
                                    {activeTab === 'projects' && (
                                        <button
                                            onClick={addProject}
                                            className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 text-sm"
                                        >
                                            <FaPlus /> Add Project
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FileUploadGroup
                                            label="Profile Photo"
                                            description="Square, min 500x500px, JPG/PNG"
                                            accept="image/*"
                                            endpoint="/api/upload?filename=profile.jpg"
                                        />
                                        <FileUploadGroup
                                            label="CV / Resume"
                                            description="PDF format recommended"
                                            accept=".pdf"
                                            endpoint="/api/upload?filename=cv.pdf"
                                        />
                                    </div>
                                </div>
                            </>
                                    )}

                            {activeTab === 'about' && (
                                <>
                                    <TextAreaGroup label="About Me" value={data.about.description} onChange={(v) => handleChange('about', 'description', v)} placeholder="Tell your story..." />

                                    <div className="border-t border-gray-100 pt-6 mt-6">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Education & Training</h3>
                                        <div className="space-y-4">
                                            {data.about.training.map((item: any, i: number) => (
                                                <div key={i} className="p-5 border border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-white space-y-3">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-xs font-bold text-gray-500 uppercase">Course {i + 1}</span>
                                                    </div>
                                                    <InputGroup
                                                        label="Course Name"
                                                        value={item.course}
                                                        onChange={(v) => {
                                                            const newData = { ...data }
                                                            newData.about.training[i].course = v
                                                            setData(newData)
                                                        }}
                                                        placeholder="e.g., Mobile App Development"
                                                    />
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <InputGroup
                                                            label="Duration"
                                                            value={item.duration}
                                                            onChange={(v) => {
                                                                const newData = { ...data }
                                                                newData.about.training[i].duration = v
                                                                setData(newData)
                                                            }}
                                                            placeholder="4 Months"
                                                        />
                                                        <InputGroup
                                                            label="Institute"
                                                            value={item.institute}
                                                            onChange={(v) => {
                                                                const newData = { ...data }
                                                                newData.about.training[i].institute = v
                                                                setData(newData)
                                                            }}
                                                            placeholder="Institute Name"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === 'services' && (
                                <div className="space-y-4">
                                    {data.services.map((item: any, i: number) => (
                                        <div key={i} className="p-5 border border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-white space-y-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-bold text-gray-500 uppercase">Service {i + 1}</span>
                                            </div>
                                            <InputGroup label="Service Title" value={item.title} onChange={(v) => handleArrayChange('services', i, 'title', v)} placeholder="Web Development" />
                                            <TextAreaGroup label="Description" value={item.description} onChange={(v) => handleArrayChange('services', i, 'description', v)} placeholder="Describe the service..." />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'projects' && (
                                <div className="space-y-4">
                                    {data.projects.map((item: any, i: number) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="p-6 border-2 border-gray-200 rounded-2xl bg-gradient-to-br from-white to-gray-50 space-y-4 hover:shadow-lg transition-all"
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gradient-to-tr from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
                                                        {i + 1}
                                                    </div>
                                                    <span className="font-bold text-gray-700">Project {i + 1}</span>
                                                </div>
                                                <button
                                                    onClick={() => deleteProject(i)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>

                                            <InputGroup label="Project Title" value={item.title} onChange={(v) => handleArrayChange('projects', i, 'title', v)} placeholder="My Awesome Project" />
                                            <TextAreaGroup label="Description" value={item.description} onChange={(v) => handleArrayChange('projects', i, 'description', v)} placeholder="What does this project do?" />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <InputGroup label="Demo URL" value={item.demo} onChange={(v) => handleArrayChange('projects', i, 'demo', v)} placeholder="https://demo.com" />
                                                <InputGroup label="GitHub URL" value={item.github} onChange={(v) => handleArrayChange('projects', i, 'github', v)} placeholder="https://github.com/..." />
                                            </div>

                                            <ImageUploadGroup label="Project Image" value={item.image} onChange={(v) => handleArrayChange('projects', i, 'image', v)} />
                                        </motion.div>
                                    ))}

                                    {data.projects.length === 0 && (
                                        <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-2xl">
                                            <FaImage className="text-5xl text-gray-300 mx-auto mb-3" />
                                            <p className="text-gray-500 mb-4">No projects yet</p>
                                            <button
                                                onClick={addProject}
                                                className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                                            >
                                                <FaPlus /> Add Your First Project
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'contact' && (
                                <div className="space-y-4">
                                    <InputGroup label="Email Address" value={data.contact.email} onChange={(v) => handleChange('contact', 'email', v)} placeholder="you@example.com" />
                                    <InputGroup label="Phone Number" value={data.contact.phone} onChange={(v) => handleChange('contact', 'phone', v)} placeholder="+1 234 567 8900" />
                                    <InputGroup label="Location" value={data.contact.address} onChange={(v) => handleChange('contact', 'address', v)} placeholder="City, Country" />
                                </div>
                            )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
                </div >
            </div >
        </div >
    )
}

function InputGroup({ label, value, onChange, placeholder = '' }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
    return (
        <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all"
            />
        </div>
    )
}

function TextAreaGroup({ label, value, onChange, placeholder = '' }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
    return (
        <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">{label}</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={4}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all resize-none"
            />
        </div>
    )
}

function ImageUploadGroup({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
    const [uploading, setUploading] = useState(false)

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return

        setUploading(true)
        const formData = new FormData()
        formData.append('file', e.target.files[0])

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })
            const data = await res.json()
            if (data.success) {
                onChange(data.url)
            } else {
                alert('Upload failed')
            }
        } catch (err) {
            alert('Upload error')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">{label}</label>
            <div className="flex gap-2 items-start">
                <input
                    type="text"
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all"
                    placeholder="/uploads/image.jpg"
                />
                <div className="relative">
                    <input
                        type="file"
                        onChange={handleUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                    />
                    <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 font-medium whitespace-nowrap">
                        <FaImage /> {uploading ? '...' : 'Upload'}
                    </button>
                </div>
            </div>
            {value && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <img src={value} alt="Preview" className="h-32 w-auto rounded-lg shadow-sm mx-auto" />
                </div>
            )}
        </div>
    )
}

function FileUploadGroup({ label, description, accept, endpoint }: { label: string; description: string; accept: string; endpoint: string }) {
    const [uploading, setUploading] = useState(false)

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return

        setUploading(true)
        const formData = new FormData()
        formData.append('file', e.target.files[0])

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            })
            const data = await res.json()
            if (data.success) {
                alert('✅ File uploaded successfully!')
                window.location.reload()
            } else {
                alert('❌ Upload failed: ' + (data.error || 'Unknown error'))
            }
        } catch (err) {
            alert('❌ Upload error')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="p-4 border-2 border-dashed border-gray-300 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:border-accent-purple transition-all group">
            <label className="block text-gray-900 font-bold mb-1 text-sm">{label}</label>
            <p className="text-gray-500 text-xs mb-3">{description}</p>
            <div className="relative">
                <input
                    type="file"
                    onChange={handleUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept={accept}
                />
                <button className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 font-semibold group-hover:border-accent-purple">
                    <FaImage className="group-hover:text-accent-purple transition-colors" />
                    {uploading ? 'Uploading...' : 'Choose & Upload'}
                </button>
            </div>
        </div>
    )
}
