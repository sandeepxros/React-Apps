import InputDiv from "./InputDiv"
import ClubbedInput from "./ClubbedInput"
import OptionSelector from "./OptionSelector"
import linkedin from "../../assets/png/linkedin.png"

export default function CommunicationsInfo(){
    const obj = <img src={linkedin} />;
    return(
        <div className="row g-3">
        <InputDiv
          classname="col-sm-6"
          labelfor="first-name"
          type="text"
          name="First Name"
        />
        <InputDiv
          classname="col-sm-6"
          labelfor="last-name"
          type="text"
          name="Last Name"
        />
        <ClubbedInput
          className="col-12"
          groupObject="@"
          labelfor="username"
          name="Choose a UserName"
        />
        <InputDiv
          type="email"
          name="E-Mail"
          classname="col-12"
          labelfor="email"
        />
        <ClubbedInput
          classname="col-md-6"
          groupObject="+91"
          labelfor="mobile"
          name="Mobile No"
        />
        <ClubbedInput
          classname="col-md-6"
          groupObject={obj}
          labelfor="linkedin"
          name="Linked In"
        />
        <OptionSelector
          classname="col-md-5"
          name="Country"
          options={["India", "USA", "Others"]}
          labelfor="contry"
        />
        <OptionSelector
          classname="col-md-4"
          name="State"
          options={["New Delhi", "Mumbai", "Uttar Pradesh"]}
          labelfor="contry"
        />
        <InputDiv
          type="text"
          name="Pin Code"
          classname="col-md-3"
          labelfor="pin"
        />
      </div>
    )
}