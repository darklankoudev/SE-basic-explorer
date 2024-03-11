import '../../Css/themes/echo.css';
import '../../Css/vendors/simplebar.css';
import '../../Css/vendors/tippy.css';
import $ from 'jquery';

const Dashboard = () => {
    const loadingPageRef = useRef(null);
    const [compactMenu, setCompactMenu] = useState(localStorage.getItem("compactMenu") === "true");
  
    useEffect(() => {
      const hideLoadingPage = () => {
        if (loadingPageRef.current) {
          loadingPageRef.current.classList.add("loading-page--hide");
          setTimeout(() => {
            loadingPageRef.current.classList.remove("loading-page--before-hide");
            loadingPageRef.current.classList.remove("loading-page--hide");
          }, 300);
        }
      };
      setTimeout(hideLoadingPage, 1000);
  
      const handleBackgroundMode = () => {
        if (window.scrollY > 0) {
          document.querySelector(".background").classList.add("background--hidden");
          document.querySelector(".top-bar").classList.add("top-bar--active");
          document.querySelector(".content.mode").classList.remove("mode--light");
        } else {
          document.querySelector(".background").classList.remove("background--hidden");
          document.querySelector(".top-bar").classList.remove("top-bar--active");
          document.querySelector(".content.mode").classList.add("mode--light");
        }
      };
      handleBackgroundMode();
      window.addEventListener('scroll', handleBackgroundMode);
  
      return () => {
        window.removeEventListener('scroll', handleBackgroundMode);
      };
    }, []);
  
    useEffect(() => {
      if (compactMenu) {
        document.querySelector(".side-menu").classList.add("side-menu--collapsed");
        document.querySelector(".content").classList.add("content--compact");
      } else {
        document.querySelector(".side-menu").classList.remove("side-menu--collapsed");
        document.querySelector(".content").classList.remove("content--compact");
      }
      localStorage.setItem("compactMenu", compactMenu.toString());
    }, [compactMenu]);
  
    const handleSideMenuClick = (event) => {
      const parent = event.target.parentNode;
      const ul = parent.querySelector("ul");
      if (ul) {
        if (ul.offsetParent !== null) {
          parent.querySelector(".side-menu__link__chevron").classList.remove("transform", "rotate-180");
          parent.classList.remove("side-menu__link--active-dropdown");
          ul.slideUp(300, () => {
            ul.classList.remove("side-menu__link__sub-open");
          });
        } else {
          parent.querySelector(".side-menu__link__chevron").classList.add("transform", "rotate-180");
          parent.classList.add("side-menu__link--active-dropdown");
          ul.slideDown(300, () => {
            ul.classList.add("side-menu__link__sub-open");
          });
        }
      }
    };
  
    const handleToggleCompactMenu = () => {
      setCompactMenu(!compactMenu);
    };
  
    const handleOpenMobileMenu = () => {
      document.querySelector(".side-menu").classList.add("side-menu--mobile-menu-open");
      document.querySelector(".close-mobile-menu").classList.add("close-mobile-menu--mobile-menu-open");
    };
  
    const handleCloseMobileMenu = () => {
      document.querySelector(".side-menu").classList.remove("side-menu--mobile-menu-open");
      document.querySelector(".close-mobile-menu").classList.remove("close-mobile-menu--mobile-menu-open");
    };
  
    const handleRequestFullScreen = () => {
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen();
      }
    };
  
    window.onresize = () => {
      document.querySelector(".side-menu").classList.remove("side-menu--mobile-menu-open");
      document.querySelector(".close-mobile-menu").classList.remove("close-mobile-menu--mobile-menu-open");
      if (window.innerWidth <= 1600) {
        setCompactMenu(true);
      }
    };


    return (
        <>
<div>
    <div>
    <div data-tw-backdrop="" aria-hidden="true" tabindex="-1" id="theme-switcher" className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&amp;:not(.show)]:duration-[0s,0.2s] [&amp;:not(.show)]:delay-[0.2s,0s] [&amp;:not(.show)]:invisible [&amp;:not(.show)]:opacity-0 [&amp;.show]:visible [&amp;.show]:opacity-100 [&amp;.show]:duration-[0s,0.4s]">
        <div className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"><a className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14" data-tw-dismiss="modal" href="javascript:;">
            
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="x" className="lucide lucide-x stroke-[1] h-3 w-3 sm:h-8 sm:w-8"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </a>
            <div className="overflow-y-auto flex-1 p-0">
                <div className="flex flex-col">
                    <div className="px-8 pb-8 pt-6">
                        <div className="text-base font-medium">Templates</div>
                        <div className="mt-0.5 text-slate-500">Choose your templates</div>
                        <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3.5">
                            <div>
                                <a href="echo-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block border-2 border-theme-1/60">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/echo.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    echo
                                </div>
                            </div>
                            <div>
                                <a href="hurricane-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/hurricane.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    hurricane
                                </div>
                            </div>
                            <div>
                                <a href="ravage-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/ravage.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    ravage
                                </div>
                            </div>
                            <div>
                                <a href="hook-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/hook.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    hook
                                </div>
                            </div>
                            <div>
                                <a href="razor-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/razor.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    razor
                                </div>
                            </div>
                            <div>
                                <a href="havoc-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/havoc.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    havoc
                                </div>
                            </div>
                            <div>
                                <a href="dagger-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/dagger.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    dagger
                                </div>
                            </div>
                            <div>
                                <a href="shuriken-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/shuriken.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    shuriken
                                </div>
                            </div>
                            <div>
                                <a href="raze-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/raze.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    raze
                                </div>
                            </div>
                            <div>
                                <a href="exort-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/exort.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    exort
                                </div>
                            </div>
                            <div>
                                <a href="viper-dashboard-overview-1.html" className="h-28 cursor-pointer bg-slate-50 box p-1 block">
                                    <div className="h-full w-full overflow-hidden rounded-md">
                                        <img className="h-full w-full" src="dist/images/themes/viper.png" alt="Tailwise - Admin Dashboard Template"/>
                                    </div>
                                </a>
                                <div className="mt-2.5 text-center text-xs capitalize">
                                    viper
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-dashed"></div>
                    <div className="">
                        <div className="text-base font-medium">Color Schemes</div>
                        <div className="mt-0.5 text-slate-500">
                            Choose your color schemes
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3.5 sm:grid-cols-4">
                            <div>
                                <a data-theme-color="default" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60 active">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 default"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 default"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-1" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-1"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-1"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-2" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-2"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-2"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-3" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-3"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-3"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-4" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-4"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-4"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-5" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-5"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-5"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-6" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-6"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-6"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-7" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-7"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-7"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-8" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-8"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-8"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-9" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-9"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-9"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-10" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-10"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-10"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-11" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-11"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-11"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-12" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-12"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-12"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-13" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-13"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-13"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-14" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-14"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-14"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-15" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-15"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-15"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-16" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-16"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-16"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a data-theme-color="theme-17" className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&amp;.active]:border-2 [&amp;.active]:border-theme-1/60">
                                    <div className="h-full overflow-hidden rounded-full">
                                        <div className="-mx-2 flex h-full items-center gap-1">
                                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-17"></div>
                                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-17"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="fixed bottom-0 right-0 z-50 mb-5 mr-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-theme-1 text-white shadow-lg" data-tw-toggle="modal" data-tw-target="#theme-switcher">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="settings" className="lucide lucide-settings stroke-[1] w-5 h-5 animate-spin"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    </div>
</div>
<div className="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&amp;.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&amp;.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
    <div className="h-screen relative loading-page [&amp;.loading-page--before-hide]:before:block [&amp;.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&amp;.loading-page--before-hide]:after:block [&amp;.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]">
        <div className="side-menu xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 group inset-y-0 xl:py-3.5 xl:pl-3.5 after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden side-menu--collapsed [&amp;.side-menu--mobile-menu-open]:ml-0 [&amp;.side-menu--mobile-menu-open]:after:block -ml-[275px] after:hidden">
            <div className="close-mobile-menu fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50 [&amp;.close-mobile-menu--mobile-menu-open]:flex hidden">
                <a className="mt-5 ml-5" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="x" className="lucide lucide-x stroke-[1] w-8 h-8 text-white"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </a>
            </div>
            <div className="side-menu__content h-full box bg-white/[0.95] rounded-none xl:rounded-xl z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col">
                <div className="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]">
                    <a className="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-2" href="">
                        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-gradient-to-b from-theme-1 to-theme-2/80 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                            <div className="relative h-[16px] w-[16px] -rotate-45 [&amp;_div]:bg-white">
                                <div className="absolute inset-y-0 left-0 my-auto h-[75%] w-[21%] rounded-full opacity-50">
                                </div>
                                <div className="absolute inset-0 m-auto h-[120%] w-[21%] rounded-full"></div>
                                <div className="absolute inset-y-0 right-0 my-auto h-[75%] w-[21%] rounded-full opacity-50">
                                </div>
                            </div>
                        </div>
                        <div className="ml-3.5 font-medium transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
                            ECHO
                        </div>
                    </a>
                    <a className="toggle-compact-menu ml-auto hidden h-[20px] w-[20px] items-center justify-center rounded-full border border-slate-600/40 transition-[opacity,transform] hover:bg-slate-600/5 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 3xl:flex" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-left" className="lucide lucide-arrow-left h-3.5 w-3.5 stroke-[1.3]"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                    </a>
                </div>
                <div className="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&amp;:-webkit-scrollbar]:w-0 [&amp;:-webkit-scrollbar]:bg-transparent [&amp;_.simplebar-content]:p-0 [&amp;_.simplebar-track.simplebar-vertical]:w-[10px] [&amp;_.simplebar-track.simplebar-vertical]:mr-0.5 [&amp;_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30" data-simplebar="init"><div className="simplebar-wrapper" style={{margin: '0px -20px -12px'}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right:' 0px' , bottom: '0px'}}><div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{height: '100%', overflow: 'hidden scroll'}}><div className="simplebar-content" style={{padding: '0px 20px 12px '}}>
                    <ul className="scrollable">
                        <li className="side-menu__divider">
                            DASHBOARDS
                        </li>
                        <li>
                            <a href="echo-dashboard-overview-1.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="gauge-circle" className="lucide lucide-gauge-circle stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"></path><circle cx="12" cy="12" r="2"></circle><path d="M13.4 10.6 19 5"></path></svg>
                                <div className="side-menu__link__title">E-Commerce</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-dashboard-overview-2.html" className="side-menu__link side-menu__link--active ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="activity-square" className="lucide lucide-activity-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M17 12h-2l-2 5-2-10-2 5H7"></path></svg>
                                <div className="side-menu__link__title">CRM</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-dashboard-overview-3.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="album" className="lucide lucide-album stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><polyline points="11 3 11 11 14 8 17 11 17 3"></polyline></svg>
                                <div className="side-menu__link__title">Hospital</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-dashboard-overview-4.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="book-marked" className="lucide lucide-book-marked stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><polyline points="10 2 10 10 13 7 16 10 16 2"></polyline></svg>
                                <div className="side-menu__link__title">Factory</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-dashboard-overview-5.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="hard-drive" className="lucide lucide-hard-drive stroke-[1] w-5 h-5 side-menu__link__icon"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
                                <div className="side-menu__link__title">Banking</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-dashboard-overview-6.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="mouse-pointer-square" className="lucide lucide-mouse-pointer-square stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path><path d="m12 12 4 10 1.7-4.3L22 16Z"></path></svg>
                                <div className="side-menu__link__title">Cafe</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-dashboard-overview-7.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shield-half" className="lucide lucide-shield-half stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 22V2"></path></svg>
                                <div className="side-menu__link__title">Crypto</div>
                            </a>
                    
                        </li>
                        <li>
                            <a href="echo-dashboard-overview-8.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="building" className="lucide lucide-building stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                                <div className="side-menu__link__title">Hotel</div>
                            </a>
                        
                        </li>
                        <li className="side-menu__divider">
                            APPS
                        </li>
                        <li>
                            <a href="echo-inbox.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="gantt-chart-square" className="lucide lucide-gantt-chart-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 8h7"></path><path d="M8 12h6"></path><path d="M11 16h5"></path></svg>
                                <div className="side-menu__link__title">Inbox</div>
                                <div className="side-menu__link__badge">
                                    4
                                </div>
                            </a>
                    
                        </li>
                        <li>
                            <a href="echo-file-manager-list.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="panel-right-inactive" className="lucide lucide-panel-right-inactive stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M15 14v1"></path><path d="M15 19v2"></path><path d="M15 3v2"></path><path d="M15 9v1"></path></svg>
                                <div className="side-menu__link__title">File Manager List</div>
                            </a>
                    
                        </li>
                        <li>
                            <a href="echo-file-manager-grid.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="panel-top-close" className="lucide lucide-panel-top-close stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><path d="m9 16 3-3 3 3"></path></svg>
                                <div className="side-menu__link__title">File Manager Grid</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-point-of-sale.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="panel-top-inactive" className="lucide lucide-panel-top-inactive stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M14 9h1"></path><path d="M19 9h2"></path><path d="M3 9h2"></path><path d="M9 9h1"></path></svg>
                                <div className="side-menu__link__title">Point of Sale</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-chat.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="mail-open" className="lucide lucide-mail-open stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
                                <div className="side-menu__link__title">Chat</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-calendar.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar-range" className="lucide lucide-calendar-range stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
                                <div className="side-menu__link__title">Calendar</div>
                            </a>
                        
                        </li>
                        <li className="side-menu__divider">
                            UI WIDGETS
                        </li>
                        <li>
                            <a href="echo-creative.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="album" className="lucide lucide-album stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><polyline points="11 3 11 11 14 8 17 11 17 3"></polyline></svg>
                                <div className="side-menu__link__title">Creative</div>
                            </a>
                
                        </li>
                        <li>
                            <a href="echo-dynamic.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="activity-square" className="lucide lucide-activity-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M17 12h-2l-2 5-2-10-2 5H7"></path></svg>
                                <div className="side-menu__link__title">Dynamic</div>
                            </a>
                
                        </li>
                        <li>
                            <a href="echo-interactive.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="keyboard" className="lucide lucide-keyboard stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="20" height="16" x="2" y="4" rx="2" ry="2"></rect><path d="M6 8h.001"></path><path d="M10 8h.001"></path><path d="M14 8h.001"></path><path d="M18 8h.001"></path><path d="M8 12h.001"></path><path d="M12 12h.001"></path><path d="M16 12h.001"></path><path d="M7 16h10"></path></svg>
                                <div className="side-menu__link__title">Interactive</div>
                            </a>
                    
                        </li>
                        <li className="side-menu__divider">
                            USER MANAGEMENT
                        </li>
                        <li>
                            <a href="echo-users.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="user-square" className="lucide lucide-user-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="12" cy="10" r="3"></circle><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path></svg>
                                <div className="side-menu__link__title">Users</div>
                            </a>
                    
                        </li>
                        <li>
                            <a href="echo-departments.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="cake-slice" className="lucide lucide-cake-slice stroke-[1] w-5 h-5 side-menu__link__icon"><circle cx="9" cy="7" r="2"></circle><path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"></path><path d="M16 13H3"></path><path d="M16 17H3"></path></svg>
                                <div className="side-menu__link__title">Departments</div>
                            </a>
                
                        </li>
                        <li>
                            <a href="echo-add-user.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="package-plus" className="lucide lucide-package-plus stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M16 16h6"></path><path d="M19 13v6"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
                                <div className="side-menu__link__title">Add User</div>
                            </a>
                        
                        </li>
                        <li className="side-menu__divider">
                            PERSONAL DASHBOARD
                        </li>
                        <li>
                            <a href="echo-profile-overview.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="presentation" className="lucide lucide-presentation stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
                                <div className="side-menu__link__title">Profile Overview</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-profile-overview-events.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="calendar-range" className="lucide lucide-calendar-range stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
                                <div className="side-menu__link__title">Events</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-profile-overview-achievements.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="medal" className="lucide lucide-medal stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>
                                <div className="side-menu__link__title">Achievements</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-profile-overview-contacts.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="tablet-smartphone" className="lucide lucide-tablet-smartphone stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="10" height="14" x="3" y="8" rx="2"></rect><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"></path><path d="M8 18h.01"></path></svg>
                                <div className="side-menu__link__title">Contacts</div>
                            </a>
                        
                        </li>
                        <li>
                            <a href="echo-profile-overview-default.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="snail" className="lucide lucide-snail stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"></path><circle cx="10" cy="13" r="8"></circle><path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"></path><path d="M18 3 19.1 5.2"></path><path d="M22 3 20.9 5.2"></path></svg>
                                <div className="side-menu__link__title">Default</div>
                            </a>
                    
                        </li>
                        <li className="side-menu__divider">
                            GENERAL SETTINGS
                        </li>
                        <li>
                            <a href="echo-settings.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="briefcase" className="lucide lucide-briefcase stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                <div className="side-menu__link__title">Profile Info</div>
                            </a>
                    
                        </li>
                        <li>
                            <a href="echo-settings-email-settings.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="mail-check" className="lucide lucide-mail-check stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>
                                <div className="side-menu__link__title">Email Settings</div>
                            </a>
                
                        </li>
                        <li>
                            <a href="echo-settings-security.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="fingerprint" className="lucide lucide-fingerprint stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"></path></svg>
                                <div className="side-menu__link__title">Security</div>
                            </a>
        
                        </li>
                        <li>
                            <a href="echo-settings-preferences.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="radar" className="lucide lucide-radar stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
                                <div className="side-menu__link__title">Preferences</div>
                            </a>
                
                        </li>
                        <li>
                            <a href="echo-settings-two-factor-authentication.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="door-open" className="lucide lucide-door-open stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M13 4h3a2 2 0 0 1 2 2v14"></path><path d="M2 20h3"></path><path d="M13 20h9"></path><path d="M10 12v.01"></path><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"></path></svg>
                                <div className="side-menu__link__title">Two-factor Authentication</div>
                            </a>
            
                        </li>
                        <li>
                            <a href="echo-settings-device-history.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="keyboard" className="lucide lucide-keyboard stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="20" height="16" x="2" y="4" rx="2" ry="2"></rect><path d="M6 8h.001"></path><path d="M10 8h.001"></path><path d="M14 8h.001"></path><path d="M18 8h.001"></path><path d="M8 12h.001"></path><path d="M12 12h.001"></path><path d="M16 12h.001"></path><path d="M7 16h10"></path></svg>
                                <div className="side-menu__link__title">Device History</div>
                            </a>
            
                        </li>
                        <li>
                            <a href="echo-settings-notification-settings.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="ticket" className="lucide lucide-ticket stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                                <div className="side-menu__link__title">Notification Settings</div>
                            </a>
                    
                        </li>
                        <li>
                            <a href="echo-settings-connected-services.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="bus-front" className="lucide lucide-bus-front stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 6 2 7"></path><path d="M10 6h4"></path><path d="m22 7-2-1"></path><rect width="16" height="16" x="4" y="3" rx="2"></rect><path d="M4 11h16"></path><path d="M8 15h.01"></path><path d="M16 15h.01"></path><path d="M6 19v2"></path><path d="M18 21v-2"></path></svg>
                                <div className="side-menu__link__title">Connected Services</div>
                            </a>
                    
                        </li>
                        <li>
                            <a href="echo-settings-social-media-links.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="podcast" className="lucide lucide-podcast stroke-[1] w-5 h-5 side-menu__link__icon"><circle cx="12" cy="11" r="1"></circle><path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"></path><path d="M8 14a5 5 0 1 1 8 0"></path><path d="M17 18.5a9 9 0 1 0-10 0"></path></svg>
                                <div className="side-menu__link__title">Social Media Links</div>
                            </a>
                
                        </li>
                        <li>
                            <a href="echo-settings-account-deactivation.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="package-x" className="lucide lucide-package-x stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line><path d="m17 13 5 5m-5 0 5-5"></path></svg>
                                <div className="side-menu__link__title">Account Deactivation</div>
                            </a>
                        
                        </li>
                        <li className="side-menu__divider">
                            ACCOUNT
                        </li>
                        <li>
                            <a href="echo-billing.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="percent-square" className="lucide lucide-percent-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
                                <div className="side-menu__link__title">Billing</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-invoice.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="database-zap" className="lucide lucide-database-zap stroke-[1] w-5 h-5 side-menu__link__icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 15 21.84"></path><path d="M21 5V8"></path><path d="M21 12L18 17H22L19 22"></path><path d="M3 12A9 3 0 0 0 14.59 14.87"></path></svg>
                                <div className="side-menu__link__title">Invoice</div>
                            </a>
                            
                        
                        </li>
                        <li className="side-menu__divider">
                            E-COMMERCE
                        </li>
                        <li>
                            <a href="echo-categories.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="book-marked" className="lucide lucide-book-marked stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><polyline points="10 2 10 10 13 7 16 10 16 2"></polyline></svg>
                                <div className="side-menu__link__title">Categories</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-add-product.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="compass" className="lucide lucide-compass stroke-[1] w-5 h-5 side-menu__link__icon"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                                <div className="side-menu__link__title">Add Product</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="table2" className="lucide lucide-table2 stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>
                                <div className="side-menu__link__title">Products</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down stroke-[1] w-5 h-5 side-menu__link__chevron"><path d="m6 9 6 6 6-6"></path></svg>
                            </a>
                            
                            <ul className="hidden">
                                <li>
                                    <a href="echo-product-list.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layout-panel-top" className="lucide lucide-layout-panel-top stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect></svg>
                                        <div className="side-menu__link__title">
                                            Product List
                                        </div>
                                    </a>
                                
                                
                                </li>
                                <li>
                                    <a href="echo-product-grid.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layout-panel-left" className="lucide lucide-layout-panel-left stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="7" height="18" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect></svg>
                                        <div className="side-menu__link__title">
                                            Product Grid
                                        </div>
                                    </a>
                                
                                
                                </li>
                            </ul>
                        
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="sigma-square" className="lucide lucide-sigma-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M16 8.9V7H8l4 5-4 5h8v-1.9"></path></svg>
                                <div className="side-menu__link__title">Transactions</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down stroke-[1] w-5 h-5 side-menu__link__chevron"><path d="m6 9 6 6 6-6"></path></svg>
                            </a>
                            
                            <ul className="hidden">
                                <li>
                                    <a href="echo-transaction-list.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="divide-square" className="lucide lucide-divide-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="8" x2="16" y1="12" y2="12"></line><line x1="12" x2="12" y1="16" y2="16"></line><line x1="12" x2="12" y1="8" y2="8"></line></svg>
                                        <div className="side-menu__link__title">
                                            Transaction List
                                        </div>
                                    </a>
                                
                                
                                </li>
                                <li>
                                    <a href="echo-transaction-detail.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="plus-square" className="lucide lucide-plus-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                                        <div className="side-menu__link__title">
                                            Transaction Detail
                                        </div>
                                    </a>
                                
                                
                                </li>
                            </ul>
                        
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="file-archive" className="lucide lucide-file-archive stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="20" r="2"></circle><path d="M10 7V6"></path><path d="M10 12v-1"></path><path d="M10 18v-2"></path></svg>
                                <div className="side-menu__link__title">Sellers</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down stroke-[1] w-5 h-5 side-menu__link__chevron"><path d="m6 9 6 6 6-6"></path></svg>
                            </a>
                            
                            <ul className="hidden">
                                <li>
                                    <a href="echo-seller-list.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="file-image" className="lucide lucide-file-image stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="13" r="2"></circle><path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"></path></svg>
                                        <div className="side-menu__link__title">
                                            Seller List
                                        </div>
                                    </a>
                                
                                
                                </li>
                                <li>
                                    <a href="echo-seller-detail.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="file-box" className="lucide lucide-file-box stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z"></path><path d="m7 17-4.74-2.85"></path><path d="m7 17 4.74-2.85"></path><path d="M7 17v5"></path></svg>
                                        <div className="side-menu__link__title">
                                            Seller Detail
                                        </div>
                                    </a>
                                
                                
                                </li>
                            </ul>
                        
                        </li>
                        <li>
                            <a href="echo-reviews.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="goal" className="lucide lucide-goal stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M12 13V2l8 4-8 4"></path><path d="M20.55 10.23A9 9 0 1 1 8 4.94"></path><path d="M8 10a5 5 0 1 0 8.9 2.02"></path></svg>
                                <div className="side-menu__link__title">Reviews</div>
                            </a>
                            
                        
                        </li>
                        <li className="side-menu__divider">
                            AUTHENTICATIONS
                        </li>
                        <li>
                            <a href="echo-login.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="book-key" className="lucide lucide-book-key stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"></path><path d="M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20"></path><circle cx="14" cy="8" r="2"></circle><path d="m20 2-4.5 4.5"></path><path d="m19 3 1 1"></path></svg>
                                <div className="side-menu__link__title">Login</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-register.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="book-lock" className="lucide lucide-book-lock stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"></path><path d="M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20"></path><rect width="8" height="5" x="12" y="6" rx="1"></rect><path d="M18 6V4a2 2 0 1 0-4 0v2"></path></svg>
                                <div className="side-menu__link__title">Register</div>
                            </a>
                            
                        
                        </li>
                        <li className="side-menu__divider">
                            COMPONENTS
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layout-panel-left" className="lucide lucide-layout-panel-left stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="7" height="18" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect></svg>
                                <div className="side-menu__link__title">Table</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down stroke-[1] w-5 h-5 side-menu__link__chevron"><path d="m6 9 6 6 6-6"></path></svg>
                            </a>
                            
                            <ul className="hidden">
                                <li>
                                    <a href="echo-regular-table.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="flip-vertical" className="lucide lucide-flip-vertical stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path><path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path><path d="M4 12H2"></path><path d="M10 12H8"></path><path d="M16 12h-2"></path><path d="M22 12h-2"></path></svg>
                                        <div className="side-menu__link__title">
                                            Regular Table
                                        </div>
                                    </a>
                                
                                
                                </li>
                                <li>
                                    <a href="echo-tabulator.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="flip-horizontal" className="lucide lucide-flip-horizontal stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"></path><path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"></path><path d="M12 20v2"></path><path d="M12 14v2"></path><path d="M12 8v2"></path><path d="M12 2v2"></path></svg>
                                        <div className="side-menu__link__title">
                                            Tabulator
                                        </div>
                                    </a>
                                
                                
                                </li>
                            </ul>
                        
                        </li>
                        <li>
                            <a href="javascript:;" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="memory-stick" className="lucide lucide-memory-stick stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M6 19v-3"></path><path d="M10 19v-3"></path><path d="M14 19v-3"></path><path d="M18 19v-3"></path><path d="M8 11V9"></path><path d="M16 11V9"></path><path d="M12 11V9"></path><path d="M2 15h20"></path><path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"></path></svg>
                                <div className="side-menu__link__title">Overlay</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down stroke-[1] w-5 h-5 side-menu__link__chevron"><path d="m6 9 6 6 6-6"></path></svg>
                            </a>
                            
                            <ul className="hidden">
                                <li>
                                    <a href="echo-modal.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="menu-square" className="lucide lucide-menu-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 8h10"></path><path d="M7 12h10"></path><path d="M7 16h10"></path></svg>
                                        <div className="side-menu__link__title">
                                            Modal
                                        </div>
                                    </a>
                                
                                
                                </li>
                                <li>
                                    <a href="echo-slideover.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="newspaper" className="lucide lucide-newspaper stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
                                        <div className="side-menu__link__title">
                                            Slide Over
                                        </div>
                                    </a>
                                
                                
                                </li>
                                <li>
                                    <a href="echo-notification.html" className="side-menu__link ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="panel-bottom" className="lucide lucide-panel-bottom stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="15" y2="15"></line></svg>
                                        <div className="side-menu__link__title">
                                            Notification
                                        </div>
                                    </a>
                                
                                
                                </li>
                            </ul>
                        
                        </li>
                        <li>
                            <a href="echo-tab.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="package2" className="lucide lucide-package2 stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>
                                <div className="side-menu__link__title">Tab</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-accordion.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="pocket" className="lucide lucide-pocket stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline></svg>
                                <div className="side-menu__link__title">Accordion</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-button.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="plus-square" className="lucide lucide-plus-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                                <div className="side-menu__link__title">Button</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-alert.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="presentation" className="lucide lucide-presentation stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
                                <div className="side-menu__link__title">Alert</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-progress-bar.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shield-ellipsis" className="lucide lucide-shield-ellipsis stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M8 11h.01"></path><path d="M12 11h.01"></path><path d="M16 11h.01"></path></svg>
                                <div className="side-menu__link__title">Progress Bar</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-tooltip.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="clapperboard" className="lucide lucide-clapperboard stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
                                <div className="side-menu__link__title">Tooltip</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-dropdown.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="flip-vertical" className="lucide lucide-flip-vertical stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path><path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path><path d="M4 12H2"></path><path d="M10 12H8"></path><path d="M16 12h-2"></path><path d="M22 12h-2"></path></svg>
                                <div className="side-menu__link__title">Dropdown</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-typography.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="file-type2" className="lucide lucide-file-type2 stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M2 13v-1h6v1"></path><path d="M4 18h2"></path><path d="M5 12v6"></path></svg>
                                <div className="side-menu__link__title">Typography</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-icon.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="aperture" className="lucide lucide-aperture stroke-[1] w-5 h-5 side-menu__link__icon"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" x2="20.05" y1="8" y2="17.94"></line><line x1="9.69" x2="21.17" y1="8" y2="8"></line><line x1="7.38" x2="13.12" y1="12" y2="2.06"></line><line x1="9.69" x2="3.95" y1="16" y2="6.06"></line><line x1="14.31" x2="2.83" y1="16" y2="16"></line><line x1="16.62" x2="10.88" y1="12" y2="21.94"></line></svg>
                                <div className="side-menu__link__title">Icon</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-loading-icon.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="droplets" className="lucide lucide-droplets stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
                                <div className="side-menu__link__title">Loading Icon</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-regular-form.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="gallery-horizontal-end" className="lucide lucide-gallery-horizontal-end stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M2 7v10"></path><path d="M6 5v14"></path><rect width="12" height="18" x="10" y="3" rx="2"></rect></svg>
                                <div className="side-menu__link__title">Regular Form</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-datepicker.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="microwave" className="lucide lucide-microwave stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="20" height="15" x="2" y="4" rx="2"></rect><rect width="8" height="7" x="6" y="8" rx="1"></rect><path d="M18 8v7"></path><path d="M6 19v2"></path><path d="M18 19v2"></path></svg>
                                <div className="side-menu__link__title">Datepicker</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-tom-select.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="disc3" className="lucide lucide-disc3 stroke-[1] w-5 h-5 side-menu__link__icon"><circle cx="12" cy="12" r="10"></circle><path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path><circle cx="12" cy="12" r="2"></circle><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path></svg>
                                <div className="side-menu__link__title">Tom Select</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-file-upload.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="sandwich" className="lucide lucide-sandwich stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"></path><path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"></path><path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"></path><path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"></path></svg>
                                <div className="side-menu__link__title">File Upload</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-wysiwyg-editor.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="hop-off" className="lucide lucide-hop-off stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226"></path><path d="M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"></path><path d="M17.5 17.5c-2.5 0-4 0-6-1"></path><path d="M20 11.5c1 1.5 2 3.5 2 4.5"></path><path d="M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"></path><path d="M22 22c-2 0-3.5-.5-5.5-1.5"></path><path d="M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>
                                <div className="side-menu__link__title">Wysiwyg Editor</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-validation.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="clipboard-type" className="lucide lucide-clipboard-type stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M9 12v-1h6v1"></path><path d="M11 17h2"></path><path d="M12 11v6"></path></svg>
                                <div className="side-menu__link__title">Validation</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-chart.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="pie-chart" className="lucide lucide-pie-chart stroke-[1] w-5 h-5 side-menu__link__icon"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                                <div className="side-menu__link__title">Chart</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-slider.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="kanban-square" className="lucide lucide-kanban-square stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M8 7v7"></path><path d="M12 7v4"></path><path d="M16 7v9"></path></svg>
                                <div className="side-menu__link__title">Slider</div>
                            </a>
                            
                        
                        </li>
                        <li>
                            <a href="echo-image-zoom.html" className="side-menu__link ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="image" className="lucide lucide-image stroke-[1] w-5 h-5 side-menu__link__icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                                <div className="side-menu__link__title">Image Zoom</div>
                            </a>
                            
                        
                        </li>
                    
                    </ul>
                </div></div></div></div><div className="simplebar-placeholder" style={{width: 'auto' , height: '3770px'}}></div></div><div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}><div className="simplebar-scrollbar" style={{width: '0px', display: 'none'}}></div></div><div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}><div className="simplebar-scrollbar" style={{height: '145px' , transform: 'translate3d(0px, 0px, 0px)', display: 'block'}}></div></div></div>
            </div>
            <div className="fixed inset-x-0 top-0 mt-3.5 h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px]">
                <div className="top-bar absolute left-0 xl:left-3.5 right-0 h-full mx-5 group before:content-[''] before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur">
                    <div className="box group-[.top-bar--active]:box container flex h-full w-full items-center border-transparent bg-transparent shadow-none transition-[padding,background-color,border-color] duration-300 ease-in-out group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2 group-[.top-bar--active]:px-5">
                        <div className="flex items-center gap-1 xl:hidden">
                            <a className="p-2 text-white rounded-full open-mobile-menu hover:bg-white/5" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="align-justify" className="lucide lucide-align-justify stroke-[1] h-[18px] w-[18px]"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                            </a>
                            <a className="p-2 text-white rounded-full hover:bg-white/5" data-tw-toggle="modal" data-tw-target="#quick-search" href="javascript:;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="search" className="lucide lucide-search stroke-[1] h-[18px] w-[18px]"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                            </a>
                        </div>
                        
                        <div className="relative justify-center flex-1 hidden xl:flex" data-tw-toggle="modal" data-tw-target="#quick-search">
                            <div className="flex w-[350px] cursor-pointer items-center rounded-[0.5rem] border border-transparent bg-white/[0.12] px-3.5 py-2 text-white/60 transition-colors duration-300 hover:bg-white/[0.15] hover:duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="search" className="lucide lucide-search stroke-[1] h-[18px] w-[18px]"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                <div className="ml-2.5 mr-auto">Quick search...</div>
                                <div>⌘K</div>
                            </div>
                        </div>
                        <div id="quick-search" aria-hidden="true" tabindex="-1" className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 overflow-y-hidden z-[60] [&amp;:not(.show)]:duration-[0s,0.2s] [&amp;:not(.show)]:delay-[0.2s,0s] [&amp;:not(.show)]:invisible [&amp;:not(.show)]:opacity-0 [&amp;.show]:visible [&amp;.show]:opacity-100 [&amp;.show]:duration-[0s,0.1s]">
                            <div className="relative mx-auto my-2 w-[95%] scale-95 transition-transform group-[.show]:scale-100 sm:mt-40 sm:w-[600px] lg:w-[700px]">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex w-12 items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="search" className="lucide lucide-search stroke-[1] w-5 h-5 -mr-1.5 text-slate-500"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                    </div>
                                    <input type="text" placeholder="Quick search..." className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full border-slate-200 placeholder:text-slate-400/90 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&amp;[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&amp;:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-lg border-0 py-3.5 pl-12 pr-14 text-base shadow-lg focus:ring-0"/>
                                    <div className="absolute inset-y-0 right-0 flex w-14 items-center">
                                        <div className="mr-auto rounded-[0.4rem] border bg-slate-100 px-2 py-1 text-xs text-slate-500/80">
                                            ESC
                                        </div>
                                    </div>
                                </div>
                                <div className="global-search global-search--show-result group relative z-10 mt-1 max-h-[468px] overflow-y-auto rounded-lg bg-white pb-1 shadow-lg sm:max-h-[615px]">
                                    <div className="flex flex-col items-center justify-center pb-28 pt-20 group-[.global-search--show-result]:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="search-x" className="lucide lucide-search-x h-20 w-20 fill-theme-1/5 stroke-[0.5] text-theme-1/20"><path d="m13.5 8.5-5 5"></path><path d="m8.5 8.5 5 5"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                        <div className="mt-5 text-xl font-medium">
                                            No result found
                                        </div>
                                        <div className="mt-3 w-2/3 text-center leading-relaxed text-slate-500">
                                            No results found for
                                            <span className="global-search__keyword font-medium italic"></span>
                                            . Please try a different search term or check your
                                            spelling.
                                        </div>
                                    </div>
                                    <div className="hidden group-[.global-search--show-result]:block">
                                        <div className="px-5 py-4">
                                            <div className="flex items-center">
                                                <div className="text-xs uppercase text-slate-500">
                                                    Start your search here...
                                                </div>
                                            </div>
                                            <div className="mt-3.5 flex flex-wrap gap-2">
                                                <a className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50" href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="users2" className="lucide lucide-users2 h-4 w-4 stroke-[1.3]"><path d="M14 19a6 6 0 0 0-12 0"></path><circle cx="8" cy="9" r="4"></circle><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path></svg>
                                                    Users
                                                </a>
                                                <a className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50" href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="building2" className="lucide lucide-building2 h-4 w-4 stroke-[1.3]"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                                                    Departments
                                                </a>
                                                <a className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50" href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="kanban-square" className="lucide lucide-kanban-square h-4 w-4 stroke-[1.3]"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M8 7v7"></path><path d="M12 7v4"></path><path d="M16 7v9"></path></svg>
                                                    Products
                                                </a>
                                                <a className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50" href="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="mail-check" className="lucide lucide-mail-check h-4 w-4 stroke-[1.3]"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>
                                                    Mails
                                                </a>
                                                <div data-tw-placement="bottom-end" className="dropdown relative"><a data-tw-toggle="dropdown" aria-expanded="false" href="javascript:;" className="cursor-pointer flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50">More
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down -ml-0.5 h-4 w-4 stroke-[1.3]"><path d="m6 9 6 6 6-6"></path></svg>
                                                    </a>
                                                    <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                                        <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="map" className="lucide lucide-map stroke-[1] mr-2 h-4 w-4"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" x2="9" y1="3" y2="18"></line><line x1="15" x2="15" y1="6" y2="21"></line></svg>
                                                                Locations</a>
                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="file-check" className="lucide lucide-file-check stroke-[1] mr-2 h-4 w-4"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>
                                                                Projects</a>
                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="printer" className="lucide lucide-printer stroke-[1] mr-2 h-4 w-4"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>
                                                                Devices</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t border-dashed px-5 py-4">
                                            <div className="flex items-center">
                                                <div className="text-xs uppercase text-slate-500">
                                                    Users
                                                </div>
                                                <a className="ml-auto text-xs text-slate-500" href="">
                                                    See All
                                                </a>
                                            </div>
                                            <div className="mt-3.5 flex flex-col gap-1">
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user1-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Tom Hanks
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        New York, USA
                                                    </div>
                                                </a>
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user4-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Angelina Jolie
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        San Francisco, USA
                                                    </div>
                                                </a>
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user3-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Leonardo DiCaprio
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        Chicago, USA
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="border-t border-dashed px-5 py-4">
                                            <div className="flex items-center">
                                                <div className="text-xs uppercase text-slate-500">
                                                    Departments
                                                </div>
                                                <a className="ml-auto text-xs text-slate-500" href="">
                                                    See All
                                                </a>
                                            </div>
                                            <div className="mt-3.5 flex flex-col gap-1">
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="store" className="lucide lucide-store h-3.5 w-3.5 stroke-[1.3] text-theme-1"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path></svg>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Finance
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        Gambia
                                                    </div>
                                                </a>
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="hotel" className="lucide lucide-hotel h-3.5 w-3.5 stroke-[1.3] text-theme-1"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path><path d="M8 7h.01"></path><path d="M16 7h.01"></path><path d="M12 7h.01"></path><path d="M12 11h.01"></path><path d="M16 11h.01"></path><path d="M8 11h.01"></path><path d="M10 22v-6.5m4 0V22"></path></svg>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Operations
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        Albania
                                                    </div>
                                                </a>
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="hotel" className="lucide lucide-hotel h-3.5 w-3.5 stroke-[1.3] text-theme-1"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path><path d="M8 7h.01"></path><path d="M16 7h.01"></path><path d="M12 7h.01"></path><path d="M12 11h.01"></path><path d="M16 11h.01"></path><path d="M8 11h.01"></path><path d="M10 22v-6.5m4 0V22"></path></svg>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Human Resources
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        Nicaragua
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="border-t border-dashed px-5 py-4">
                                            <div className="flex items-center">
                                                <div className="text-xs uppercase text-slate-500">
                                                    Products
                                                </div>
                                                <a className="ml-auto text-xs text-slate-500" href="">
                                                    See All
                                                </a>
                                            </div>
                                            <div className="mt-3.5 flex flex-col gap-1">
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/products/product3-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Wireless Gaming Mouse
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        Jewelry
                                                    </div>
                                                </a>
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/products/product4-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Smart Home Security Camera
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        Books
                                                    </div>
                                                </a>
                                                <a className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80" href="">
                                                    <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/products/product7-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                    <div className="truncate font-medium">
                                                        Smartphone Charging Dock
                                                    </div>
                                                    <div className="hidden text-slate-500 sm:block">
                                                        Electronics
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="flex items-center flex-1">
                            <div className="flex items-center gap-1 ml-auto">
                                <a className="p-2 text-white rounded-full hover:bg-white/5" data-tw-toggle="modal" data-tw-target="#activities-panel" href="javascript:;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layout-grid" className="lucide lucide-layout-grid stroke-[1] h-[18px] w-[18px]"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
                                </a>
                                <a className="p-2 text-white rounded-full request-full-screen hover:bg-white/5" href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="expand" className="lucide lucide-expand stroke-[1] h-[18px] w-[18px]"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path><path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path><path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path></svg>
                                </a>
                                <a className="p-2 text-white rounded-full hover:bg-white/5" data-tw-toggle="modal" data-tw-target="#notifications-panel" href="javascript:;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="bell" className="lucide lucide-bell stroke-[1] h-[18px] w-[18px]"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                                </a>
                            </div>
                            <div data-tw-placement="bottom-end" className="dropdown relative ml-5"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer image-fit h-[36px] w-[36px] overflow-hidden rounded-full border-[3px] border-white/[0.15]"><img src="dist/images/users/user5-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                </button>
                                <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                    <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-56 mt-1">
                                        <a data-tw-toggle="modal" data-tw-target="#switch-account" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="toggle-left" className="lucide lucide-toggle-left stroke-[1] w-4 h-4 mr-2"><rect width="20" height="12" x="2" y="6" rx="6" ry="6"></rect><circle cx="8" cy="12" r="2"></circle></svg>
                                            Switch Account</a>
                                        <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400">
                                        </div>
                                        <a href="echo-settings-connected-services.html" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="settings" className="lucide lucide-settings stroke-[1] w-4 h-4 mr-2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                            Connected Services</a>
                                        <a href="echo-settings-email-settings.html" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="inbox" className="lucide lucide-inbox stroke-[1] w-4 h-4 mr-2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                                            Email Settings</a>
                                        <a href="echo-settings-security.html" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="lock" className="lucide lucide-lock stroke-[1] w-4 h-4 mr-2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                            Reset Password</a>
                                        <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400">
                                        </div>
                                        <a href="echo-settings.html" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="users" className="lucide lucide-users stroke-[1] w-4 h-4 mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                            Profile Info</a>
                                        <a href="echo-login.html" className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="power" className="lucide lucide-power stroke-[1] w-4 h-4 mr-2"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
                                            Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div data-tw-backdrop="" aria-hidden="true" tabindex="-1" id="activities-panel" className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&amp;:not(.show)]:duration-[0s,0.2s] [&amp;:not(.show)]:delay-[0.2s,0s] [&amp;:not(.show)]:invisible [&amp;:not(.show)]:opacity-0 [&amp;.show]:visible [&amp;.show]:opacity-100 [&amp;.show]:duration-[0s,0.4s]">
                                <div className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"><a className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14" data-tw-dismiss="modal" href="javascript:;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="x" className="lucide lucide-x stroke-[1] h-8 w-8"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                    </a>
                                    <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-6 py-5">
                                        <h2 className="mr-auto text-base font-medium">Latest Activities</h2>
                                    </div>
                                    <div className="overflow-y-auto flex-1 p-0">
                                        <div className="flex flex-col gap-3.5 px-5 py-3">
                                            <div className="relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:ml-[14px] before:w-px before:bg-slate-200/60 before:content-[''] before:dark:bg-darkmode-400">
                                                <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                                                    <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                                                        <a className="font-medium text-primary" href="">
                                                            Received 5 new emails
                                                        </a>
                                                        <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                                                            Inbox updates
                                                            <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&amp;.primary]:text-primary [&amp;.primary]:bg-primary/10 [&amp;.primary]:border-primary/10 [&amp;.success]:text-success [&amp;.success]:bg-success/10 [&amp;.success]:border-success/10 [&amp;.warning]:text-warning [&amp;.warning]:bg-warning/10 [&amp;.warning]:border-warning/10 [&amp;.info]:text-info [&amp;.info]:bg-info/10 [&amp;.info]:border-info/10 info">
                                                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80"></span>
                                                                <span className="-mt-px">Info</span>
                                                            </span>
                                                        </div>
                                                        <div className="my-3.5 grid grid-cols-1 gap-4">
                                                            <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                                                <div className="hidden w-10 sm:block">
                                                                    <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory">
                                                                    </div>
                                                                </div>
                                                                <div className="mr-auto sm:ml-3.5">
                                                                    <div className="max-w-[8rem] truncate font-medium text-primary">
                                                                        presentation1.pptx
                                                                    </div>
                                                                    <div className="mt-1 text-xs text-slate-500">
                                                                        5.2MB
                                                                    </div>
                                                                </div>
                                                                <div data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer h-5 w-5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical stroke-[1] h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                    </button>
                                                                    <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                                                        <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="copy" className="lucide lucide-copy stroke-[1] mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                                                                                Copy Link</a>
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash" className="lucide lucide-trash stroke-[1] mr-2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                                                                Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                                                <div className="hidden w-10 sm:block">
                                                                    <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory">
                                                                    </div>
                                                                </div>
                                                                <div className="mr-auto sm:ml-3.5">
                                                                    <div className="max-w-[8rem] truncate font-medium text-primary">
                                                                        presentation2.ppt
                                                                    </div>
                                                                    <div className="mt-1 text-xs text-slate-500">
                                                                        4.5MB
                                                                    </div>
                                                                </div>
                                                                <div data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer h-5 w-5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical stroke-[1] h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                    </button>
                                                                    <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                                                        <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="copy" className="lucide lucide-copy stroke-[1] mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                                                                                Copy Link</a>
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash" className="lucide lucide-trash stroke-[1] mr-2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                                                                Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-1.5 text-xs text-slate-500">
                                                            Tue Jun 2022
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                                                    <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                                                        <a className="font-medium text-primary" href="">
                                                            Added a new contact
                                                        </a>
                                                        <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                                                            Added a new contact, Sarah
                                                            <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&amp;.primary]:text-primary [&amp;.primary]:bg-primary/10 [&amp;.primary]:border-primary/10 [&amp;.success]:text-success [&amp;.success]:bg-success/10 [&amp;.success]:border-success/10 [&amp;.warning]:text-warning [&amp;.warning]:bg-warning/10 [&amp;.warning]:border-warning/10 [&amp;.info]:text-info [&amp;.info]:bg-info/10 [&amp;.info]:border-info/10 warning">
                                                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80"></span>
                                                                <span className="-mt-px">Success</span>
                                                            </span>
                                                        </div>
                                                        <div className="my-3.5 grid grid-cols-1 gap-4">
                                                            <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                                                <div className="hidden w-10 sm:block">
                                                                    <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory">
                                                                    </div>
                                                                </div>
                                                                <div className="mr-auto sm:ml-3.5">
                                                                    <div className="max-w-[8rem] truncate font-medium text-primary">
                                                                        spreadsheet.xlsx
                                                                    </div>
                                                                    <div className="mt-1 text-xs text-slate-500">
                                                                        3.4MB
                                                                    </div>
                                                                </div>
                                                                <div data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer h-5 w-5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical stroke-[1] h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                    </button>
                                                                    <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                                                        <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="copy" className="lucide lucide-copy stroke-[1] mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                                                                                Copy Link</a>
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash" className="lucide lucide-trash stroke-[1] mr-2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                                                                Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-1.5 text-xs text-slate-500">
                                                            Sat Dec 2020
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                                                    <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                                                        <a className="font-medium text-primary" href="">
                                                            Uploaded documents
                                                        </a>
                                                        <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                                                            Uploaded important project documents
                                                            <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&amp;.primary]:text-primary [&amp;.primary]:bg-primary/10 [&amp;.primary]:border-primary/10 [&amp;.success]:text-success [&amp;.success]:bg-success/10 [&amp;.success]:border-success/10 [&amp;.warning]:text-warning [&amp;.warning]:bg-warning/10 [&amp;.warning]:border-warning/10 [&amp;.info]:text-info [&amp;.info]:bg-info/10 [&amp;.info]:border-info/10 primary">
                                                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80"></span>
                                                                <span className="-mt-px">Completed</span>
                                                            </span>
                                                        </div>
                                                        <div className="my-3.5 grid grid-cols-1 gap-4">
                                                            <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                                                <div className="hidden w-10 sm:block">
                                                                    <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory">
                                                                    </div>
                                                                </div>
                                                                <div className="mr-auto sm:ml-3.5">
                                                                    <div className="max-w-[8rem] truncate font-medium text-primary">
                                                                        document1.pdf
                                                                    </div>
                                                                    <div className="mt-1 text-xs text-slate-500">
                                                                        2.5MB
                                                                    </div>
                                                                </div>
                                                                <div data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer h-5 w-5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical stroke-[1] h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                    </button>
                                                                    <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                                                        <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="copy" className="lucide lucide-copy stroke-[1] mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                                                                                Copy Link</a>
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash" className="lucide lucide-trash stroke-[1] mr-2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                                                                Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                                                <div className="hidden w-10 sm:block">
                                                                    <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory">
                                                                    </div>
                                                                </div>
                                                                <div className="mr-auto sm:ml-3.5">
                                                                    <div className="max-w-[8rem] truncate font-medium text-primary">
                                                                        document2.docx
                                                                    </div>
                                                                    <div className="mt-1 text-xs text-slate-500">
                                                                        1.8MB
                                                                    </div>
                                                                </div>
                                                                <div data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer h-5 w-5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical stroke-[1] h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                    </button>
                                                                    <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                                                        <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="copy" className="lucide lucide-copy stroke-[1] mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                                                                                Copy Link</a>
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash" className="lucide lucide-trash stroke-[1] mr-2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                                                                Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-1.5 text-xs text-slate-500">
                                                            Fri Jul 2022
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                                                    <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                                                        <a className="font-medium text-primary" href="">
                                                            Logged in successfully
                                                        </a>
                                                        <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                                                            Accessed the dashboard
                                                            <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&amp;.primary]:text-primary [&amp;.primary]:bg-primary/10 [&amp;.primary]:border-primary/10 [&amp;.success]:text-success [&amp;.success]:bg-success/10 [&amp;.success]:border-success/10 [&amp;.warning]:text-warning [&amp;.warning]:bg-warning/10 [&amp;.warning]:border-warning/10 [&amp;.info]:text-info [&amp;.info]:bg-info/10 [&amp;.info]:border-info/10 warning">
                                                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80"></span>
                                                                <span className="-mt-px">Success</span>
                                                            </span>
                                                        </div>
                                                        <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                                                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                                                    <img src="dist/images/projects/project10-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                                </div>
                                                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                                                    <img src="dist/images/projects/project10-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                                </div>
                                                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                                                    <img src="dist/images/projects/project6-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-1.5 text-xs text-slate-500">
                                                            Mon Feb 2021
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                                                    <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                                                        <a className="font-medium text-primary" href="">
                                                            Uploaded audio recordings
                                                        </a>
                                                        <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                                                            Recorded podcast episodes
                                                            <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&amp;.primary]:text-primary [&amp;.primary]:bg-primary/10 [&amp;.primary]:border-primary/10 [&amp;.success]:text-success [&amp;.success]:bg-success/10 [&amp;.success]:border-success/10 [&amp;.warning]:text-warning [&amp;.warning]:bg-warning/10 [&amp;.warning]:border-warning/10 [&amp;.info]:text-info [&amp;.info]:bg-info/10 [&amp;.info]:border-info/10 info">
                                                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80"></span>
                                                                <span className="-mt-px">Completed</span>
                                                            </span>
                                                        </div>
                                                        <div className="my-3.5 grid grid-cols-1 gap-4">
                                                            <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                                                <div className="hidden w-10 sm:block">
                                                                    <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory">
                                                                    </div>
                                                                </div>
                                                                <div className="mr-auto sm:ml-3.5">
                                                                    <div className="max-w-[8rem] truncate font-medium text-primary">
                                                                        audio1.mp3
                                                                    </div>
                                                                    <div className="mt-1 text-xs text-slate-500">
                                                                        4.8MB
                                                                    </div>
                                                                </div>
                                                                <div data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer h-5 w-5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical stroke-[1] h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                    </button>
                                                                    <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                                                        <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="copy" className="lucide lucide-copy stroke-[1] mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                                                                                Copy Link</a>
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash" className="lucide lucide-trash stroke-[1] mr-2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                                                                Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                                                <div className="hidden w-10 sm:block">
                                                                    <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory">
                                                                    </div>
                                                                </div>
                                                                <div className="mr-auto sm:ml-3.5">
                                                                    <div className="max-w-[8rem] truncate font-medium text-primary">
                                                                        audio2.wav
                                                                    </div>
                                                                    <div className="mt-1 text-xs text-slate-500">
                                                                        6.2MB
                                                                    </div>
                                                                </div>
                                                                <div data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer h-5 w-5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical stroke-[1] h-4 w-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                                    </button>
                                                                    <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" className="dropdown-menu absolute z-[9999] hidden invisible opacity-0 translate-y-1" data-state="leave" style={{display: 'none'}}>
                                                                        <div className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40">
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="copy" className="lucide lucide-copy stroke-[1] mr-2 h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                                                                                Copy Link</a>
                                                                            <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash" className="lucide lucide-trash stroke-[1] mr-2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                                                                Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-1.5 text-xs text-slate-500">
                                                            Wed Nov 2020
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div data-tw-backdrop="" aria-hidden="true" tabindex="-1" id="notifications-panel" className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&amp;:not(.show)]:duration-[0s,0.2s] [&amp;:not(.show)]:delay-[0.2s,0s] [&amp;:not(.show)]:invisible [&amp;:not(.show)]:opacity-0 [&amp;.show]:visible [&amp;.show]:opacity-100 [&amp;.show]:duration-[0s,0.4s]">
                                <div className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"><a className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14" data-tw-dismiss="modal" href="javascript:;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="x" className="lucide lucide-x stroke-[1] h-8 w-8"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                    </a>
                                    <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-6 py-5">
                                        <h2 className="mr-auto text-base font-medium">Notifications</h2>
                                        <button className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&amp;:hover:not(:disabled)]:bg-secondary/20 [&amp;:hover:not(:disabled)]:dark:bg-darkmode-100/10 hidden sm:flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shield-check" className="lucide lucide-shield-check stroke-[1] mr-2 h-4 w-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
                                            Mark all as
                                            read</button>
                                    </div>
                                    <div className="overflow-y-auto flex-1 p-0">
                                        <div className="flex flex-col gap-0.5 p-3">
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Received a friend request</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Friend request from John
                                                    </div>
                                                    <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                                                        <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project10-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project8-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project8-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Sat Sep 2021
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Logged in successfully</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Accessed the dashboard
                                                    </div>
                                                    <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                                                        <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project8-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project6-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project5-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Mon Dec 2021
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Posted a status update</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Shared thoughts on the project
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Wed Jul 2020
                                                    </div>
                                                </div>
                                                <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40">
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Task completed: Review Project Proposal</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Reviewed and provided feedback
                                                    </div>
                                                    <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                                                        <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project9-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project2-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project3-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Wed Aug 2022
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Uploaded code files</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Added new code modules
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Sun Aug 2022
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Added a new contact</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Added a new contact, Sarah
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Wed Feb 2022
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Uploaded video files</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Shared video tutorials
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Thu Apr 2020
                                                    </div>
                                                </div>
                                                <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40">
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Uploaded images</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Added project screenshots
                                                    </div>
                                                    <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                                                        <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project7-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project6-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project5-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Sun Jun 2020
                                                    </div>
                                                </div>
                                                <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40">
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Updated profile picture</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Changed profile photo
                                                    </div>
                                                    <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                                                        <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project1-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project6-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project7-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Mon Jul 2021
                                                    </div>
                                                </div>
                                                <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40">
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Uploaded audio recordings</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Recorded podcast episodes
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Tue Jan 2022
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Received 5 new emails</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Inbox updates
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Thu Aug 2020
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Logged out</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Signed out from the dashboard
                                                    </div>
                                                    <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                                                        <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project8-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project5-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                            <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                                                <img src="dist/images/projects/project6-400x400.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Mon Jun 2020
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Uploaded documents</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Uploaded important project documents
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Sat Feb 2021
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Uploaded a spreadsheet</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Added financial data for Q3
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Fri Sep 2020
                                                    </div>
                                                </div>
                                                <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40">
                                                </div>
                                            </a>
                                            <a className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80" href="">
                                                <div>
                                                    <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                                                        <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                                    </div>
                                                </div>
                                                <div className="sm:ml-5">
                                                    <div className="font-medium">Uploaded presentations</div>
                                                    <div className="mt-0.5 text-slate-500">
                                                        Added slides for the team meeting
                                                    </div>
                                                    <div className="mt-1.5 text-xs text-slate-500">
                                                        Tue Nov 2021
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-tw-backdrop="" aria-hidden="true" tabindex="-1" id="switch-account" className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&amp;:not(.show)]:duration-[0s,0.2s] [&amp;:not(.show)]:delay-[0.2s,0s] [&amp;:not(.show)]:invisible [&amp;:not(.show)]:opacity-0 [&amp;.show]:visible [&amp;.show]:opacity-100 [&amp;.show]:duration-[0s,0.4s]">
                            <div className="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]">
                                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400 h-14 justify-center">
                                    <h2 className="text-base font-medium">Switch Account</h2>
                                </div>
                                <div className="p-5 px-2.5 pb-4 pt-3.5">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                                            <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                                                <img src="dist/images/users/user8-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-3.5">
                                                <div className="font-medium">Cate Blanchett</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    cate.blanchett@left4code.com
                                                </div>
                                            </div>
                                            <div className="relative ml-auto h-7 w-7">
                                                <input checked="" type="checkbox" className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0" id="switch-account-0" value="switch-account"/>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" className="lucide lucide-check h-3 w-3 stroke-[1.5]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                                            <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                                                <img src="dist/images/users/user2-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-3.5">
                                                <div className="font-medium">Meryl Streep</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    meryl.streep@left4code.com
                                                </div>
                                            </div>
                                            <div className="relative ml-auto h-7 w-7">
                                                <input type="checkbox" className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0" id="switch-account-1" value="switch-account"/>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" className="lucide lucide-check h-3 w-3 stroke-[1.5]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                                            <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                                                <img src="dist/images/users/user1-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-3.5">
                                                <div className="font-medium">Tom Hanks</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    tom.hanks@left4code.com
                                                </div>
                                            </div>
                                            <div className="relative ml-auto h-7 w-7">
                                                <input type="checkbox" className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0" id="switch-account-2" value="switch-account"/>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" className="lucide lucide-check h-3 w-3 stroke-[1.5]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                                            <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                                                <img src="dist/images/users/user9-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-3.5">
                                                <div className="font-medium">Denzel Washington</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    denzel.washington@left4code.com
                                                </div>
                                            </div>
                                            <div className="relative ml-auto h-7 w-7">
                                                <input type="checkbox" className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0" id="switch-account-3" value="switch-account"/>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" className="lucide lucide-check h-3 w-3 stroke-[1.5]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                                            <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                                                <img src="dist/images/users/user6-50x50.jpg" alt="Tailwise - Admin Dashboard Template"/>
                                            </div>
                                            <div className="ml-3.5">
                                                <div className="font-medium">Jennifer Lawrence</div>
                                                <div className="mt-0.5 text-xs text-slate-500">
                                                    jennifer.lawrence@left4code.com
                                                </div>
                                            </div>
                                            <div className="relative ml-auto h-7 w-7">
                                                <input type="checkbox" className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0" id="switch-account-4" value="switch-account"/>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" className="lucide lucide-check h-3 w-3 stroke-[1.5]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                </div>
                                                <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400 flex h-14 items-center justify-center text-center"><a className="-mt-1 block text-primary" href="">
                                        Login into an Existing Account
                                    </a></div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode content--compact xl:ml-[275px] [&amp;.content--compact]:xl:ml-[91px] mode--light">
            <div className="px-5 mt-16">
                <div className="container">
                    
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        </>
    )
}

export default Dashboard;