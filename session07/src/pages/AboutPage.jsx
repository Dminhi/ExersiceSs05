import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-gray-600">
          Learn more about the author of this blog
        </p>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center">
        <img
          src="https://media.npr.org/assets/music/news/2010/09/maroon-5af6f2c1145368cf09ec543767a4db98644a297f.jpg"
          alt="Author Photo"
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

export default AboutPage;
