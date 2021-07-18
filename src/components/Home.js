import React from 'react'
import githubLogo from '../assets/img/github120px.png'
import linkedinLogo from '../assets/img/linkedin.png'
import mediumLogo from '../assets/img/medium.png'


function Home(){
    return (
      <div class="">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
               {/*  <img src="/img/logo.svg" class="h-7 sm:h-8" /> */}
              </div>
              <div class="divide-y divide-gray-200">
                <div class="pb-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p class="font-sans text-5xl"> Bastián Ávila</p>
                  <p class="">
                        Software Engineer
                  </p>
                  <div class="flex justify-left">
                    <div class="mr-2 flex items-start">
                      <img src={githubLogo} alt="githubLogo" class="w-6 m-1" /> 
                      <a href="https://github.com/avflo" target="__blank" class="text-gray-400 hover:text-gray-600">  github </a>
                    </div>
                    <div class="ml-2 flex items-start">
                      <img src={linkedinLogo} alt="githubLogo" class="w-6 m-1" /> 
                      <a href="https://www.linkedin.com/in/bastian-avila-558589193/" target="__blank" class="text-gray-400 hover:text-gray-600">  linkedin </a>
                    </div>
                    <div class="ml-2 flex items-start">
                      <img src={mediumLogo} alt="githubLogo" class="w-9 m-1" /> 
                      <a href="https://medium.com/@bastian_af" target="__blank" class="text-gray-400 hover:text-gray-600">  medium </a>
                    </div>
                  </div>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p>
                    <a href="https://bastianaf.notion.site/Bastian-vila-86e45460d56e4ee08f3e5f4a0b190260" 
                      id="more about me"
                      target="__blank"
                      class="text-cyan-600 hover:text-cyan-700">
                         más sobre mi &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Home;