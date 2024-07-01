//'use client';
 
import {NextUIProvider} from "@nextui-org/system";
import { ThemeProvider } from 'next-themes'
 
export function Providers({ children }) {
    console.log('global providers')
  return (
    <NextUIProvider>
        <ThemeProvider defaultTheme="dark">
            {children}
        </ThemeProvider>
    </NextUIProvider>
  );
}