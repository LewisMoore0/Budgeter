//'use client';
 
import {NextUIProvider} from "@nextui-org/system";
 
export function Providers({ children }) {
    console.log('global providers')
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}