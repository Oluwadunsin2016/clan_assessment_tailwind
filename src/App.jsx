import { useState } from "react";
import BasicInformation from "./components/BasicInformation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Plans from "./components/Plans";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Appreciation from "./components/Appreciation";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const stepItems = [
    { tab: 1, step: "step 1", directory: "Your Info" },
    { tab: 2, step: "step 2", directory: "Select Plan" },
    { tab: 3, step: "step 3", directory: "Add-ons" },
    { tab: 4, step: "step 4", directory: "Summary" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      plan: {},
      add_ons: [],
      totalPrice: 0,
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least three characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .matches(
          /^([A-Za-z0-9]{3,})[@]([a-z]{2,8})[.]([a-z]{2,})$/,
          "It shoul match this format; stephenking@gmail.com"
        ),
      phone_number: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]{11}$/, "It must be eleven digits"),
    }),
  });

  const next = () => {
    if (currentStep < 4 && formik.isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const back = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = () => {
    setCompleted(true);
    formik.submitForm();
  };
  return (
    <>
      <main className="min-h-[100vh] md:flex justify-center items-center bg-[#EEF5FF]">
        {/* laptop mode */}
        <div className="hidden md:grid grid-cols-6 xl:w-[70%] lg:w-[80%] h-[80vh] bg-white rounded-[10px] shadow-lg p-4 gap-10">
          <div className="side col-span-2 h-full rounded-lg bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover bg-center p-4">
            {stepItems.map((stepItem, index) => (
              <div className="flex items-center gap-4 my-6" key={index}>
                <h5
                  className={`border h-7 w-7 rounded-full text-center pt-[2px] text-sm font-semibold ${
                    currentStep === stepItem.tab ? "bg-[#BFE0FF]" : "text-white"
                  }`}
                >
                  {stepItem.tab}
                </h5>
                <div className="uppercase">
                  <p className="text-gray-300 text-[10px] m-0">
                    {stepItem.step}
                  </p>
                  <p className="m-0 text-white text-[12px] font-bold">
                    {stepItem.directory}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative col-span-4 h-full rounded-lg">
            <div
              className={`min-h-full flex justify-center items-center ${
                completed ? "block" : "hidden"
              }`}
            >
              <Appreciation />
            </div>
            <form
              action=""
              onSubmit={formik.handleSubmit}
              className={completed ? "hidden" : "block"}
            >
              {currentStep == 1 && <BasicInformation formik={formik} />}
              {currentStep == 2 && (
                <Plans
                  formik={formik}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
              )}
              {currentStep == 3 && (
                <AddOns formik={formik} isChecked={isChecked} />
              )}
              {currentStep == 4 && (
                <Summary formik={formik} setCurrentStep={setCurrentStep} />
              )}
            </form>

            <div
              className={`absolute w-full bottom-0 px-5 bg-white flex justify-between ${
                completed ? "hidden" : "block"
              }`}
            >
              {currentStep > 1 && (
                <button
                  className="bg-slate-50 text-gray-400 rounded text-sm px-3 py-2 active:bg-slate-100"
                  onClick={back}
                >
                  Go Back
                </button>
              )}
              {currentStep === 4 ? (
                <button
                  className="bg-blue-800 text-white rounded text-sm px-3 py-2 active:bg-blue-900"
                  onClick={submitForm}
                >
                  Confirm
                </button>
              ) : (
                <button
                  style={{ marginLeft: "auto" }}
                  className="bg-blue-950 text-white rounded text-sm px-3 py-2 active:bg-blue-900"
                  onClick={next}
                >
                  Next Step
                </button>
              )}
            </div>
          </div>
        </div>

        {/* phone mode */}
        <div className="relative block md:hidden">
          <div className="min-h-[12rem] flex justify-center gap-4 bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center p-4">
            {stepItems.map((stepItem, index) => (
              <h5
                className={`border h-7 w-7 rounded-full text-center pt-[2px] text-sm font-semibold ${
                  currentStep === stepItem.tab ? "bg-[#BFE0FF]" : "text-white"
                } mt-4`}
                key={index}
              >
                {stepItem.tab}
              </h5>
            ))}
          </div>

          <div className="absolute inset-0 top-[6rem] main min-h-[28rem] mx-4 rounded-lg bg-white shadow-lg">
            <div
              className={`min-h-full flex justify-center items-center ${
                completed ? "block" : "hidden"
              }`}
            >
              <Appreciation />
            </div>
            <form
              action=""
              onSubmit={formik.handleSubmit}
              className={completed ? "hidden" : "block"}
            >
              {currentStep == 1 && <BasicInformation formik={formik} />}
              {currentStep == 2 && (
                <Plans
                  formik={formik}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
              )}
              {currentStep == 3 && (
                <AddOns formik={formik} isChecked={isChecked} />
              )}
              {currentStep == 4 && (
                <Summary formik={formik} setCurrentStep={setCurrentStep} />
              )}
            </form>
          </div>

          <div
            className={`fixed w-full bottom-0 px-2 py-5 bg-white flex justify-between md:hidden ${
              completed ? "hidden" : "block"
            }`}
          >
            {currentStep > 1 && (
              <button
                className="bg-slate-50 text-gray-400 rounded text-sm px-3 py-2 active:bg-slate-100"
                onClick={back}
              >
                Go Back
              </button>
            )}
            {currentStep === 4 ? (
              <button
                className="bg-blue-800 text-white rounded text-sm px-3 py-2 active:bg-blue-900"
                onClick={submitForm}
              >
                Confirm
              </button>
            ) : (
              <button
                style={{ marginLeft: "auto" }}
                className="bg-blue-950 text-white rounded text-sm px-4 py-2 active:bg-blue-900"
                onClick={next}
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
