import logo from "../../assets/png/register_logo.png";
export default function ApplicationFormTopProspectes(){
    return(
          <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src={logo}
            width="72"
            height="70"
          />
          <h2>Apply for your Next Job</h2>
          <p className="lead">
            “Our customers come from all walks of life and so do we,” the
            statement reads. <br />
            “We hire great people from a wide variety of backgrounds, not just
            because it’s the right thing to do, but because it makes our company
            stronger.”
          </p>
        </div>
    )
}