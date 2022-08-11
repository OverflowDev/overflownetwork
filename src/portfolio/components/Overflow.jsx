import Footer from "../layouts/Footer"

function Overflow() {
  return (
    <div className='dark:bg-veryDarkBlue bg-teal-50'>

      <section className='flex flex-col items-center justify-center p-16'>
        <div className="m-8">
          <h1 className="text-4xl md:text-7xl dark:bg-veryDarkBlue bg-white dark:text-teal-100">Hi, I'm Overflow</h1>
        </div>
        <div className="relative md:w-72 md:h-72 w-64 h-64 rounded-full">
          <div 
            className="
            absolute 
            -inset-0.5 
            bg-gradient-to-r
            from-teal-600
            to-pink-600 
            rounded-full 
            blur 
            opacity-100 
            group-hover:opacity-100 
            transition 
            duration-1000
            animate-spin
            "
            >
          </div>
          <div className="dark:bg-veryDarkBlue bg-gray-700 md:w-72 md:h-72 w-64 h-64 rounded-full relative flex items-center justify-center">
            <h1 className="text-6xl dark:text-teal-100 text-teal-100">OVERFLOW</h1>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-center gap-3 mt-2 ">
            <div className="dark:text-teal-400 text-veryDarkBlue dark:hover:hover:text-teal-100 hover:text-teal-600">
              <a href="https://twitter.com/ade_overflow">
                <ion-icon name="logo-twitter" size='large' ></ion-icon>
              </a>
            </div>
            <div className="dark:text-teal-400 text-veryDarkBlue dark:hover:hover:text-teal-100 hover:text-teal-600">
              <a href="https://github.com/OverflowDev">
                <ion-icon name="logo-github" size='large'></ion-icon>
              </a>
            </div>
            <div className="dark:text-teal-400 text-veryDarkBlue dark:hover:hover:text-teal-100 hover:text-teal-600">
              <a href="https://www.instagram.com/adetomiwa_overflow/">
                <ion-icon name="logo-instagram" size='large'></ion-icon>
              </a>
            </div>
          </div>
        </div>
        
      </section>
      {/* Hero Ends  */}

      <section className="flex justify-center md:p-16 p-8">

        <div className="">

          <div className="mb-12">
              <h1 className="text-6xl text-center dark:text-teal-100 text-teal-900 font-light tracking-wider underline">PROJECTS</h1>
          </div>

          <div className="md:grid md:grid-cols-4 grid grid-cols-1 gap-12 justify-items-center">
            {/* 1 */}
            <div className="relative w-72 h-72 md:w-72 md:h-72 rounded-lg hover:shadow-md shadow bg-teal-50 group">
              <img 
                src="https://images.pexels.com/photos/953862/pexels-photo-953862.jpeg?cs=srgb&dl=pexels-emirkhan-bal-953862.jpg&fm=jpg" 
                alt="Cart"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
               />
              <div className="absolute inset-0 w-full h-full dark:bg-veryDarkBlue dark:opacity-50 bg-teal-700 opacity-80 transition duration-500 group-hover:opacity-80 rounded-lg" ></div>

              <div className="hidden group-hover:block absolute inset-x-7 md:inset-x-12 -top-6 w-5/6 h-24 md:w-4/6 md:h-24 rounded-lg shadow-md bg-teal-700 transition ease-in delay-1000 duration-1000">
                <div className="flex justify-center items-center h-full text-white gap-5">
                  <ion-icon name="logo-html5" size='large'></ion-icon>
                  <ion-icon name="logo-react" size='large'></ion-icon>
                  <ion-icon name="logo-css3" size='large'></ion-icon>
                </div>

                <div className=" mt-12">
                  <div className="flex-col flex justify-center">
                    <h1 className="text-3xl text-white mb-4">E-ccomerce</h1>
                    <a 
                      href="https://overflowmarket.vercel.app/"
                      className="py-2 bg-teal-50 hover:bg-teal-400 text-black text-center hover:text-white text-2xl rounded-full"
                      >
                        Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>  
              {/* 2 */}
            <div className="relative w-72 h-72 md:w-72 md:h-72 rounded-lg hover:shadow-md shadow bg-teal-50 group">
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1643383.jpg&fm=jpg" 
                alt="Interior"
                className="absolute inset-0 w-full h-full object-coverrounded-lg"
               />
              <div className="absolute inset-0 w-full h-full dark:bg-veryDarkBlue dark:opacity-50 bg-teal-700 opacity-80 transition duration-500 group-hover:opacity-75 rounded-lg" ></div>

              <div className="
              hidden group-hover:block absolute inset-x-7 md:inset-x-12 -top-6 w-5/6 h-24 md:w-4/6 md:h-24 rounded-lg shadow-md bg-teal-700 transition ease-in delay-1000 duration-1000
              ">
                <div className="flex justify-center items-center h-full text-white gap-5">
                  <ion-icon name="logo-html5" size='large'></ion-icon>
                  <ion-icon name="logo-react" size='large'></ion-icon>
                  <ion-icon name="logo-css3" size='large'></ion-icon>
                </div>

                <div className=" mt-12">
                  <div className="flex-col flex justify-center">
                    <h1 className="text-3xl text-white mb-4">Interior</h1>
                    <a 
                      href="https://interior-xi.vercel.app/"
                      className="py-2 bg-teal-50 text-black text-center text-2xl rounded-full"
                      >
                        Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>  
            {/* 3 */}
            <div className="relative w-72 h-72 md:w-72 md:h-72 rounded-lg hover:shadow-md shadow bg-teal-50 group">
              <img 
                src="https://images.pexels.com/photos/4578665/pexels-photo-4578665.jpeg?cs=srgb&dl=pexels-markus-winkler-4578665.jpg&fm=jpg" 
                alt="Github"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
               />
              <div className="absolute inset-0 w-full h-full dark:bg-veryDarkBlue dark:opacity-50 bg-teal-700 opacity-80 transition duration-500 group-hover:opacity-80 rounded-lg" ></div>

              <div className="
              hidden group-hover:block absolute inset-x-7 md:inset-x-12 -top-6 w-5/6 h-24 md:w-4/6 md:h-24 rounded-lg shadow-md bg-teal-700 transition ease-in delay-1000 duration-1000
              ">
                <div className="flex justify-center items-center h-full text-white gap-5">
                  <ion-icon name="logo-html5" size='large'></ion-icon>
                  <ion-icon name="logo-react" size='large'></ion-icon>
                  <ion-icon name="logo-css3" size='large'></ion-icon>
                </div>

                <div className=" mt-12">
                  <div className="flex-col flex justify-center">
                    <h1 className="text-3xl text-white mb-4">GithubFinder</h1>
                    <a 
                      href="https://github-finder-app-drab-two.vercel.app/"
                      className="py-2 bg-teal-50 text-black text-center text-2xl rounded-full"
                      >
                        Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>  
            {/* 4 */}
            <div className="relative w-72 h-72 md:w-72 md:h-72 rounded-lg hover:shadow-md shadow group">
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?cs=srgb&dl=pexels-expect-best-323780.jpg&fm=jpg" 
                alt="House MarketPlace"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
               />
              <div className="absolute inset-0 w-full h-full dark:bg-veryDarkBlue dark:opacity-50 bg-teal-700 opacity-80 transition duration-500 group-hover:opacity-75 rounded-lg" ></div>

              <div className="
              hidden group-hover:block absolute inset-x-7 md:inset-x-12 -top-6 w-5/6 h-24 md:w-4/6 md:h-24 rounded-lg shadow-md bg-teal-700 transition ease-in delay-1000 duration-1000
              ">
                <div className="flex justify-center items-center h-full text-white gap-5">
                  <ion-icon name="logo-html5" size='large'></ion-icon>
                  <ion-icon name="logo-react" size='large'></ion-icon>
                  <ion-icon name="logo-css3" size='large'></ion-icon>
                </div>

                <div className=" mt-12">
                  <div className="flex-col flex justify-center">
                    <h1 className="text-3xl text-white mb-4">House Marketplace</h1>
                    <a 
                      href="https://house-marketplace-chi-seven.vercel.app/"
                      className="py-2 bg-teal-50 text-black text-center text-2xl rounded-full"
                      >
                        Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>  

          </div>

        </div>
      </section>

      <section className="md:p-16 p-8">

        <div className="flex-col">

          <div className="mb-12">
              <h1 className="text-6xl text-center dark:text-teal-100 font-light tracking-wider underline">Skills</h1>
          </div>

          <div className="flex flex-wrap justify-center gap-12 mt-6">

            <div className="relative md:w-24 md:h-24 w-20 h-20 rounded-full">
              <div 
                className="
                absolute 
                -inset-0.5 
                bg-gradient-to-r
                from-teal-600
                to-blue-600 
                rounded-full 
                blur-sm
                opacity-100 
                transition 
                duration-1000
                dark:animate-spin
                " 
                >
              </div>
              <div className="dark:bg-veryDarkBlue bg-gray-800 dark:text-teal-200 text-white md:w-24 md:h-24 w-20 h-20 rounded-full relative flex items-center justify-center">
                <ion-icon name="logo-html5" size='large'></ion-icon>
              </div>
            </div>
            <div className="relative md:w-24 md:h-24 w-20 h-20 rounded-full">
              <div 
                className="
                absolute 
                -inset-0.5 
                bg-gradient-to-r
                from-teal-600
                to-blue-600 
                rounded-full 
                blur-sm
                opacity-100 
                group-hover:opacity-100 
                " 
                >
              </div>
              <div className="dark:bg-veryDarkBlue bg-gray-800 dark:text-teal-200 text-white md:w-24 md:h-24 w-20 h-20 rounded-full relative flex items-center justify-center">
                <ion-icon name="logo-react" size='large'></ion-icon>
              </div>
            </div>
            <div className="relative md:w-24 md:h-24 w-20 h-20 rounded-full">
              <div 
                className="
                absolute 
                -inset-0.5 
                bg-gradient-to-r
                from-teal-600
                to-blue-600 
                rounded-full 
                blur-sm
                opacity-100 
                group-hover:opacity-100 
                " 
                >
              </div>
              <div className="dark:bg-veryDarkBlue bg-gray-800 dark:text-teal-200 text-white md:w-24 md:h-24 w-20 h-20 rounded-full relative flex items-center justify-center">
                <ion-icon name="logo-css3" size='large'></ion-icon>
              </div>
            </div>

          </div>

        </div>
      </section>


    <Footer />
    </div>
    
  )
}

export default Overflow