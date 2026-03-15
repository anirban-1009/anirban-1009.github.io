import mermaid from 'mermaid';
import { useEffect, useId, useState } from 'react';

mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'sans-serif'
});

interface MermaidProps {
    chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
    const [svg, setSvg] = useState('');
    const [error, setError] = useState<string | null>(null);
    const id = `mermaid-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

    useEffect(() => {
        const renderChart = async () => {
            if (!chart) return;

            try {
                setError(null);
                const { svg } = await mermaid.render(id, chart.trim());
                setSvg(svg);
            } catch (err: any) {
                console.error('Mermaid render error:', err);
                setError(err.message || 'Syntax error in Mermaid diagram');
            }
        };

        renderChart();
    }, [chart, id]);

    if (error) {
        return (
            <div className="p-4 border border-red-500 rounded bg-red-900/20 text-red-200">
                <p className="font-bold">Diagram Error:</p>
                <pre className="text-xs mt-2 whitespace-pre-wrap">{error}</pre>
                <p className="text-xs mt-4 text-gray-400">Raw Source:</p>
                <pre className="text-xs text-gray-500">{chart}</pre>
            </div>
        );
    }

    if (!svg) return <div className="animate-pulse bg-gray-800 h-64 rounded-lg flex items-center justify-center text-gray-500">Loading Diagram...</div>;

    return (
        <div
            className="mermaid overflow-x-auto flex justify-center p-4 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-800 rounded-lg"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
