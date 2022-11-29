import SaveChangesButton from "../save-changes-button/save-changes-button.component";
import NextButton from "../next-button/next-button.component";

const FormButtonContainer = () => {
  return (
    <div className='d-flex justify-content-between width'>
      <SaveChangesButton />
      <NextButton disabled={true} />
    </div>
  )
}

export default FormButtonContainer;