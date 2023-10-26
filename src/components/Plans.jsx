import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Plans = ({formik,isChecked,setIsChecked}) => {
const [selectedId, setselectedId] = useState(0);
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Arcade",
      pic: arcade,
      subscription: "$9/mo",
      duration: 9,
      free: " ",
    },
    {
      id: 2,
      name: "Advanced",
      pic: advanced,
      subscription: "$12/mo",
      duration: 12,
      free: " ",
    },
    {
      id: 3,
      name: "Pro",
      pic: pro,
      subscription: "$15/mo",
      duration: 15,
      free: " ",
    },
  ]);

  useEffect(() => {
    if (isChecked) {
      setPlans([
        {
          id: 1,
          name: "Arcade",
          pic: arcade,
          subscription: "$90/yr",
          duration: 90,
          free: "2 months free",
        },
        {
          id: 2,
          name: "Advanced",
          pic: advanced,
          subscription: "$120/yr",
          duration: 120,
          free: "2 months free",
        },
        {
          id: 3,
          name: "Pro",
          pic: pro,
          subscription: "$150/yr",
          duration: 150,
          free: "2 months free",
        },
      ]);
    } else {
      setPlans([
        {
          id: 1,
          name: "Arcade",
          pic: arcade,
          subscription: "$9/mo",
          duration: 9,
          free: " ",
        },
        {
          id: 2,
          name: "Advanced",
          pic: advanced,
          subscription: "$12/mo",
          duration: 12,
          free: " ",
        },
        {
          id: 3,
          name: "Pro",
          pic: pro,
          subscription: "$15/mo",
          duration: 15,
          free: " ",
        },
      ]);
    }
  }, [isChecked]);


  const handleCheckBoxClick=(event)=>{
  setIsChecked(event.target.checked)
  console.log(event.target.checked);
  }

   const select = (id) => {
    setselectedId(id);
    const selected = plans.find((plan) => plan.id == id);
    formik.values.plan = selected;
    formik.values.totalPrice = selected.duration;
  };

  return (
    <div className="p-6 :p-10">
      <h2 className="text-2xl font-extrabold">Select your plan</h2>
      <p className="text-gray-400 text-sm">
        You have the option of monthly or yearly billing.
      </p>

      <div className="grid md:grid-cols-3 gap-3 md:gap-5 my-4 md:my-8">
        {plans.map((plan, index) => (
          <div
            className={`border rounded-md p-3 flex justify-between md:block ${selectedId===plan.id && 'border-[#174A8B] bg-[#F8F9FE]'} hover:cursor-pointer`}
            key={index}
            onClick={()=>select(plan.id)}
          >
            <img
              src={plan.pic}
              className=""
              alt={plan.pic}
              width={35}
              height={35}
            />

            <div className="md:mt-5">
              <h6 className="font-bold m-0 text-sm">{plan.name}</h6>
              <span className="text-xs text-gray-400">{plan.subscription}</span>
              <p className="m-0 text-xs">{plan.free}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 py-2 flex justify-center items-center gap-4 rounded">
        <span className={!isChecked? 'text-[#174A8B]' : 'text-gray-400' }>Monthly</span>
        <label
          htmlFor="AcceptConditions"
          className="relative h-4 w-10 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
        >
          <input
            className="peer sr-only"
            type="checkbox"
            role="switch"
            id="AcceptConditions"
            checked={isChecked}
            onChange={handleCheckBoxClick}
          />
          <span className="absolute inset-0  rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          <span className="absolute inset-y-0 start-0 m-0 h-4 w-4 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
        <span className={isChecked? 'text-[#174A8B]' : 'text-gray-400' }>Yearly</span>
      </div>
    </div>
  );
};

Plans.propTypes = {
  formik: PropTypes.object.isRequired,
  isChecked: PropTypes.bool,
  setIsChecked: PropTypes.func,
};

export default Plans;
