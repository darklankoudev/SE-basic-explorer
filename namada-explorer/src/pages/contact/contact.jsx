import TableContact from "../../components/table/tableContact";
import "../../Css/themes/echo.css";

const Contact = () => {
  return (
    <>
      <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode content--compact xl:ml-[275px] mode--light [&.content--compact]:xl:ml-[91px]">
        <div className="px-5 mt-16">
          <div className="container">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10">
              <div className="col-span-12">
                <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                  <div className="text-base font-medium group-[.mode--light]:text-white">
                    Info
                  </div>
                </div>
                <div className="mt-3.5">
                  <div className="box box--stacked flex flex-col">
                    <TableContact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
