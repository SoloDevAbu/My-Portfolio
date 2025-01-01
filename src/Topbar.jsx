import { useState } from 'react'
import menuLogo from './assets/menu.png'
import closeLogo from './assets/close.png'
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <div>
        <div>
            {/* <img src={menuLogo} alt="Menu" className='size-6'/> */}
            <button onClick={toggleMenu}>
                {showMenu ? <img src={closeLogo} alt='Close' className='size-5'/> : <img src={menuLogo} alt='Menu' className='size-5'/>}
            </button>
        </div>
        <div className='pt-5'>
            {showMenu && (
                <div className='flex flex-col gap-3 bg-neutral-950 px-8 py-5 rounded-xl text-black font-semibold'>
                    <button className='bg-slate-200 px-2 py-1 rounded-xl' onClick={() => {
                        navigate('/')
                    }}>ABOUT</button>
                    <button className='bg-slate-200 px-2 py-1 rounded-xl' onClick={() => {
                        navigate('/projects')
                    }}>PROJECTS</button>
                    <button className='bg-slate-200 px-2 py-1 rounded-xl' onClick={() => {
                        navigate('/skills')
                    }}>SKILLS</button>
                    <button className='bg-slate-200 px-2 py-1 rounded-xl' onClick={() => {
                        navigate('/contact')
                    }}>CONTACT</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default Topbar