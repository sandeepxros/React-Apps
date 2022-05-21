import CheckboxPermissions from "./CheckBoxPermissions";
import InputDiv from "./InputDiv";
export default function ProfessionalInput() {
  return (
    <div className="row g-3">
      <div className="col-12">
        <label for="about" className="form-label">
          Tell Us About Your self
        </label>
        <textarea
          className="form-control"
          placeholder="What's your passions, What fuels you the most."
        ></textarea>
      </div>

      <div className="col-12">
        <small>
          Please Let Us Know for what profile you are looking work for
        </small>
      </div>
      <InputDiv
        type="text"
        name="First Choice of Profile"
        classname="col-sm-6"
        labelfor="first-choice"
      />
      <InputDiv
        type="text"
        name="Second Choice of Profile"
        classname="col-sm-6"
        labelfor="Second-choice"
      />
      <InputDiv
        type="file"
        name="Please Upload Your Resume"
        classname="col-12"
        labelfor="resume-upload"
      />
      <hr className="my-4"></hr>
      <CheckboxPermissions />
      <hr className="my-4"></hr>
      <small>Password should follow latest secuirity mazors.</small>
      <InputDiv
        type="password"
        name="Password"
        classname="col-12"
        labelfor="Password"
      />
      

      <button className="w-100 btn btn-primary btn-lg my-5" type="submit">
        Submit
      </button>
    </div>
  );
}
