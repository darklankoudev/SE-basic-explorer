import "../../Css/themes/echo.css"
import "../../Css/vendors/simplebar.css"
import "../../Css/vendors/tippy.css"
import Banner from "../banner/banner"
import Header from "../header/header"


const Dashboard = () => {


    return (
        <>
        <div class="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
            {/* <div class="h-screen relative loading-page loading-page--before-hide [&.loading-page--before-hide]:before:block [&.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&.loading-page--before-hide]:after:block [&.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]"> */}
                <div class="side-menu xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 group inset-y-0 xl:py-3.5 xl:pl-3.5 after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden side-menu--collapsed [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:after:block -ml-[275px] after:hidden">
                    <div class="close-mobile-menu fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50 [&.close-mobile-menu--mobile-menu-open]:flex hidden">
                        <a class="mt-5 ml-5" href="">
                            <i data-tw-merge="" data-lucide="x" class="stroke-[1] w-8 h-8 text-white"></i>
                        </a>
                    </div>
                    <div class="side-menu__content h-full box bg-white/[0.95] rounded-none xl:rounded-xl z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col">
                        <div class="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]">
                            <a class="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-2" href="">
                                <div class="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-gradient-to-b from-theme-1 to-theme-2/80 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                                    <div class="relative h-[16px] w-[16px] -rotate-45 [&_div]:bg-white">
                                        <div class="absolute inset-y-0 left-0 my-auto h-[75%] w-[21%] rounded-full opacity-50">
                                        </div>
                                        <div class="absolute inset-0 m-auto h-[120%] w-[21%] rounded-full"></div>
                                        <div class="absolute inset-y-0 right-0 my-auto h-[75%] w-[21%] rounded-full opacity-50">
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-3.5 font-bold text-xl transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
                                  Thanhphm
                                </div> 
                            </a>
                            <a class="toggle-compact-menu ml-auto hidden h-[20px] w-[20px] items-center justify-center rounded-full border border-slate-600/40 transition-[opacity,transform] hover:bg-slate-600/5 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 3xl:flex" href="">
                                <i data-tw-merge="" data-lucide="arrow-left" class="h-3.5 w-3.5 stroke-[1.3]"></i>
                            </a>
                        </div>
                        <div class="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30">
                            <ul class="scrollable">
                                
                                <li class="side-menu__divider">
                                    DASHBOARDS
                                </li>
                                <li>
                                    <a href="" class="side-menu__link ">
                                        <i data-tw-merge="" data-lucide="gauge-circle" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                        <div class="side-menu__link__title">Overview</div>
                                    </a>
                                 
                                </li>
                                <li>
                                    <a href="" class="side-menu__link side-menu__link--active ">
                                        <i data-tw-merge="" data-lucide="activity-square" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                        <div class="side-menu__link__title">Transactions</div>
                                    </a>
                             
                                </li>
                                <li>
                                    <a href="" class="side-menu__link ">
                                        <i data-tw-merge="" data-lucide="book-marked" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                        <div class="side-menu__link__title">Blocks</div>
                                    </a>
                                
                                </li>

                                <li>
                                    <a href="" class="side-menu__link ">
                                        <i data-tw-merge="" data-lucide="shield-half" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                        <div class="side-menu__link__title">Validators </div>
                                    </a>
                                   
                                </li>

                                <li class="side-menu__divider">
                                    SERVICES
                                </li>

                                <li>
                                    <a href="" class="side-menu__link ">
                                        <i data-tw-merge="" data-lucide="briefcase" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                        <div class="side-menu__link__title">Provider</div>
                                    </a>
                                   
                                </li>
                                
                                
                                <li class="side-menu__divider">
                                    INFO
                                </li>
                                <li>
                                    <a href="javascript:;" class="side-menu__link ">
                                        <i data-tw-merge="" data-lucide="table2" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                        <div class="side-menu__link__title">Products</div>
                                        <i data-tw-merge="" data-lucide="chevron-down" class="stroke-[1] w-5 h-5 side-menu__link__chevron"></i>
                                    </a>
                                    
                                    <ul class="hidden">
                                        <li>
                                            <a href="" class="side-menu__link ">
                                                <i data-tw-merge="" data-lucide="layout-panel-top" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                                <div class="side-menu__link__title">
                                                    Product List
                                                </div>
                                            </a>
                                            
                                        </li>
                                        <li>
                                            <a href="" class="side-menu__link ">
                                                <i data-tw-merge="" data-lucide="layout-panel-left" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                                <div class="side-menu__link__title">
                                                    Product Grid
                                                </div>
                                            </a>
                                            
                                        </li>
                                    </ul>
                                    
                                </li>
                                <li>
                                    <a href="" class="side-menu__link ">
                                        <i data-tw-merge="" data-lucide="tablet-smartphone" class="stroke-[1] w-5 h-5 side-menu__link__icon"></i>
                                        <div class="side-menu__link__title">Contacts</div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <Header />

                </div>

             <Banner />

            {/* </div> */}
            
        </div>
        </>
    )
}

export  default Dashboard;