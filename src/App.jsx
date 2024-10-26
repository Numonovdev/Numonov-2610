import { useRef, useState, useEffect } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import imgage from './img/36000.gif'
function App() {
  const navmenuRef = useRef();
  const ulRef = useRef();
  const [truefalse, setTrueFalse] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const listItems = ulRef.current.querySelectorAll('li');
    listItems.forEach(li => {
      li.addEventListener('click', () => {
        setTrueFalse(false);
        navmenuRef.current.style.left = "-100%";
      });
    });

    return () => {
      listItems.forEach(li => {
        li.removeEventListener('click', () => {
          setTrueFalse(false);
          navmenuRef.current.style.left = "-100%";
        });
      });
    };
  }, []);

  function menunn() {
    if (!truefalse) {
      navmenuRef.current.style.left = "0";
      setTrueFalse(true);
    } else {
      navmenuRef.current.style.left = "-100%";
      setTrueFalse(false);
    }
  }
  
  const handleBtnme = ()=>{
    navigate('/')
  }

  const handleBtnPortfolio = ()=>{
    navigate('/')
  }

  return (
    <>
      <header id='navbar' className='bg-black shadow-md shadow-[#00fe00] fixed w-full top-0 left-0 z-50'>
        <nav className='container flex items-center justify-between h-16 sm:h-[84px] '>
          <div className='sm:text-2xl'>NumonovDev</div>

          <div
            id='nav-menu'
            ref={navmenuRef}
            className='absolute top-0 left-[-100%] min-h-[80vh] w-full 
            bg-black/80 backdrop-blur-sm flex items-center justify-center 
            duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto'
          >
            <ul ref={ulRef} className='flex flex-col items-center gap-8 lg:flex-row'>
              <li><Link to={'/'} className='nav-link'>Home</Link></li>
              <li><Link to={'/'} className='nav-link'>Contact</Link></li>
              <li><Link to={'/'} className='nav-link'>About</Link></li>
              <li><Link to={'/'} className='nav-link'>Blog</Link></li>
            </ul>
          </div>

          <div onClick={menunn} className='text-xl sm:text-3xl cursor-pointer z-50 lg:hidden'>
            {!truefalse ? (
              <i className="fa-solid fa-bars" id='menu-nn'></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </div>
        </nav>
      </header>

      <main>
        {/* home */}
        <section id='home'>
          <div className='container'>
            <div className='flex flex-col items-center gap-5 lg:flex-row'>
              {/* content */}
              <div className='w-full space-y-5 lg:w-1/2'>
                <h1>
                  <span className='text-[#37e237]'>Hi </span>
                  <br />
                  I`m NumonovDev
                </h1>
                <p className='text-slate-300 font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non distinctio mollitia, voluptatum ea eius praesentium assumenda.</p>
                <div className='flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10'>
                  <button onClick={handleBtnme} className='btn'>
                    <span>Bog`lanish</span>
                  </button>
                  <button className='btn' onClick={handleBtnPortfolio}>
                    <span>Portfolio</span>
                  </button>
                </div>
                <p className='text-xs text-slate-300 font-Lobster'>I`m developer and teacher</p>
                <div className='flex items-center gap-5 text-lg lg:pt-10'>
                  <Link to={'/'}>
                  <i class="text-slate-300 hover:text-[#00fe00] duration-300 cursor-pointer fa-brands fa-youtube"></i>
                  </Link>
                  <Link to={'/'}>
                  <i class="text-slate-300 hover:text-[#00fe00] duration-300 cursor-pointer fa-brands fa-instagram"></i>
                  </Link>
                  <Link to={'/'}>
                  <i class="text-slate-300 hover:text-[#00fe00] duration-300 cursor-pointer fa-brands fa-telegram"></i>
                  </Link>
                  <Link to={'/'}>
                  <i class="text-slate-300 hover:text-[#00fe00] duration-300 cursor-pointer fa-brands fa-facebook"></i>
                  </Link>
                </div>
              </div>
              {/* image */}
              <div className='w-full relative lg:w-1/2'>
                <img src={imgage} alt="" />
              </div>
            </div>
          </div>
        </section>
                      {/* servise */}
         <div className='bg-white text-white py-20'>
          <div className='container w-full grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 '>
            {/* card 1*/}
            <div className='bg-[#43ce43] p-5 cursor-pointer rounded-md 
               hover:-translate-y-1 duration-300 shadoww space-y-5'>
              <div className='flex items-center justify-center'>
              <i class="fa-brands fa-html5 text-[#FE7C00] text-3xl md:text-4xl xl:text-5xl"></i>
              </div>
            </div>

            {/* card 2*/}
            <div className='bg-[#43ce43] p-5 cursor-pointer rounded-md 
               hover:-translate-y-1 duration-300 shadoww space-y-5'>
              <div className='flex items-center justify-center'>
              <i class="fa-brands fa-css3 text-blue-600 text-3xl md:text-4xl xl:text-5xl"></i>
              </div>
            </div>

            {/* card 3*/}
            <div className='bg-[#43ce43] p-5 cursor-pointer rounded-md 
               hover:-translate-y-1 duration-300 shadoww space-y-5'>
              <div className='flex items-center justify-center'>
              <i class="fa-brands fa-js text-yellow-400 text-3xl md:text-4xl xl:text-5xl"></i>
              </div>
            </div>

            {/* card 4*/}
            <div className='bg-[#43ce43] p-5 cursor-pointer rounded-md 
               hover:-translate-y-1 duration-300 shadoww space-y-5'>
              <div className='flex items-center justify-center'>
              <i class="fa-brands fa-react text-blue-600 text-3xl md:text-4xl xl:text-5xl"></i>
              </div>
            </div>
            {/* card 5*/}
            <div className='bg-[#43ce43] p-5 cursor-pointer rounded-md 
               hover:-translate-y-1 duration-300 shadoww space-y-5'>
              <div className='flex items-center justify-center'>
              <i class="fa-brands fa-bootstrap text-[#7511F6] text-3xl md:text-4xl xl:text-5xl"></i>
              </div>
            </div>
            {/* card 6*/}
            <div className='bg-[#43ce43] p-5 cursor-pointer rounded-md 
               hover:-translate-y-1 duration-300 shadoww space-y-5'>
              <div className='flex items-center justify-center'>
              <i class="fa-brands fa-square-github text-black text-3xl md:text-4xl xl:text-5xl"></i>
              </div>
            </div>
          </div>
         </div>

         {/* About us */}
      <section id='about' className='container'>
        <div>
          <h2>About you</h2>
          <p>Name</p>
        </div>

        <div className='relative'>
          {/* item 1 */}
          <input type="text" placeholder="Enter Name..."
  className="input input-bordered input-success bg-transparent w-full max-w-xs" />
  <button className='border-2 absolute left-[253px] top-[-1px] border-green-600 bg-green-600 px-4 py-3 rounded-md'> Send</button>
        </div>
      </section>

      </main>
    </>
  );
}

export default App;
