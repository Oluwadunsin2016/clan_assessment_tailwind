import PropTypes from "prop-types";

const BasicInformation = ({ formik }) => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-extrabold">Personal Info</h2>
      <p className="text-gray-400 text-sm">
        Please provide your name, email address, and phone number
      </p>
      <div className="my-4">
        <div className="flex justify-between">
          <label htmlFor="name" className="font-semibold text-sm">
            Name
          </label>
          {formik.touched.name && formik.errors.name && (
            <small className="text-red-500 font-semibold">
              {formik.errors.name}
            </small>
          )}
        </div>
        <input
          type="text"
          name="name"
          id=""
          placeholder="e.g. Stephen King"
          className={`border rounded-md block w-full h-10 outline-none focus:border-blue-500 mt-1 px-2 text-sm ${formik.touched.name && formik.errors.name && 'border-red-500'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </div>
      <div className="my-4">
        <div className="flex justify-between">
        <label htmlFor="email" className="font-semibold text-sm">
          Email Address
        </label>
          {formik.touched.email && formik.errors.email && (
            <small className="text-red-500 font-semibold">
              {formik.errors.email}
            </small>
          )}
        </div>
        <input
          type="email"
          name="email"
          id=""
          placeholder="e.g. stephenking@gmail.com"
          className={`border rounded-md block w-full h-10 outline-none focus:border-blue-500 mt-1 px-2 text-sm ${formik.touched.email && formik.errors.email && 'border-red-500'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <div className="my-4">
        <div className="flex justify-between">
        <label htmlFor="phone_number" className="font-semibold text-sm">
          Phone Number
        </label>
          {formik.touched.phone_number && formik.errors.phone_number && (
            <small className="text-red-500 font-semibold">
              {formik.errors.phone_number}
            </small>
          )}
        </div>
        <input
          type="tel"
          name="phone_number"
          id=""
          placeholder="e.g. +1 234 567 89"
          className={`border rounded-md block w-full h-10 outline-none focus:border-blue-500 mt-1 px-2 text-sm ${formik.touched.phone_number && formik.errors.phone_number && 'border-red-500'}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone_number}
        />
      </div>
    </div>
  );
};

BasicInformation.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default BasicInformation;
