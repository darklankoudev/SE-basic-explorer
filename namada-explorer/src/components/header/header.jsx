import "../../Css/themes/echo.css"
import "../../Css/vendors/simplebar.css"
import "../../Css/vendors/tippy.css"


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

                    <div class="fixed inset-x-0 top-0 mt-3.5 h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px]">
                        <div class="top-bar absolute left-0 xl:left-3.5 right-0 h-full mx-5 group before:content-[''] before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur">
                            <div class="box group-[.top-bar--active]:box container flex h-full w-full items-center border-transparent bg-transparent shadow-none transition-[padding,background-color,border-color] duration-300 ease-in-out group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2 group-[.top-bar--active]:px-5">
                                
                                {/* <!-- Sự kiện sidebar và search  --> */}

                                <div class="flex items-center gap-1 xl:hidden">
                                    <a class="p-2 text-white rounded-full open-mobile-menu hover:bg-white/5" href="">
                                        <i data-tw-merge="" data-lucide="align-justify" class="stroke-[1] h-[18px] w-[18px]"></i>
                                    </a>
                                    <a class="p-2 text-white rounded-full hover:bg-white/5" data-tw-toggle="modal" data-tw-target="#quick-search" href="javascript:;">
                                        <i data-tw-merge="" data-lucide="search" class="stroke-[1] h-[18px] w-[18px]"></i>
                                    </a>
                                </div>

                                {/* <!-- kết thúc sự kiện sidebar và search --> */}

                                {/* <!-- BEGIN: Breadcrumb --> */}
                                <nav aria-label="breadcrumb" class="flex flex-1 hidden xl:block">
                                    <ol class="flex items-center text-theme-1 dark:text-slate-300 text-white/90">
                                        <li class="">
                                            <a href="">App</a>
                                        </li>
                                        <li class="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white">
                                            <a href="">Overview</a>
                                        </li>
                                       
                                    </ol>
                                </nav>
                                {/* <!-- END: Breadcrumb -->
                                <!-- BEGIN: Search --> */}
                                <div class="relative justify-center flex-1 hidden xl:flex" data-tw-toggle="modal" data-tw-target="#quick-search">
                                    <div class="flex w-[350px] cursor-pointer items-center rounded-[0.5rem] border border-transparent bg-white/[0.12] px-3.5 py-2 text-white/60 transition-colors duration-300 hover:bg-white/[0.15] hover:duration-100">
                                        <i data-tw-merge="" data-lucide="search" class="stroke-[1] h-[18px] w-[18px]"></i>
                                        <div class="ml-2.5 mr-auto">Quick search ...</div>
                                        
                                    </div>
                                </div>
                                <div id="quick-search" aria-hidden="true" tabindex="-1" class="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 overflow-y-hidden z-[60] [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.1s]">
                                    <div class="relative mx-auto my-2 w-[95%] scale-95 transition-transform group-[.show]:scale-100 sm:mt-40 sm:w-[600px] lg:w-[700px]">
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 flex w-12 items-center justify-center">
                                                <i data-tw-merge="" data-lucide="search" class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500"></i>
                                            </div>
                                            <input data-tw-merge="" type="text" placeholder="Search height, txh,..." class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full border-slate-200 placeholder:text-slate-400/90 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-lg border-0 py-3.5 pl-12 pr-14 text-base shadow-lg focus:ring-0" />
                                            <div class="absolute inset-y-0 right-0 flex w-14 items-center">
                                                <div class="mr-auto rounded-[0.4rem] border bg-slate-100 px-2 py-1 text-xs text-slate-500/80">
                                                    ESC
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="flex items-center flex-1">
                                    <div class="flex items-center gap-1 ml-auto">
                                        <a class="p-2 text-white rounded-full hover:bg-white/5" data-tw-toggle="modal" data-tw-target="#activities-panel" href="javascript:;">
                                            <i data-tw-merge="" data-lucide="layout-grid" class="stroke-[1] h-[18px] w-[18px]"></i>
                                        </a>
                                        <a class="p-2 text-white rounded-full request-full-screen hover:bg-white/5" href="">
                                            <i data-tw-merge="" data-lucide="expand" class="stroke-[1] h-[18px] w-[18px]"></i>
                                        </a>
                                    </div>
                                    <div data-tw-merge="" data-tw-placement="bottom-end" class="dropdown relative ml-5"><button data-tw-toggle="dropdown" aria-expanded="false" class="cursor-pointer image-fit h-[36px] w-[36px] overflow-hidden rounded-full border-[3px] border-white/[0.15]"><img src="dist/images/users/user5-50x50.jpg" alt="Tailwise - Admin Dashboard Template" />
                                        </button>
                                        <div data-transition="" data-selector=".show" data-enter="transition-all ease-linear duration-150" data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1" data-enter-to="!mt-1 visible opacity-100 translate-y-0" data-leave="transition-all ease-linear duration-150" data-leave-from="!mt-1 visible opacity-100 translate-y-0" data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1" class="dropdown-menu absolute z-[9999] hidden">
                                            <div data-tw-merge="" class="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-56 mt-1">
                                                <a data-tw-toggle="modal" data-tw-target="#switch-account" class="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"><i data-tw-merge="" data-lucide="toggle-left" class="stroke-[1] w-4 h-4 mr-2"></i>
                                                    Choose Chain
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div data-tw-backdrop="" aria-hidden="true" tabindex="-1" id="switch-account" class="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]">
                                    <div data-tw-merge="" class="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]">
                                        <div class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400 h-14 justify-center">
                                            <h2 class="text-base font-medium">Swicth Chain</h2>
                                        </div>
                                        <div data-tw-merge="" class="p-5 px-2.5 pb-4 pt-3.5">
                                            <div class="flex flex-col gap-1.5">
                                                <div class="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                                                    {/* <!-- <div class="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                                                        <img src="dist/images/users/user8-50x50.jpg" alt="Tailwise - Admin Dashboard Template">
                                                    </div> --> */}
                                                    <div class="ml-3.5">
                                                        <div class="font-medium">Namada</div>
                                                        <div class="mt-0.5 text-xs text-slate-500">
                                                            shielded-expedition.88f17d1d14
                                                        </div>
                                                    </div>
                                                    <div class="relative ml-auto h-7 w-7">
                                                        <input data-tw-merge="" checked="" type="checkbox" class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0" id="switch-account-0" value="switch-account" />
                                                        <div class="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                                                            <i data-tw-merge="" data-lucide="check" class="h-3 w-3 stroke-[1.5]"></i>
                                                        </div>
                                                        <div class="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode content--compact xl:ml-[275px] mode--light [&.content--compact]:xl:ml-[91px]">
                    <div class="px-5 mt-16">
                        <div class="container">
                            <div class="grid grid-cols-12 gap-x-6 gap-y-10">
                                <div class="col-span-12">
                                    <div>
                                        <div class="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                                            <div class="text-base font-medium group-[.mode--light]:text-white">
                                                Namada Explorer Dashboard
                                            </div>
                                 
                                        </div>
                                        <div class="tab-content box box--stacked mt-3.5">
                                            <div data-transition="" data-selector=".active" data-enter="transition-[visibility,opacity] ease-linear duration-150" data-enter-from="!p-0 !h-0 overflow-hidden invisible opacity-0" data-enter-to="visible opacity-100" data-leave="transition-[visibility,opacity] ease-linear duration-150" data-leave-from="visible opacity-100" data-leave-to="!p-0 !h-0 overflow-hidden invisible opacity-0" id="example-1" role="tabpanel" aria-labelledby="example-1-tab" class="tab-pane active flex flex-col gap-2 p-1.5 leading-relaxed xl:flex-row">
                                                <div class="grid w-full grid-cols-4 gap-2">
                                                    <div class="box relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border-0 border-slate-200/60 bg-slate-50 bg-gradient-to-b from-theme-2/90 to-theme-1/[0.85] p-5 before:absolute before:right-0 before:top-0 before:-mr-[62%] before:h-[130%] before:w-full before:rotate-45 before:bg-gradient-to-b before:from-black/[0.15] before:to-transparent before:content-[''] sm:col-span-2 xl:col-span-1">
                                                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10">
                                                            <i data-tw-merge="" data-lucide="database" class="stroke-[1] h-6 w-6 fill-white/10 text-white"></i>
                                                        </div>
                                                        <div class="mt-5 flex items-center">
                                                            <div class="text-base text-white/70">
                                                                Chain ID
                                                            </div>
                                                        </div>
                                                        <div class="mt-1 text-2xl font-medium text-white">
                                                                247,220
                                                        </div>
                                                        
                                                     
                                                    </div>
                                                    <div class="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                            <i data-tw-merge="" data-lucide="layout" class="stroke-[1] h-6 w-6 fill-primary/10 text-primary"></i>
                                                        </div>
                                                        <div class="mt-5 flex items-center">
                                                            <div class="text-base text-slate-500">
                                                                Epoch
                                                            </div>                                                          
                                                        </div>
                                                        <div class="mt-1 text-2xl font-medium">273,235</div>                                                                                                            
                                                    </div>

                                                    <div class="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                            <i data-tw-merge="" data-lucide="app-window" class="stroke-[1] h-6 w-6 fill-primary/10 text-primary"></i>
                                                        </div>
                                                        <div class="mt-5 flex items-center">
                                                            <div class="text-base text-slate-500">
                                                                Block Height
                                                            </div>
                                                        </div>

                                                        <div class="mt-1 text-2xl font-medium">124,625</div>
                                                        
                                                        
                                                    </div>
                                                    <div class="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-info/10 bg-info/10">
                                                            <i data-tw-merge="" data-lucide="box" class="stroke-[1] h-6 w-6 fill-info/10 text-info"></i>
                                                        </div>
                                                        <div class="mt-5 flex items-center">
                                                             <div class="text-base text-slate-500">
                                                                Transparent Transfers
                                                            </div>
                                                        </div>

                                                        <div class="mt-1 text-2xl font-medium">749,220</div>
                                                       
                                                        
                                                    </div>
                                                    <div class="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                            <i data-tw-merge="" data-lucide="layout" class="stroke-[1] h-6 w-6 fill-primary/10 text-primary"></i>
                                                        </div>
                                                        <div class="mt-5 flex items-center">
                                                           <div class="text-base text-slate-500">
                                                                Shielded Transfers
                                                            </div>                                                           
                                                        </div>
                                                        <div class="mt-1 text-2xl font-medium">273,235</div>
                                                        
                                                        
                                                    </div>
                                                    <div class="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                            <i data-tw-merge="" data-lucide="layout" class="stroke-[1] h-6 w-6 fill-primary/10 text-primary"></i>
                                                        </div>
                                                        <div class="mt-5 flex items-center">                                                          
                                                             <div class="text-base text-slate-500">
                                                              NAAN Total Supply
                                                            </div>
                                                        </div>
                                                        <div class="mt-1 text-2xl font-medium">273,235</div>
                                                       
                                                        
                                                    </div>
                                                    <div class="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                            <i data-tw-merge="" data-lucide="layout" class="stroke-[1] h-6 w-6 fill-primary/10 text-primary"></i>
                                                        </div>
                                                        <div class="mt-5 flex items-center">
                                                            <div class="text-base text-slate-500">
                                                                NAAN Total Stake
                                                            </div>                                                           
                                                        </div>
                                                        <div class="mt-1 text-2xl font-medium">273,235</div>
                                                                                                              
                                                    </div>
                                                    <div class="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                            <i data-tw-merge="" data-lucide="layout" class="stroke-[1] h-6 w-6 fill-primary/10 text-primary"></i>
                                                        </div>
                                                        <div class="mt-5 flex items-center">
                                                            <div class="text-base text-slate-500">
                                                                Validators Active
                                                            </div>                                                           
                                                        </div>
                                                        <div class="mt-1 text-2xl font-medium">273,235</div>                
                                                    </div>
                                                </div>
                                                
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
        </>
    )
}

export  default Dashboard;