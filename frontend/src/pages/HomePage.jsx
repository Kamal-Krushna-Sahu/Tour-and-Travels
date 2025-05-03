const HomePage = () => {
  return (
    <div className="px-4 py-3 bg-gradient-to-b from-blue-300 to-blue-400 md:to-blue-500">
      <div className="flex flex-col gap-2 md:w-9/12 m-auto">
        <h1 className="text-center font-bold text-xl p-2 mt-1 rounded text-white bg-blue-500 w-full m-auto md:tracking-widest md:mb-2">
          ODISHA ADARSHA VIDYALAYA
        </h1>
        <div className="flex flex-col gap-2 md:flex-row md:mb-5">
          <p className="text-white md:text-2xl text-center font-bold md:w-2/3 md:mt-10">
            We are pleased to introduce the new School Bus Service provided by
            Maa Santoshi Tours and Travels exclusively for Odisha Adarsha
            Vidyalaya. We are fully-insured. Our trained driver will ensure your
            child's daily commute is safe, reliable, and comfortable.
          </p>

          <img
            className="h-60 object-cover rounded-xl shadow-xl md:w-1/3"
            src="Bus.jpeg"
            alt="Bus image"
          />
        </div>
        <div>
          <p className="text-white md:text-xl text-center">
            <b>Route Coverage:</b> Multiple pick-up and drop-off points across
            the city.
            <br />
            <b>Safety Features:</b> Regular vehicle maintenance checks.
            <br />
            <b>Professional Staff:</b> Uniformed driver with valid commercial
            license and background checks.
            <br />
            <b>Flexible Scheduling:</b> Morning and afternoon shifts aligned to
            school timings.
            <br />
            <br />
            <p className="font-bold text-xl md:text-2xl">
              To enroll your child or for more information, please contact us
              at:
              <br />
              <b>Phone:</b> 1234567890 <br />
              <b>Email:</b> maasantoshi@gmail.com <br />
            </p>
            <span className="font-bold text-xl md:text-2xl text-orange-300">
              Spaces are limited—reserve your seat today!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
