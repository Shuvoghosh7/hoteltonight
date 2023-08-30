import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import FavoriteRooms from "@/components/UI/FavoriteRooms";
import PhotoGrally from "@/components/UI/PhotoGrallry";
import Services from "@/components/UI/Services";
import Beverages from "@/components/UI/USPSection/Beverages";
import UpsHome from "@/components/UI/USPSection/UpsHome";



export default function Home() {
  return (
    <div >
      {/* <Banner/>
      <div className="mt-12 mx-20">
        <FavoriteRooms/>
      </div>
      <div className="mt-12  mx-20">
        <UpsHome/>
      </div>
      <div className="flex justify-center mt-16  mx-20 ">
        <PhotoGrally />
      </div> */}
      <div className="mt-12  mx-20">
        <Services/>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
