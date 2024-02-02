import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './style/globals.css';
import './style/loader.css';
import './style/keyboardButton.css';
import './style/keyboardMessage.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Wheics',
    description: "Un CRM simple d'utilisation basée sur l'OSINT.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
