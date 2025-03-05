import React, { useState, useEffect } from "react";
import TherapyForm from "./TherapyForm";
import LabWorkForm from "./LabWorkForm";
import productsServices from "../services/productServices";

const NewPatientForm = () => {
  const [formData2, setFormData2] = useState({
    therapies: [],
    labWork: [],
  });
  const [therapies, setTherapies] = useState([]);
  const [labWork, setLabWork] = useState([]);
  const [selectedTherapies, setSelectedTherapies] = useState([]);
  const [selectedLabWork, setSelectedLabWork] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  console.log("selectedLabWork >> ", selectedLabWork);

  useEffect(() => {
    const fetchTherapies = async () => {
      try {
        const res = await productsServices.fetchProducts();
        setTherapies(res?.products[0]?.therapies || []);
        setLabWork(res?.products[0].labWork || []);
      } catch (error) {
        console.error("Error fetching therapies:", error);
      }
    };
    fetchTherapies();
  }, []);

  // Validate if all therapies have a selected option before moving to next step
  const handleNext = () => {
    if (currentStep === 1) {
      // Step 1 validation: TherapyForm
      const allTherapiesSelected = therapies.every((therapy) =>
        selectedTherapies.some(
          (selected) => selected.therapyName === therapy.name
        )
      );

      if (!allTherapiesSelected) {
        alert("Please select an option for each therapy before proceeding.");
        return; // Stop if not all therapies are selected
      }
    }

    if (currentStep === 2) {
      // Step 2 validation: LabWorkForm
      const labWorkSelected = labWork.every((lab) =>
        selectedLabWork.some((selected) => selected.name === lab.name)
      );

      if (!labWorkSelected) {
        alert("Please select an option for each lab work before proceeding.");
        return; // Stop if no lab work is selected
      }
    }
    // Move to the next step
    setCurrentStep((prev) => prev + 1);
  };

  // Move to previous step
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Handle LabWorkForm data
  const handleLabWorkChange = (selectedLabWork) => {
    setSelectedLabWork(selectedLabWork); // Update selected lab work
    setFormData2({
      ...formData2,
      labWork: selectedLabWork,
    });
  };

  // Calculate total price based on selected therapies and lab work
  useEffect(() => {
    const calculateTotalPrice = () => {
      const therapyTotal = selectedTherapies.reduce((total, therapy) => {
        return total + (therapy.totalPrice || 0);
      }, 0);

      const labWorkTotal = selectedLabWork.reduce((total, lab) => {
        return total + (lab.totalPrice || 0);
      }, 0);

      setTotalPrice(therapyTotal + labWorkTotal);
    };

    calculateTotalPrice(); // Recalculate whenever formData2 or selectedLabWork changes
  }, [formData2, selectedTherapies, selectedLabWork]);

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <TherapyForm
            selectedTherapies={selectedTherapies}
            setSelectedTherapies={setSelectedTherapies}
            therapies={therapies}
          />
        );
      case 2:
        return (
          <LabWorkForm
            // onChange={handleLabWorkChange}
            labWork={labWork}
            // setLabWork={setLabWork}
            selectedLabWork={selectedLabWork} // Pass selected lab work
            setSelectedLabWork={setSelectedLabWork}
          />
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div>
      <h1>New Patient Form</h1>

      {renderFormStep()}

      <div className="mt-6">
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>

      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button onClick={prevStep} className="bg-gray-300 px-4 py-2">
            Previous
          </button>
        )}

        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default NewPatientForm;

{
  /* {step < 5 && (
          <button
            onClick={() => {
              if (step === 1 && isTherapySelectionValid()) {
                nextStep(); // Only allow moving to next if valid selection
              } else if (step === 2 && isLabWorkSelectionValid()) {
                nextStep(); // Only allow moving to next if valid selection
              }
            }}
            className="bg-blue-500 text-white px-4 py-2"
            disabled={
              step === 1
                ? !isTherapySelectionValid()
                : step === 2
                ? !isLabWorkSelectionValid()
                : false
            }
          >
            Next
          </button>
        )} */
}
