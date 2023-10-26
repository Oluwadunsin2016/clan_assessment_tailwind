import PropType from "prop-types";

const Summary = ({ formik, setCurrentStep }) => {
  const change = () => {
    setCurrentStep(2);
  };
  return (
    <div className="p-10">
      <h2 className="text-2xl font-extrabold">Finishing up</h2>
      <p className="text-gray-400 text-sm">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-[#F8F9FE] my-4 md:my-8 p-3 rounded-md">
        <div className="flex justify-between m-0 p-0">
          <h6 className="font-bold">{`${formik.values.plan.name}(${
            formik.values.plan.subscription.endsWith("mo")
              ? "Monthly"
              : "Yearly"
          })`}</h6>
          <h6 className="font-bold">{formik.values.plan.subscription}</h6>
        </div>
        <span
          className="text-sm underline hover:cursor-pointer hover:text-blue-800"
          onClick={change}
        >
          Change
        </span>
        <hr />
        <div>
          {formik.values.add_ons.map((add_on, i) => {
            return (
              <div className="flex justify-between mt-2" key={i}>
                <span className="text-gray-400 text-sm">{add_on.name}</span>
                <p className="text-sm">{add_on.subscription}</p>
              </div>
            );
          })}
        </div>
      </div>
       <div className="total flex justify-between">
        <span className="text-gray-400 text-sm">
          Total
          {`(${
            formik.values.plan.subscription.endsWith("mo")
              ? "per month"
              : "per year"
          })`}
        </span>
        <h5 className="text-[#174A8B] font-bold">{formik.values.plan.subscription.endsWith("mo")?`$${formik.values.totalPrice}/mo`:`$${formik.values.totalPrice}/yr`}</h5>
      </div>
    </div>
  );
};

Summary.propTypes = {
  formik: PropType.object.isRequired,
  setCurrentStep: PropType.func,
};

export default Summary;
