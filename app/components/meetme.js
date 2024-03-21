import Image from "next/image";
import Brooklyn from "../img/brooklyn.png";


export function MeetMe() {
  return (

<div className="relative isolate -z-10">
<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
    <Image
      className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
      src={Brooklyn}
      alt=""
    />
    <div className="w-full flex-auto">
      <h2 className="text-3xl font-bold tracking-widest text-maingreen sm:text-4xl">Meet Brooklyn!</h2>
      <p className="mt-6 text-lg leading-8 text-black">
        I am an Advanced Massage Therapy graduate with a 3000 hour Diploma. I specialize in deep tissue, therapeutic and relaxation techniques along with Myofascial Cupping Therapy and Hot Stone Massage. I also have a Personal Fitness Training (PFT) Diploma and an Applied Nutrition Science (ANS) Diploma, along with Level 1 Fascial Stretch Therapy. I recently added a new service to my practice - Face Sculpting & Buccal Therapy Massage and people are loving it. I find joy in providing clients with home care treatments that include stretching, strengthening exercises and hydrotherapy that help to lay the groundwork for a happy, healthy and well-functioning body.
        I have always known I wanted to work in the Health and Wellness industry due to the positive impact it has had on my life throughout years as an international competitive dancer. Along with providing my services to others, I also have a passion for plants, working out, the outdoors and my puppers, Moose
      </p>
     
    </div>
  </div>
</div>
<div
  className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
  aria-hidden="true"
>
  <div
    className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-maingreen to-accent opacity-25"
    style={{
      clipPath:
        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
    }}
  />
</div>
</div>

  );
}