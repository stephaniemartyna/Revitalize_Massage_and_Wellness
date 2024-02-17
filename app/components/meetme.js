import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
    import Image from "next/image";
    import Brooklyn from "../img/brooklyn.png";
   
  export function MeetMe() {
    return (
      <Card className="mt-20 mb-10 bg-offwhite lg:h-[500px] lg:ml-40 lg:mr-40 lg:flex-row sm:ml-10 sm:mr-10 sm:flex-col ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 shrink-0 rounded-r-none"
        >
            <Image src={Brooklyn} alt={Card.alt} width={600}/>
          
        </CardHeader>
        <CardBody>
          <Typography variant="h3" color="gray" className="mb-4">
            Meet Brooklyn!
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Registered Massage Therapist
          </Typography>
          <Typography color="gray" className="mb-8 font-normal text-xl">
            I am an Advanced Massage Therapy graduate with a 3000 hour Diploma. I specialize in deep tissue, therapeutic and relaxation techniques along with Myofascial Cupping Therapy and Hot Stone Massage. I also have a Personal Fitness Training (PFT) Diploma and an Applied Nutrition Science (ANS) Diploma, along with Level 1 Fascial Stretch Therapy. I recently added a new service to my practice - Face Sculpting & Buccal Therapy Massage and people are loving it. I find joy in providing clients with home care treatments that include stretching, strengthening exercises and hydrotherapy that help to lay the groundwork for a happy, healthy and well-functioning body.

            I have always known I wanted to work in the Health and Wellness industry due to the positive impact it has had on my life throughout years as an international competitive dancer. Along with providing my services to others, I also have a passion for plants, working out, the outdoors and my puppers, Moose.
          </Typography>
          <a href="https://revitalize-pearl.vercel.app/" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 p-4 bg-lightgreen text-white text-md hover:bg-darkgreen">
              Book with me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }