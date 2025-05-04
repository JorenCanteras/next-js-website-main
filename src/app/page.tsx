import Header from "@/components/header/header"; // Import the Header component
import Landing from "@/components/header/landing";
import Partnership from "@/components/header/partnership"; // Import the Partnership component
import Services from "@/components/header/services"; // Import the Services component
import Outreach from "@/components/header/outreach"; // Import the Outreach component
import MoreServices from "@/components/header/moreservices"; // Import the MoreServices component 
const HomePage = () => {
  return (
    <div>
      {/* Include the Header as the main part of your page */}
      <Header/>
      <Landing/>
      <Partnership/>
      <Services/>
      <Outreach/>
      <MoreServices/>
      {/* Add any additional components or sections here */}
      
      {/* Example of a main content area */}
      {/* You can uncomment and modify the following section as needed */}
        {/* Add the rest of your page content here */}
        {/* <main className="max-w-7xl mx-auto px-4 py-5">
        <h2 className="text-3xl font-bold">Welcome to My Website!</h2>
        <p className="mt-4">This is the homepage content.</p>
      </main> */}
    
    </div>
  );
};

export default HomePage;