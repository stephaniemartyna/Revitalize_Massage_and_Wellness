
  import Image from "next/image";
  import Servicesphoto from "../img/services.jpg";
  import face from "../img/facemassage.jpg";
  import hotstone from "../img/hotstonemassage.jpg";
  import theraputic from "../img/theraputicmassage.jpg";
  


  export function HomeCard() {

    return (
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <Image
            src={Servicesphoto}
            alt="A person organizing their desk."
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
  
        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-widest text-gray-900 sm:text-4xl">Clinic Services</h2>
            <p className="mt-4 text-gray-500">
              We offer a variety of services to help you relax and rejuvenate. Our team of registered massage therapists are highly skilled and experienced in a variety of massage therapy techniques. All ranging in length of appointment and price.
            </p>
          </div>
  
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-xl font-medium text-maingreen">Theraputic Massage</h3>
                  <p className="mt-2 text-md text-gray-500">Therapeutic massage involves targeted hands-on techniques to alleviate pain, enhance flexibility, and improve overall well-being. Trained therapists customize sessions based on individual needs, providing both physical and mental health benefits, including stress reduction.</p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={theraputic} alt=""className="object-cover object-center"/>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-xl font-medium text-maingreen">Hotstone Massage</h3>
                  <p className="mt-2 text-md text-gray-500">Hot stone massage involves placing heated stones on specific points of the body and incorporating them into the massage strokes. The warmth from the stones helps relax muscles, improves circulation, and enhances the overall therapeutic effect of the massage.</p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={hotstone} alt=""className="object-cover object-center"/>
                  </div>
                </div>
              </div>


              <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-xl font-medium text-maingreen">Buccal and Facial Massage</h3>
                  <p className="mt-2 text-md text-gray-500">Buccal and facial massage is a specialized technique that focuses on the muscles of the cheeks, jaw, and face to promote relaxation and improve circulation. This form of massage can contribute to facial muscle toning, reduced tension, and a rejuvenated appearance.</p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={face} alt=""className="object-cover object-center"/>
                  </div>
                </div>
              </div>
            
          </div>
         
        </div>
      </div>
    )
  }
