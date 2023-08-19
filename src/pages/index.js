import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import PhotoGrally from "@/components/UI/PhotoGrallry";



export default function Home() {
  return (
    <div >
      <Banner/>
      <div className="flex justify-center mt-16">
        <PhotoGrally />
      </div>


    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
