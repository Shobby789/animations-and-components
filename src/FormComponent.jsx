import React, { useState } from "react";

const FormComponent = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    childName: "",
    childAge: "",
    childGender: "",
  });
  const [childImageFile, setChildImageFile] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("address", data.address);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("childName", data.childName);
    formData.append("childAge", data.childAge);
    formData.append("childGender", data.childGender);
    formData.append("childImageFile", childImageFile);

    const response = await fetch("http://localhost:3002/parent_register", {
      method: "POST",
      body: formData,
    });

    const res = await response.json();
    console.log("register res >> ", res);
    // console.log("data >> ", data);
    // console.log("image >> ", childImageFile);
  };

  return (
    <div className="w-full p-10">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full grid grid-cols-3 gap-6">
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-6">
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="childName">Child Name</label>
            <input
              type="text"
              name="childName"
              value={data.childName}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="childGender">child Gender</label>
            <input
              type="text"
              name="childGender"
              value={data.childGender}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="childAge">Child Age</label>
            <input
              type="text"
              name="childAge"
              value={data.childAge}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-6">
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div className="w-full flex flex-col gap-1 items-start">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={data.address}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <label htmlFor="childImageFile">Child Image</label>
          <input
            type="file"
            name="childImageFile"
            onChange={(e) => setChildImageFile(e.target.files[0])}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 px-4 py-2 text-sm font-medium text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
