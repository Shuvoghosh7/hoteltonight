import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";



export default function Home() {
  return (
    <div >
     <Banner/>
     
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
