import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import FavoriteRooms from "@/components/UI/FavoriteRooms";
import PhotoGrally from "@/components/UI/PhotoGrallry";
import Beverages from "@/components/UI/USPSection/Beverages";
import UpsHome from "@/components/UI/USPSection/UpsHome";



export default function Home() {
  return (
    <div >
      {/* <Banner/>
      <div className="mt-12 mx-16">
        <FavoriteRooms/>
      </div>
      <div className="flex justify-center mt-16">
        <PhotoGrally />
      </div> */}

      <div>
        <UpsHome/>
      </div>
     


    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
