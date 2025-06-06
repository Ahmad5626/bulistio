import React from 'react'
import FormControls from './form-controls'
import { Button } from '../ui/button';

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button disabled={isButtonDisabled} type="submit" className="mt-5 w-full !bg-[#000000] text-white  ">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
