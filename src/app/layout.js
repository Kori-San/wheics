import { Inter } from 'next/font/google';
import './style/globals.css';
import './style/loader.css';
import './style/keyboardButton.css';
import './style/keyboardMessage.css';
import './style/typeFont.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Wheics',
    description: 'A simple tool to list all French Companies with multiple useful informations.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
