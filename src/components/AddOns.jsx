import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const AddOns = ({formik, isChecked }) => {
  const [selectedIds, setselectedIds] = useState([])
  const [add_ons, setAdd_ons] = useState([
    {
      id: 1,
      name: "Online services",
      access: "Access to multiplayer games",
      subscription: "+$1/mo",
      duration: 1,
    },
    {
      id: 2,
      name: "Larger storage",
      access: "Extra 1TB of cloud save",
      subscription: "+$2/mo",
      duration: 2,
    },
    {
      id: 3,
      name: "Customizable profile",
      access: "Custom theme on your profile",
      subscription: "+$2/mo",
      duration: 2,
    },
  ]);

  useEffect(() => {
    if (isChecked) {
      setAdd_ons([
        {
          id: 1,
          name: "Online services",
          access: "Access to multiplayer games",
          subscription: "+$10/yr",
          duration: 10,
        },
        {
          id: 2,
          name: "Larger storage",
          access: "Extra 1TB of cloud save",
          subscription: "+$20/yr",
          duration: 20,
        },
        {
          id: 3,
          name: "Customizable profile",
          access: "Custom theme on your profile",
          subscription: "+$20/yr",
          duration: 20,
        },
      ]);
    } else {
      setAdd_ons([
        {
          id: 1,
          name: "Online services",
          access: "Access to multiplayer games",
          subscription: "+$1/mo",
          duration: 1,
        },
        {
          id: 2,
          name: "Larger storage",
          access: "Extra 1TB of cloud save",
          subscription: "+$2/mo",
          duration: 2,
        },
        {
          id: 3,
          name: "Customizable profile",
          access: "Custom theme on your profile",
          subscription: "+$2/mo",
          duration: 2,
        },
      ]);
    }
  }, [isChecked]);

    const select=(id)=>{
  if (selectedIds.includes(id)) {
    setselectedIds(selectedIds.filter(selected=>selected!=id));
  }else{
  setselectedIds([...selectedIds,id]);
  }

const newadd=add_ons.find(add_on=>add_on.id==id)
  const existed=formik.values.add_ons.find(add_on=>add_on.id==id)

  if (existed) {
    let remaining=formik.values.add_ons.filter(add_on=>add_on.id!=id)
formik.values.add_ons=remaining
formik.values.totalPrice=formik.values.totalPrice-newadd.duration;
  }else{
formik.values.add_ons=[...formik.values.add_ons,newadd]
formik.values.totalPrice=formik.values.totalPrice+newadd.duration;
  }

  }


  return (
     <div className="p-10">
      <h2 className="text-2xl font-extrabold">Pick add-ons</h2>
      <p className="text-gray-400 text-sm">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="gap-3 md:gap-5 my-4 md:my-8">
        {add_ons.map((add_on,i) => (
         <div className={`flex justify-between border items-center py-2 px-4 rounded my-3 ${selectedIds.includes(add_on.id) && 'border-[#174A8B] bg-[#F8F9FE]'} hover:cursor-pointer`} key={i}>
          <div className='flex gap-4 items-center'>
            <div className=" ">
              <input
                type="checkbox"
                value={add_on.id}
                onChange={()=>select(add_on.id)}
              />
            </div>
            <div>
              <h6 className="m-0 font-bold">{add_on.name}</h6>
              <span className="text-sm">{add_on.access}</span>
            </div>
          </div>

          <div className="">
            <small>{add_on.subscription}</small>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

AddOns.propTypes={
formik:PropTypes.object.isRequired,
isChecked:PropTypes.bool,
}

export default AddOns