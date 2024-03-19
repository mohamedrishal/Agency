import React from "react";

const NewsLetter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutralDGray font-semibold mb-6 lg:leading-snug">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="flex items-center justify-center gap-8">
                <button className="btn-primary">Get Demo  <img
                    className="inline-block ml-2 cursor-pointer"
                    src="/src/assets/rightarrow.png"
                    alt=""
                  />    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
