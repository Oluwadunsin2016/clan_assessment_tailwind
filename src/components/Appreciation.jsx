import thanks from "../assets/images/icon-thank-you.svg";
const Appreciation = () => {
  return (
    <div className="flex justify-center items-center px-8">
   <div className="md:w-[70%] lg:w-[60%] h-100 flex flex-col justify-center items-center">
     <img
        src={thanks}
        alt="thanks"
        width={70}
        height={70}
      />
      <h2 className="text-2xl my-4">Thank you!</h2>
      <p className="text-center text-gray-400">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
   </div>
    </div>
  )
}

export default Appreciation