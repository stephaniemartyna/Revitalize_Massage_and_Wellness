import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import Image from "next/image";
  import Hotstone from "../img/hotstone-massage.jpg";
  import Facial from "../img/face-massage.jpg";
  import Theraputic from "../img/theraputic-massage.jpg";
  
  export function HomeCard() {
    return (
        <div className="flex flex-wrap justify-center mt-20 mb-20 ml-5 mr-5 lg:p-10">
        <Card className="w-[96px] mx-4 mb-4 sm:w-full md:w-96 md:mx-4 md:mb-0">
          <CardHeader color="blue-gray" className="relative mt-5">
            <Image src={Theraputic} alt={Card.alt} height={400} width={600} />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Theraputic Massage
            </Typography>
            <Typography>
                Therapeutic massage involves targeted hands-on techniques to alleviate pain, enhance flexibility, and improve overall well-being. Trained therapists customize sessions based on individual needs, providing both physical and mental health benefits, including stress reduction.
            </Typography>
          </CardBody>
         
        </Card>

  
        <Card className="w-[96px] mx-4 mb-4 sm:w-full md:w-96 md:mx-4 md:mb-0">
          <CardHeader color="blue-gray" className=" relative mt-5">
          <Image src={Hotstone} alt={Card.alt} height={300} width={600} />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Hot Stone Massage
            </Typography>
            <Typography>
                Hot stone massage involves placing heated stones on specific points of the body and incorporating them into the massage strokes. The warmth from the stones helps relax muscles, improves circulation, and enhances the overall therapeutic effect of the massage.
            </Typography>
          </CardBody>
          
        </Card>


        <Card className="w-[96px] mx-4 mb-4 sm:w-full md:w-96 md:mx-4 md:mb-0">
          <CardHeader color="blue-gray" className="relative mt-6">
          <Image src={Facial} alt={Card.alt} height={400} width={600} />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                Buccal and Facial Massage
            </Typography>
            <Typography>
                Buccal and facial massage is a specialized technique that focuses on the muscles of the cheeks, jaw, and face to promote relaxation and improve circulation. This form of massage can contribute to facial muscle toning, reduced tension, and a rejuvenated appearance.
            </Typography>
          </CardBody>
        </Card>
      </div>
    );
  }
  