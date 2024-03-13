import "../../Css/pages/landing-page.css";
import "../../Css/themes/echo.css";
import "../../Css/vendors/simplebar.css";
import "../../Css/vendors/tippy.css";
import { Activity, Album, Database, Box, Package, BadgeDollarSign, BadgeCheck, ShieldCheck } from "lucide-react";


const Banner = () => {

    return (
        <>
            <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode content--compact xl:ml-[275px] mode--light [&.content--compact]:xl:ml-[91px]">
                <div className="px-5 mt-16">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                            <div className="col-span-12">
                                <div>
                                    <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                                        <div className="text-base font-medium group-[.mode--light]:text-white">
                                            Namada Explorer Overview
                                        </div>
                                
                                    </div>
                                    <div className="tab-content box box--stacked mt-3.5">
                                        <div data-transition="" data-selector=".active" data-enter="transition-[visibility,opacity] ease-linear duration-150" data-enter-from="!p-0 !h-0 overflow-hidden invisible opacity-0" data-enter-to="visible opacity-100" data-leave="transition-[visibility,opacity] ease-linear duration-150" data-leave-from="visible opacity-100" data-leave-to="!p-0 !h-0 overflow-hidden invisible opacity-0" id="example-1" role="tabpanel" aria-labelledby="example-1-tab" className="tab-pane active flex flex-col gap-2 p-1.5 leading-relaxed xl:flex-row">
                                            <div className="grid w-full grid-cols-4 gap-2">
                                                <div className="box relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border-0 border-slate-200/60 bg-slate-50 bg-gradient-to-b from-theme-2/90 to-theme-1/[0.85] p-5 before:absolute before:right-0 before:top-0 before:-mr-[62%] before:h-[130%] before:w-full before:rotate-45 before:bg-gradient-to-b before:from-black/[0.15] before:to-transparent before:content-[''] sm:col-span-2 xl:col-span-1">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10">
                                                        <Database class="stroke-[1] h-6 w-6 fill-white/10 text-white" />
                                                    </div>
                                                    <div className="mt-5 flex items-center">
                                                        <div className="text-base text-white/70">
                                                            Chain ID
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 text-2xl font-medium text-white">
                                                            247,220
                                                    </div>
                                                    
                                                    
                                                </div>
                                                <div className="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">        
                                                        <Activity className="stroke-[1] h-6 w-6 fill-primary/10 text-primary" />
                                                    </div>
                                                    <div className="mt-5 flex items-center">
                                                        <div className="text-base text-slate-500">
                                                            Epoch
                                                        </div>                                                          
                                                    </div>
                                                    <div className="mt-1 text-2xl font-medium">273,235</div>                                                                                                            
                                                </div>

                                                <div className="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                        <Album  className="stroke-[1] h-6 w-6 fill-primary/10 text-primary" /> 
                                                    </div>
                                                    <div className="mt-5 flex items-center">
                                                        <div className="text-base text-slate-500">
                                                            Block Height
                                                        </div>
                                                    </div>

                                                    <div className="mt-1 text-2xl font-medium">124,625</div>
                                                    
                                                    
                                                </div>
                                                <div className="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-info/10 bg-info/10">
                                                        <Box className="stroke-[1] h-6 w-6 fill-primary/10 text-primary" />
                                                    </div>
                                                    <div className="mt-5 flex items-center">
                                                            <div className="text-base text-slate-500">
                                                            Transparent Transfers
                                                        </div>
                                                    </div>

                                                    <div className="mt-1 text-2xl font-medium">749,220</div>
                                                    
                                                    
                                                </div>
                                                <div className="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                        <Package className="stroke-[1] h-6 w-6 fill-primary/10 text-primary" />
                                                    </div>
                                                    <div className="mt-5 flex items-center">
                                                        <div className="text-base text-slate-500">
                                                            Shielded Transfers
                                                        </div>                                                           
                                                    </div>
                                                    <div className="mt-1 text-2xl font-medium">273,235</div>
                                                    
                                                    
                                                </div>
                                                <div className="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                        <BadgeDollarSign className="stroke-[1] h-6 w-6 fill-primary/10 text-primary" />
                                                    </div>
                                                    <div className="mt-5 flex items-center">                                                          
                                                            <div className="text-base text-slate-500">
                                                            NAAN Total Supply
                                                        </div>
                                                    </div>
                                                    <div className="mt-1 text-2xl font-medium">273,235</div>
                                                    
                                                    
                                                </div>
                                                <div className="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                        <BadgeCheck data-tw-merge="" data-lucide="layout" className="stroke-[1] h-6 w-6 fill-primary/10 text-primary" />
                                                    </div>
                                                    <div className="mt-5 flex items-center">
                                                        <div className="text-base text-slate-500">
                                                            NAAN Total Stake
                                                        </div>                                                           
                                                    </div>
                                                    <div className="mt-1 text-2xl font-medium">273,235</div>
                                                                                                            
                                                </div>
                                                <div className="relative col-span-4 flex-1 overflow-hidden rounded-[0.6rem] border bg-slate-50/50 p-5 sm:col-span-2 xl:col-span-1">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10">
                                                        <ShieldCheck className="stroke-[1] h-6 w-6 fill-primary/10 text-primary" />
                                                    </div>
                                                    <div className="mt-5 flex items-center">
                                                        <div className="text-base text-slate-500">
                                                            Validators Active
                                                        </div>                                                           
                                                    </div>
                                                    <div className="mt-1 text-2xl font-medium">273,235</div>                
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
        </>
    )
}

export default Banner;