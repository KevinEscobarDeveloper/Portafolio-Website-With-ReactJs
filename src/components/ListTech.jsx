import * as React from "react";

export const ListTech = (tech) => {
  return (
    <>
      <div className="container">
        {tech.tech.map((item) => {
          return (
            <div div className="card" key={item.id}>
              <div className="percent">
                <div className="dot"></div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    {item.level}<span>%</span>
                  </h2>
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
