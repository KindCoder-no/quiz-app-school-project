import Router from "next/router";
import React from "react";

export default function HomePage() {
  //console.log(questions);

  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <div class="d-flex flex-grow-1 justify-content-center align-items-center">
          <div className="col-12">
            <h1 className="text-center text-white">Velg Quiz</h1>
            <br></br>
            <div className="row justify-content-center">
              <div className="col-md-2">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => Router.push("/development")}
                >
                  Utvikling
                </button>
              </div>
            </div>
            <br></br>
            <div className="row justify-content-center">
              <div className="col-md-2">
                <button className="btn btn-secondary w-100">Egen Quiz</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
