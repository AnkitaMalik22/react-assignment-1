
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
let footerLinks =[
  "Prompt Generator", 
  "Dweep Daily",
  "All Contributors",
  "Your data on Dweep.io",
  "Contribute to Dweep"
]



  return (
    <div className="container">
<Header/>
<Footer footerLinks= {footerLinks} />

    </div>
  );
}

export default App;
