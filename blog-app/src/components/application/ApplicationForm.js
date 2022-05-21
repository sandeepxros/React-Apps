import ApplicationFormTopProspectes from "./ApplicationFormTopProspectes";
import CommunicationsInfo from "./CommunicationsInfo";
import ProfessionalInput from "./ProfessionalInput";

function ApplicationForm() {
  return (
    <div className="bg-light">
      <div className="container">
        <ApplicationFormTopProspectes />
        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Fill Your Application</h4>
            <form className="needs-validation" noValidate>
              <CommunicationsInfo />
              <ProfessionalInput />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApplicationForm;
