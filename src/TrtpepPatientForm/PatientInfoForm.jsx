import React, { useState } from "react";

const PatientInfoForm = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      patientInfo: {
        ...prevState.patientInfo,
        [name]: value,
      },
    }));

    if (name === "dob") {
      const age = calculateAge(value);
      if (age < 24) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          dob: "Patients under 24 are not eligible for treatment",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          dob: "",
        }));
      }
    }
  };

  return (
    <div className="w-full">
      <div>
        <label
          htmlFor="full-name"
          className="font-semibold text-gray-500 text-sm"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className="text-[13px] text-gray-500">
            First
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.patientInfo.firstName}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName" className="text-[13px] text-gray-500">
            Last
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.patientInfo.lastName}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="email"
            className="font-semibold text-gray-500 text-sm"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.patientInfo.email}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="phoneNumber"
            className="font-semibold text-gray-500 text-sm"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.patientInfo.phoneNumber}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 mt-4">
        <label htmlFor="dob" className="font-semibold text-gray-500 text-sm">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <p className="text-red-500 text-[13px]">
          Patients under 24 not eligible for treatment
        </p>
        <input
          type="date"
          name="dob"
          value={formData.patientInfo.dob}
          onChange={handleInputChange}
          className="text-sm p-2 border outline-none rounded"
        />
      </div>
    </div>
  );
};

export default PatientInfoForm;
