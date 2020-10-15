import React from "react";
import "./PostCard.css";

const Card = () => {
  return (
    <div className="gedf-main">
      {/* <!--- \\\\\\\Post--> */}
      <div class="card gedf-card">
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center">
              <div class="mr-2">
                <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
              </div>
              <div class="ml-2">
                <div class="h5 m-0">@LeeCross</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="text-muted h7 mb-2">
            {" "}
            <img width="300" src="https://picsum.photos/50/50" alt="" />
          </div>

          <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>

          <p class="card-text" style={{ fontFamily: "Gafata" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga
            quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
          </p>
        </div>
        <div class="card-footer">
          <a href="#" class="card-link">
            <i class="fa fa-comment"></i> Comments
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
