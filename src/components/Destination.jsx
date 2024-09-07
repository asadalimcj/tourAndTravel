import React from "react";
import mount from "../images/15.jpg";
import mount2 from "../images/12.jpg";
import mount3 from "../images/17.jpg";
import mount4 from "../images/18.jpg";
import DestinationData from "./DestinationData";
function Destination() {
  return (
    <div className="destination">
      <h1>Most Popular Destinations</h1>
      <p>Enjoy The Opportunity to Explore The World</p>
      <DestinationData
      className="first-des"
        heading="Murree Hill Station"
        text="Murree, a hill station near Islamabad in Pakistan, is known for its lush hills, cool climate, and scenic views. Popular spots include Mall Road, Patriata, and Kashmir Point. Established during the British Raj, it retains colonial charm. Murree is a favorite summer and winter getaway, easily accessible via the Murree Expressway, with various accommodation options."
        img1={mount}
        img2={mount2}
      />
      <DestinationData
      className="first-des-rev"
        heading="Nathia Gali Station"
        text="Nathia Gali, located in the Abbottabad District of Khyber Pakhtunkhwa, Pakistan, is a serene hill station known for its lush pine forests, cool climate, and breathtaking mountain views. Part of the Galyat range, it offers excellent hiking trails, such as the famous Mukshpuri and Miranjani treks. The area is a popular escape for tourists seeking tranquility and natural beauty, especially during the summer months."
        img1={mount3}
        img2={mount4}
      />
    </div>
  );
}

export default Destination;
