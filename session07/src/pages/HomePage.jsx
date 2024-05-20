import React from "react";

const PersonalBlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Personal Blog</h1>
        <p className="text-gray-600">Welcome to my world!</p>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center">
        <img
          src="https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/11/3/maroon-5-1-16990073717753033766.jpg"
          alt="Blog Banner"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-8 md:mt-0 text-lg text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget justo turpis. Donec eget mauris non mauris accumsan sodales.
            Fusce vehicula urna eget urna fermentum, ac efficitur nisi
            vestibulum.
          </p>
          <p className="mt-4">
            Morbi nec tincidunt nulla, ac fringilla enim. Nullam vel orci vel
            dolor posuere hendrerit non nec libero. Duis ac justo velit.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PersonalBlogPage;
