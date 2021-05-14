import React from "react";

function AboutScreen() {
  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="my-5 text-center">About the Tutoring System</h1>
        {/* TODO: Insert logo */}
        <img class="d-block mx-auto mb-4" src="./logo.svg" width="80" />
        <div class="col-lg-6 mx-auto">
          {/* TODO: Change description!! */}
          <p class="lead mb-4">
            Love to eat? We've got you covered. Love to cook? We've still got
            you! Join the Foodie community and, using our app, you can put up
            your best meals to allow other local Foodies to purchase them and
            share their love for food - be it eating or prepping!
          </p>

          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-success btn-lg px-4 me-sm-3">
              Home
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
