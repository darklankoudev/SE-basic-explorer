import { useEffect, useState, useRef } from "react";
import "../../Css/pages/landing-page.css";
import "../../Css/themes/echo.css";
import "../../Css/vendors/simplebar.css";
import "../../Css/vendors/tippy.css";
import Banner from "../banner/banner";
import Header from "../header/header";
import { X, GaugeCircle, ArrowLeft, ActivitySquare, BookMarked, ShieldHalf, Cable, TabletSmartphone} from "lucide-react"
import IndexBlockValidator from "../latest";
import { Routes, Route, Link } from "react-router-dom";
import Transactions from "../../pages/transactions/transactions";
import Blocks from "../../pages/blocks/blocks";
import Validator from "../../pages/validators/validators";

const Dashboard = () => {
    const HandleClick = (e) => {
        e.preventDefault();
        console.log('Button clicked!');
       } 

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
        const sideMenu = document.querySelector('.side-menu');
        sideMenu.classList.remove('side-menu--mobile-menu-open');
        sideMenu.classList.remove('close-mobile-menu--mobile-menu-open');
    };

      

    return (
        <>
        <div className="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
            {/* <div className="h-screen relative loading-page loading-page--before-hide [&.loading-page--before-hide]:before:block [&.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&.loading-page--before-hide]:after:block [&.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]"> */}
                <div className="side-menu xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 group inset-y-0 xl:py-3.5 xl:pl-3.5 after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden side-menu--collapsed [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:after:block -ml-[275px] after:hidden">
                    <div className="close-mobile-menu fixed ml-[230px] w-10 h-10 xl:hidden z-50 " onClick={handleCloseMenu}>
                        <a className="mt-3 ml-1 flex left-5" href="#" >
                            <X class="stroke-[1] w-7 h-7 fill-white/10" />
                        </a>
                    </div>
                    <div className="side-menu__content h-full box bg-white/[0.95] rounded-none xl:rounded-xl z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col">
                        <div className="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]">
                            <a className="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-2" href="#" onClick={HandleClick}>
                                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-gradient-to-b from-theme-1 to-theme-2/80 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
                                    <div className="relative h-[16px] w-[16px] -rotate-45 [&_div]:bg-white">
                                        <div className="absolute inset-y-0 left-0 my-auto h-[75%] w-[21%] rounded-full opacity-50">
                                        </div>
                                        <div className="absolute inset-0 m-auto h-[120%] w-[21%] rounded-full"></div>
                                        <div className="absolute inset-y-0 right-0 my-auto h-[75%] w-[21%] rounded-full opacity-50">
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-3.5 font-bold text-xl transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
                                    Thanhphm
                                </div>

                            </a>
                            {/* classList */}
                            <div className="toggle-compact-menu ml-auto hidden h-[20px] w-[20px] items-center justify-center rounded-full border border-slate-600/40 transition-[opacity,transform] hover:bg-slate-600/5 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 3xl:flex" >
                                <ArrowLeft class="h-3.5 w-3.5 stroke-[1.3]" />
                            </div>
                        </div>
                        <div className="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30" >
                            <ul className="scrollable">
                                
                                <li className="side-menu__divider">
                                    DASHBOARDS
                                </li>
                                <li>
                                    <Link to="/" className="side-menu__link side-menu__link--active">
                                        <GaugeCircle className="stroke-[1] w-5 h-5 side-menu__link__icon"/>
                                        <div className="side-menu__link__title">Overview</div>
                                    </Link>
                                 
                                </li>
                                <li>
                                    <Link to="transactions" className="side-menu__link ">
                                        <ActivitySquare size={20} className="stroke-[1] w-5 h-5 side-menu__link__icon"/>
                                        <div className="side-menu__link__title">Transactions</div>
                                    </Link>
                             
                                </li>
                                <li>
                                    <Link to="blocks" className="side-menu__link ">
                                        <BookMarked size={20} className="stroke-[1] w-5 h-5 side-menu__link__icon"/> 
                                        <div className="side-menu__link__title">Blocks</div>
                                    </Link>
                                
                                </li>
                                <li>
                                    <Link to="validators" className="side-menu__link ">
                                        <ShieldHalf size={20} className="stroke-[1] w-5 h-5 side-menu__link__icon" />
                                        <div className="side-menu__link__title">Validators </div>
                                    </Link>
                                   
                                </li>
                                <li className="side-menu__divider">
                                    SERVICES
                                </li>
                                <li>
                                    <Link to="provider" className="side-menu__link ">
                                        <Cable size={20} className="stroke-[1] w-5 h-5 side-menu__link__icon"/>
                                        <div className="side-menu__link__title">Provider</div>
                                    </Link>
                                   
                                </li>                    
                                <li className="side-menu__divider">
                                    INFO
                                </li>
                                <li>
                                    <Link to="contact" className="side-menu__link ">
                                        <TabletSmartphone size={20} className="stroke-[1] w-5 h-5 side-menu__link__icon"/>
                                        <div className="side-menu__link__title">Contact</div>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                      
                    </div>

                    <Header />

                </div>

                <Routes>
                    <Route path='/' element={<Banner />} />
                    <Route path='transactions' element={<Transactions />} />
                    <Route path='blocks' element={<Blocks />} />
                    <Route path='validators'  element={<Validator />} />
                </Routes>
                

             {/* <Banner /> */}

        </div>

        </>
    )
}

export  default Dashboard;