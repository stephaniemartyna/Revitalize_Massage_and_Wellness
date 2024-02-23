import Image from "next/image";
import Brooklyn from "../img/brooklyn.png";

export function MeetMe() {
  return (
    <div className="flex container h-full rounded-lg overflow-hidden">
      <div className="grid lg:grid-cols-2 w-full">
        <div className="rounded-lg overflow-hidden">
          <Image
            className="w-full h-full object-cover object-top rounded-l-xl"
            src={Brooklyn}
            alt=""
          />
        </div>
        <div className="flex bg-gray-100 p-10  rounded-lg md:w-full md:justify-center md:text-center sm:w-full sm:text-center ">
          <div className="mb-auto mt-auto max-w-lg">
            <h1 className="text-3xl uppercase mb-5">MEET BROOKLYN!</h1>
            <p className="font-semibold text-lg mb-10">Registered Massage Therapist</p>
            <p className="font-normal text-lg">
              I am an Advanced Massage Therapy graduate with a 3000 hour Diploma. I specialize in deep tissue, therapeutic and relaxation techniques along with Myofascial Cupping Therapy and Hot Stone Massage. I also have a Personal Fitness Training (PFT) Diploma and an Applied Nutrition Science (ANS) Diploma, along with Level 1 Fascial Stretch Therapy. I recently added a new service to my practice - Face Sculpting & Buccal Therapy Massage and people are loving it. I find joy in providing clients with home care treatments that include stretching, strengthening exercises and hydrotherapy that help to lay the groundwork for a happy, healthy and well-functioning body.

              I have always known I wanted to work in the Health and Wellness industry due to the positive impact it has had on my life throughout years as an international competitive dancer. Along with providing my services to others, I also have a passion for plants, working out, the outdoors and my puppers, Moose
            </p>
            <button className="bg-lightgreen rounded-md py-3 px-7 mt-10 text-white" onClick={() => window.open("https://revitalize-pearl.vercel.app/")} >
              Book appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
