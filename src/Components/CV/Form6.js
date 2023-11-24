import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

const Form6 = () => {
  const initialValues = {
    forms: [
      {
        id: 1,
        inputs: [
          { id: 1, label: "Award Name", value: "", style: { width: "100%" } },
          { id: 2, label: "Year", value: "", style: { width: "100%" } },
          {
            id: 3,
            label: "Description",
            value: "",
            style: { width: "100%", height: "200px" },
          },
        ],
      },
    ],
  };

  const onSubmit = (values) => {
    console.log(values.forms);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const addForm = () => {
    const newForm = {
      id: formik.values.forms.length + 1,
      inputs: initialValues.forms[0].inputs.map((input) => ({
        ...input,
        value: "",
      })),
    };
    formik.setValues({
      ...formik.values,
      forms: [...formik.values.forms, newForm],
    });
  };

  const removeForm = (id) => {
    const updatedForms = formik.values.forms.filter((form) => form.id !== id);
    formik.setValues({
      ...formik.values,
      forms: updatedForms,
    });
  };

  const handleInputChange = (formIndex, inputIndex, value) => {
    const updatedForms = [...formik.values.forms];
    updatedForms[formIndex].inputs[inputIndex].value = value;
    formik.setValues({
      ...formik.values,
      forms: updatedForms,
    });
  };

  return (
    <div  className="col-12 col-lg-6 me-lg-5">
      <h3>Honers & awards</h3>
      {formik.values.forms.map((form, formIndex) => (
        <div 
          key={form.id}
          className="rounded-3 p-3 bg-black text-white my-3"
          style={{ border: "2px dashed #BF9B30" }}
        >
          {form.inputs.map((input, inputIndex) => (
            <div key={input.id} style={{ marginBottom: "10px" }}>
              <h5 htmlFor={`forms.${formIndex}.inputs.${inputIndex}.value`}>
                {input.label}
              </h5>
              {input.label == 'Description'?<textarea
              type="text"
              id={`forms.${formIndex}.inputs.${inputIndex}.value`}
              value={input.value}
              onChange={(e) =>
                handleInputChange(formIndex, inputIndex, e.target.value)
              }
              style={input.style}
            />:
              <input
                type="text"
                id={`forms.${formIndex}.inputs.${inputIndex}.value`}
                value={input.value}
                onChange={(e) =>
                  handleInputChange(formIndex, inputIndex, e.target.value)
                }
                style={input.style}
              />}
            </div>
          ))}
          <div className="col-12 pt-2 border-0 d-flex justify-content-end">
            <button
              type="button"
              className="border-0"
              style={{ backgroundColor: "transparent", color: "#BF9B30" }}
              onClick={() => removeForm(form.id)}
            >
              <FontAwesomeIcon className="fs-5" icon={faTrashCan} />
            </button>
          </div>
        </div>
      ))}
      <div className="col-12 pt-2 border-0 d-flex justify-content-end">
        <button
          type="button"
          className="me-2 pe-1 border-0"
          style={{ backgroundColor: "transparent", color: "#BF9B30" }}
          onClick={addForm}
        >
          <FontAwesomeIcon
            className="rounded-circle p-1"
            style={{ border: "2px solid #BF9B30" }}
            icon={faPlus}
          />
        </button>
      </div>
    </div>
  );
};

export default Form6;
