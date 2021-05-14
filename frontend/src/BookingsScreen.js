import React from "react";
import Card from "./Card";

function BookingsScreen() {
  return (
    <div>
      <div class="my-5 text-center">
        <h1>Bookings</h1>
      </div>

      <div
        id="card-section"
        className="d-flex my-4 justify-content-between"
        style={{ minHeight: "calc(100vh - 462px)" }}
      >
        {/* TODO: Connect to backend!! Display booking cards from DB */}
        <div class="container">
          <div class="row">
            <div class="col">
              <Card
                imageUrl="./sunset-dubai.jpeg"
                title="Clustering Techniques"
                courseID="CMP466"
                courseName="Machine Learning"
                time="12pm - 1pm"
                tutorName="Jane Doe"
                buttonLabel="Cancel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingsScreen;
