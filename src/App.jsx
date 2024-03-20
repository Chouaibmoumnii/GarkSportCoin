import { Navbar, Welcome, Footer, Services, Transactions,About,TSC,Market,ScrollToTop } from "./components";

const App = () => (

     <div className="min-h-screen">
         <div className="gradient-bg-welcome">
           <Navbar />
           <Welcome />
         </div>
      <Services />
      <About />
      <Market />
      <TSC />

      <Transactions />
      <Footer />
     <ScrollToTop />
    </div>

);

export default App;
