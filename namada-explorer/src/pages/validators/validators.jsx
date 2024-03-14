import TableValidator from "../../components/table/tableValidator";
import "../../Css/themes/echo.css"

const Validator = () => {

    return (
        <>
                <div className="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
                <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode content--compact xl:ml-[275px] mode--light [&.content--compact]:xl:ml-[91px]">
                    <div className="px-5 mt-16">
                        <div className="container">
                            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                                <div className="col-span-12">
                                    <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                                        <div className="text-base font-medium group-[.mode--light]:text-white">
                                            List Validators 
                                        </div>
                                    </div>
                                    <div className="mt-3.5">
                                        <div className="box box--stacked flex flex-col">
                                            <TableValidator />
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

export default Validator;