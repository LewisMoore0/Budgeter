'use client'

import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/button'

export const ThemeSwitch = () => {

    const { theme, setTheme } = useTheme()
    return (
        <>
            <Button onClick={() => setTheme('light')}>Light</Button>
            <Button onClick={() => setTheme('dark')}>Dark</Button>
        </>

    )
}