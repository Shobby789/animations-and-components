import React from "react";
import { states } from "../constants/states";

const ShippingInfoForm = ({ formData, setFormData }) => {
  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      shippingInfo: {
        ...prevState.shippingInfo,
        [name]: value,
      },
    }));
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      billingInfo: {
        ...prevState.billingInfo,
        [name]: value,
      },
    }));
  };

  // Handler for checkbox change
  // const handleCheckboxChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     shippingInfo: {
  //       ...prevState.shippingInfo,
  //       isBillingSameAsShipping: e.target.checked,
  //     },
  //     billingInfo: e.target.checked
  //       ? prevState.shippingInfo
  //       : { ...prevState.billingInfo, isBillingSameAsShipping: false },
  //   }));
  // };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;

    setFormData((prevState) => ({
      ...prevState,
      isBillingSameAsShipping: isChecked,
    }));
  };

  return (
    <div>
      <div>
        <h6 className="font-semibold text-gray-500 text-sm">
          Shipping Address <span className="text-red-500">*</span>
        </h6>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <label htmlFor="streetAddress" className="text-[13px] text-gray-500">
          Street Address
        </label>
        <input
          type="text"
          name="shippingStreetAddress"
          value={formData.shippingInfo.shippingStreetAddress || ""}
          onChange={handleInputChange}
          className="text-sm p-2 border outline-none rounded"
        />
      </div>

      <div className="flex flex-col gap-1 mt-3">
        <label htmlFor="addressLine" className="text-[13px] text-gray-500">
          Address Line
        </label>
        <input
          type="text"
          name="shippingAddressLine"
          value={formData.shippingInfo.shippingAddressLine || ""}
          onChange={handleInputChange}
          className="text-sm p-2 border outline-none rounded"
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-[13px] text-gray-500">
            City
          </label>
          <input
            type="text"
            name="shippingCity"
            value={formData.shippingInfo.shippingCity || ""}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="state" className="text-[13px] text-gray-500">
            State
          </label>
          <select
            name="shippingState"
            value={formData.shippingInfo.shippingState || ""}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          >
            {states.map((s, index) => {
              return (
                <option value={s} key={index}>
                  {s}
                </option>
              );
            })}
          </select>
          {/* <input
            type="text"
            name="shippingState"
            value={formData.shippingInfo.shippingState || ""}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          /> */}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="zipCode" className="text-[13px] text-gray-500">
            ZIP Code
          </label>
          <input
            type="text"
            name="shippingZipCode"
            value={formData.shippingInfo.shippingZipCode || ""}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div></div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <h6 className="font-semibold text-gray-500 text-sm">
          Billing Address <span className="text-red-500">*</span>
        </h6>
        <p className="text-xs text-gray-500">
          Billing address used for credit card authorization only.
        </p>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.shippingInfo.isBillingSameAsShipping}
            onChange={(e) =>
              setFormData({
                ...formData,
                shippingInfo: {
                  ...formData.shippingInfo,
                  isBillingSameAsShipping: e.target.checked,
                },
              })
            }
          />
          <label
            htmlFor="isBillingSameAsShipping"
            className="font-normal text-gray-500 text-sm"
          >
            Same as shipping address
          </label>
        </div>
      </div>

      {/* Billing address fields */}
      {/* Billing address fields */}
      {!formData.shippingInfo.isBillingSameAsShipping ? (
        <>
          <div className="flex flex-col gap-1 mt-4">
            <label
              htmlFor="billingStreetAddress"
              className="text-[13px] text-gray-500"
            >
              Street Address 2
            </label>
            <input
              type="text"
              name="billingStreetAddress"
              value={formData.billingInfo.billingStreetAddress || ""}
              onChange={handleInputChange2}
              className="text-sm p-2 border outline-none rounded"
            />
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <label
              htmlFor="billingAddressLine2"
              className="text-[13px] text-gray-500"
            >
              Address Line 2
            </label>
            <input
              type="text"
              name="billingAddressLine"
              value={formData.billingInfo.billingAddressLine || ""}
              onChange={handleInputChange2}
              className="text-sm p-2 border outline-none rounded"
            />
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="billingCity"
                className="text-[13px] text-gray-500"
              >
                City
              </label>
              <input
                type="text"
                name="billingCity"
                value={formData.billingInfo.billingCity || ""}
                onChange={handleInputChange2}
                className="text-sm p-2 border outline-none rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="billingState"
                className="text-[13px] text-gray-500"
              >
                State
              </label>
              <select
                name="billingState"
                value={formData.billingInfo.billingState || ""}
                onChange={handleInputChange2}
                className="text-sm p-2 border outline-none rounded"
              >
                {states.map((s, index) => {
                  return (
                    <option value={s} key={index}>
                      {s}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
            <div className="flex flex-col gap-1 mt-3">
              <label
                htmlFor="billingZipCode"
                className="text-[13px] text-gray-500"
              >
                ZIP Code
              </label>
              <input
                type="text"
                name="billingZipCode"
                value={formData.billingInfo.billingZipCode || ""}
                onChange={handleInputChange2}
                className="text-sm p-2 border outline-none rounded"
              />
            </div>
          </div>
        </>
      ) : null}
      <div className="">
        <p className="mt-4 text-red-600 text-sm font-medium">
          Delivery charges will be applied $35.
        </p>
      </div>
    </div>
  );
};

export default ShippingInfoForm;
