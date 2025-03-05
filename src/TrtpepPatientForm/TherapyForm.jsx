import React from "react";

const TherapyForm = ({
  selectedTherapies = [],
  setSelectedTherapies,
  therapies,
}) => {
  const handleOptionChange = (therapy, selectedOption) => {
    const updatedSelection =
      selectedTherapies?.filter((item) => item.therapyName !== therapy.name) ||
      [];

    const newSelection = [
      ...updatedSelection,
      {
        therapyName: therapy.name,
        selectedOptionName: selectedOption.name,
        totalPrice: selectedOption.totalPrice,
        pricePerMonth: selectedOption.pricePerMonth,
        supplyDuration: selectedOption.supplyDuration,
      },
    ];

    setSelectedTherapies(newSelection);
  };

  return (
    <div>
      {therapies?.map((therapy) => (
        <div key={therapy._id} className="therapy-section">
          <h3>{therapy.name}</h3>
          {therapy.options.map((option) => (
            <div key={option._id} className="therapy-option">
              <input
                type="radio"
                id={option._id}
                name={therapy._id}
                value={option._id}
                onChange={() => handleOptionChange(therapy, option)}
                checked={selectedTherapies?.some(
                  (item) =>
                    item.therapyName === therapy.name &&
                    item.selectedOptionName === option.name
                )}
                disabled={!option.isInStock}
              />
              <label htmlFor={option._id}>
                {option.name} - ${option.totalPrice} ({option.pricePerMonth}
                /month)
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TherapyForm;
