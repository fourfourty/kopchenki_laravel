
import Header from './containers/Header';
import Products from './components/Products/Products';
import About from './components/About';
import Contacts from './containers/Contacts';
import Footer from './containers/Footer';
// import ShowModal from './components/ShowModal.js';
import '../../../public/css/header.css';
import '../../../public/css/about.css';
import '../../../public/css/App.css';
import '../../../public/css/contacts.css';
import '../../../public/css/footer.css';
import '../../../public/css/header.css';
import '../../../public/css/index.css';
import '../../../public/css/modal.css';
import '../../../public/css/products.css';
import '../../../public/css/styles.css';


function Init() {
  return (
    <>
      <Header />
      <Products />
      <About />
      <Contacts />
      <Footer />
    </>
  );
}

export default Init;
