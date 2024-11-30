import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Mycheckbox({ label, id,setShowInputOther,setCheckedPages, ...params }) {
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    
    // Update the state based on the checkbox that was clicked
    setCheckedPages((prevState) => ({
      ...prevState,
      [id]: checked, // Dynamically update the state for the specific checkbox
    }));

    // If the "Other" checkbox is clicked, show/hide the additional input field
    if (id === "Other") {
      setShowInputOther(checked);
    }
  
  };
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
  
        className={
          "data-[state=checked]:bg-caribbean-current dark:data-[state=checked]:bg-turquoise"
        }
        onCheckedChange={(checked) => {
          if (params.onChange){ params.onChange(checked);}
        
            setCheckedPages((prevState) => ({
              ...prevState,
              [id]: checked, // Dynamically update the state for the specific checkbox
            }));
        

          

          
        }}
        {...params}
      />
      <label
        htmlFor={id}
        className="text-gunmetal dark:text-white capitalize select-none"
      >
        {label}
      </label>
    </div>
  );
}
