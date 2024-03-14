import TableLatestVal from "../table/tableLatestVal";

const LatestValidator = () => {
  return (
    <>
      <div className="col-span-12 flex flex-col gap-y-10 md:col-span-6 xl:col-span-6">
        <div>
          <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
            <div className="text-base font-medium">Top 10 Validators</div>
          </div>
          <div className="box box--stacked mt-3.5 p-5">
            <TableLatestVal />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestValidator;
