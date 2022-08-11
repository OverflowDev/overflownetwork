import {useState, useEffect} from 'react'

function Darkmode() {
    const [theme, setTheme] = useState(localStorage.theme)
    // const [theme, setTheme] = useState('dark')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    
    useEffect(() => {
        const rootElement = window.document.documentElement

        rootElement.classList.remove(colorTheme)
        rootElement.classList.add(theme)
        // optional 
        localStorage.setItem('theme', theme)

    }, [theme, colorTheme])

  return (
    <div className='flex justify-end p-4'>
        <button 
            className='dark:text-teal-100'
            onClick={() => setTheme(colorTheme)}
        >
            <ion-icon name="contrast-sharp" size='large'></ion-icon>
        </button>
    </div>
  )
}

export default Darkmode