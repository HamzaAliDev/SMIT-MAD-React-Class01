import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className='text-center mt-5'>Learn React</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
