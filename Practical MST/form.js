import React, { useState, useEffect } from "react";

export default function UserForm() {
  // Step 1: Create state for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  // Step 2: Create state to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Step 3: useEffect to run when submittedData changes
  useEffect(() => {
    if (submittedData) {
      console.log("Submitted Data:", submittedData);
    }
  }, [submittedData]);

  // Step 4: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Step 5: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);  // Store values in state
    setFormData({ name: "", email: "", age: "" }); // clear form after submit
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">User Form</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}