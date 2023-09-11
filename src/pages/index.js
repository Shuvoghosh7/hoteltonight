
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import FavoriteRooms from "@/components/UI/FavoriteRooms";
import LatestNews from "@/components/UI/LatestNews/LatestNews";
import PhotoGrally from "@/components/UI/PhotoGrallry";
import Services from "@/components/UI/Services";
import SpecialOffers from "@/components/UI/Special Offers/SpecialOffersHome";
import Testimonial from "@/components/UI/Testimonial";
import Beverages from "@/components/UI/USPSection/Beverages";
import UpsHome from "@/components/UI/USPSection/UpsHome";
import Head from "next/head";


export default function Home() {

  return (
    <div >
      <Head>
        <title>HotelToNight</title>
        <meta
          name="description"
          content="This is Hotel Booking System made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <div className="mt-12 mx-32">
        <FavoriteRooms />
      </div>
      <div className="mt-12  mx-32">
        <UpsHome />
      </div>
      <div className="mt-12  mx-32">
        <Services />
      </div>
      <div className="mt-16  lg:mx-32 mx-5">
        <SpecialOffers />
      </div>
      <div className="mt-16  lg:mx-32 mx-5">
        <PhotoGrally />
      </div>
      <div className="mt-16">
        <Testimonial />
      </div>
      <div className="mt-16  lg:mx-32 mx-5">
        <LatestNews />
      </div>


    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
