
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import BannerForm from "@/components/UI/BannerForm";
import FavoriteRooms from "@/components/UI/FavoriteRooms";
import LatestNews from "@/components/UI/LatestNews/LatestNews";
import PhotoGrally from "@/components/UI/PhotoGrallry";
import Services from "@/components/UI/Services";
import SpaService from "@/components/UI/SpaService";
import SpecialOffers from "@/components/UI/Special Offers/SpecialOffersHome";
import Testimonial from "@/components/UI/Testimonial";
import Beverages from "@/components/UI/USPSection/Beverages";
import UpsHome from "@/components/UI/USPSection/UpsHome";
import Head from "next/head";
import styles from "@/styles/BannerForm.module.css";

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
      <section className={styles.banner_form}>
        <BannerForm/>
      </section>
      <div className="lg:mt-24 mt-12 lg:mx-32 mx-5">
        <FavoriteRooms />
      </div>
      <div className="lg:mt-24 mt-12  lg:mx-32 mx-10">
        <UpsHome />
      </div>
      <div className="lg:mt-24 mt-12  lg:mx-32 mx-10">
        <Services />
      </div>
      <div className="lg:mt-24 mt-12  lg:mx-32 mx-5">
        <SpecialOffers />
      </div>
      <div className="lg:mt-24 mt-12  lg:mx-32 mx-5">
        <PhotoGrally />
      </div>
      <div className="lg:mt-24 mt-12">
        <Testimonial />
      </div>
      <div className="lg:mt-24 mt-12  lg:mx-32 mx-5">
        <LatestNews />
      </div>
      <div className="lg:mt-24 mt-12">
        <SpaService />
      </div>
      



    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
