'use client'

import { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-circle';
        document.body.appendChild(cursor);

        const updateCursorPosition = (e: { pageX: any; pageY: any; }) => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            document.body.removeChild(cursor);
        };
    }, []);

    return null;
}
