import React from "react";
import TripsData from "./TripsData";
import imag from "../images/19.jpg";
import imag2 from "../images/8.jpg";
import imag3 from "../images/17.jpg";

export default function Trips() {
  return (
    <div className="trip">
      <h1>Our Recent Trips</h1>
      <p>You can discover the World best places Through Google Maps</p>
      <div className="tripcard">
        <TripsData
          img={imag}
          heading="Swat Valley"
          para="Swat Valley, often referred to as the Switzerland of Pakistan, is famous for its lush green valleys, rivers, and mountains. Malam Jabba is a popular ski resort in Swat, attracting tourists for winter sports."
        />
        <TripsData
          img={imag2}
          heading="Hunza Valley"
          para="While not a hill station in the traditional sense, Hunza Valley in Gilgit-Baltistan is a mountainous region known for its stunning landscapes, including the iconic Rakaposhi and Ultar Sar peaks"
        />
        <TripsData
          img={imag3}
          heading="Ayubia"
          para="Also located in the Galyat range, Ayubia is known for the Ayubia National Park, which is home to diverse wildlife and beautiful walking trails, including the famous Pipeline Track."
        />
      </div>
    </div>
  );
}
