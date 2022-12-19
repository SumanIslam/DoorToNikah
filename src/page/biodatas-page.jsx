// component
import Header from '../component/header/header.component';
import Footer from '../component/footer/footer.component';
import BiodatasPageForm from '../component/biodatas-page-form/biodatas-page-form.component';
import BiodatasShowcase from '../component/biodatas-showcase/biodatas-showcase.component';

const BiodatasPage = () => {
  return (
    <>
      <Header />
      <BiodatasPageForm />
      <BiodatasShowcase />
      <Footer />
    </>
  )
}

export default BiodatasPage;