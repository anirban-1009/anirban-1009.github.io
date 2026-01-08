
// Removed failing hook dependency
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatWidget() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: "Hi there! I've read Anirban's entire portfolio. Ask me anything about his work, skills, or blog posts!",
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionsRef = useRef<HTMLDivElement>(null);

    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Scroll selected suggestion into view
    useEffect(() => {
        if (showSuggestions && suggestionsRef.current) {
            const selectedElement = suggestionsRef.current.children[selectedIndex] as HTMLElement;
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [selectedIndex, showSuggestions]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!showSuggestions) return;

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1));
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (suggestions.length > 0) {
                const s = suggestions[selectedIndex];
                const cursor = input.lastIndexOf('@');
                const newValue = input.substring(0, cursor) + '@' + s + ' ';
                setInput(newValue);
                setShowSuggestions(false);
                inputRef.current?.focus();
            }
        } else if (e.key === 'Escape') {
            setShowSuggestions(false);
        }
    };

    useEffect(() => {
        setSelectedIndex(0);
    }, [suggestions]);

    const [availableContent, setAvailableContent] = useState<{ title: string, slug: string, type: string }[]>([]);

    useEffect(() => {
        // Fetch available content for auto-completion
        fetch('/api/content')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setAvailableContent(data);
                }
            })
            .catch(err => console.error('Failed to fetch content suggestions:', err));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInput(val);

        // Find if we are typing a mention
        // Matches: @some-text at the end of string or after a space
        const match = val.match(/(?:^|\s)@([\w-]*)$/);

        if (match) {
            const query = match[1].toLowerCase();
            const staticSuggestions = ['blog', 'work', 'about'];

            // Filter content based on query
            const contentSuggestions = availableContent
                .filter(item =>
                    item.slug.toLowerCase().includes(query) ||
                    item.title.toLowerCase().includes(query)
                )
                .map(item => item.slug);

            const allSuggestions = [
                ...staticSuggestions.filter(s => s.toLowerCase().includes(query)),
                ...contentSuggestions
            ].slice(0, 8); // Limit to 8 suggestions

            if (allSuggestions.length > 0) {
                setSuggestions(allSuggestions);
                setShowSuggestions(true);
                return;
            }
        }

        setShowSuggestions(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        // Client-side validation
        const trimmed = input.trim();

        if (trimmed.length === 0) {
            return;
        }

        if (trimmed.length > 500) {
            alert('Message is too long. Please keep it under 500 characters.');
            return;
        }

        // Prevent excessive URLs
        const urlCount = (trimmed.match(/https?:\/\//gi) || []).length;
        if (urlCount > 2) {
            alert('Please limit URLs in your message.');
            return;
        }

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: trimmed
        };

        // Optimistically update messages
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
            });

            if (!response.ok) {
                // Handle rate limiting
                if (response.status === 429) {
                    const data = await response.json();
                    const errorMessage = data.error || 'Too many requests. Please slow down.';
                    setMessages(prev => [
                        ...prev,
                        {
                            id: (Date.now() + 1).toString(),
                            role: 'assistant',
                            content: errorMessage
                        }
                    ]);
                    return;
                }

                // Handle other errors
                if (response.status === 400) {
                    const data = await response.json();
                    setMessages(prev => [
                        ...prev,
                        {
                            id: (Date.now() + 1).toString(),
                            role: 'assistant',
                            content: data.error || 'Invalid message. Please try again.'
                        }
                    ]);
                    return;
                }

                throw new Error('Network response was not ok');
            }

            // Initialize assistant message container
            const assistantMessageId = (Date.now() + 1).toString();
            let assistantContent = '';

            setMessages(prev => [
                ...prev,
                { id: assistantMessageId, role: 'assistant', content: '' }
            ]);

            const reader = response.body?.getReader();
            if (!reader) throw new Error('No reader available');

            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                assistantContent += chunk;

                setMessages(prev => prev.map(m =>
                    m.id === assistantMessageId
                        ? { ...m, content: assistantContent }
                        : m
                ));
            }
        } catch (error) {
            console.error('Failed to send message:', error);
            setMessages(prev => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: 'Sorry, something went wrong. Please try again later.'
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [messages]);

    // Lock body scroll on mobile when chat is open
    useEffect(() => {
        const handleScrollLock = () => {
            if (isOpen && window.innerWidth < 768) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        handleScrollLock();
        window.addEventListener('resize', handleScrollLock);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('resize', handleScrollLock);
        };
    }, [isOpen]);

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] md:absolute md:bottom-20 md:right-0 md:inset-auto w-full h-full md:w-[400px] md:h-[600px] bg-white dark:bg-black-secondary md:border border-gray-200 dark:border-secondary md:rounded-2xl shadow-none md:shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-5 fade-in-0">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center" style={{ background: 'linear-gradient(to right, #2563eb, #9333ea)', color: 'white' }}>
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <span>✨</span> Ask AI about me
                        </h3>
                        <button
                            onClick={toggleChat}
                            className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            aria-label="Close chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4 bg-gray-50 dark:bg-black-secondary">
                        {messages.length === 0 && (
                            <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
                                <p className="mb-2 text-4xl">👋</p>
                                <p>Hi there! I've read Anirban's entire portfolio.</p>
                                <p className="text-sm mt-2">Ask me anything about his work, skills, or blog posts!</p>
                            </div>
                        )}


                        {messages.map((m) => (
                            <div
                                key={m.id}
                                className={`flex w-full ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${m.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-white dark:bg-secondary text-gray-800 dark:text-white border border-gray-200 dark:border-secondary rounded-bl-none shadow-sm'
                                        }`}
                                    style={{
                                        backgroundColor: m.role === 'user' ? '#2563eb' : undefined,
                                        color: m.role === 'user' ? 'white' : undefined
                                    }}
                                >
                                    <div className={`prose prose-sm max-w-none
                                        ${m.role === 'user' ? 'prose-invert text-white prose-p:text-white prose-headings:text-white prose-strong:text-white prose-a:text-white prose-code:text-white' : 'dark:prose-invert dark:text-white dark:prose-p:text-white dark:prose-headings:text-white dark:prose-strong:text-white dark:prose-a:text-white'}
                                        prose-p:m-0 prose-p:leading-relaxed prose-headings:mb-2 prose-headings:mt-4 prose-ul:my-2 prose-li:my-0.5
                                    `}>
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-blue-200 dark:hover:text-blue-300" />,
                                            }}
                                        >
                                            {m.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))}



                        {isLoading && (
                            <div className="flex justify-start w-full">
                                <div className="bg-white dark:bg-secondary border border-gray-200 dark:border-secondary rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" style={{ backgroundColor: '#9ca3af' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" style={{ backgroundColor: '#9ca3af' }}></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ backgroundColor: '#9ca3af' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} className="p-3 bg-white dark:bg-black-secondary border-t border-gray-200 dark:border-secondary">
                        <div className="relative flex items-center">
                            <input
                                ref={inputRef}
                                className="w-full px-4 py-3 pr-12 bg-gray-100 dark:bg-secondary border-none rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                value={input}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your question... (Try @blog, @work)"
                                disabled={isLoading}
                            />
                            {showSuggestions && (
                                <div ref={suggestionsRef} className="absolute bottom-full left-0 mb-2 w-full bg-white dark:bg-black-secondary border border-gray-200 dark:border-secondary rounded-xl shadow-lg overflow-hidden max-h-60 overflow-y-auto z-50">
                                    {suggestions.map((s, index) => (
                                        <button
                                            key={s}
                                            type="button"
                                            className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2 ${index === selectedIndex
                                                ? 'bg-primary text-secondary font-bold'
                                                : 'text-secondary dark:text-white hover:bg-secondary hover:text-white'
                                                }`}
                                            onClick={() => {
                                                const cursor = input.lastIndexOf('@');
                                                const newValue = input.substring(0, cursor) + '@' + s + ' ';
                                                setInput(newValue);
                                                setShowSuggestions(false);
                                                inputRef.current?.focus();
                                            }}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                        >
                                            <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs">@</span>
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="absolute right-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                style={{ backgroundColor: '#2563eb', color: 'white' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`h-14 w-14 rounded-full shadow-lg items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'hidden md:flex bg-gray-200 dark:bg-secondary text-gray-600 dark:text-white rotate-90' : 'flex bg-gradient-to-r from-blue-600 to-purple-600 text-white'}`}
                style={!isOpen ? { background: 'linear-gradient(to right, #2563eb, #9333ea)', color: 'white' } : undefined}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                )}
            </button>
        </div>
    );
}


