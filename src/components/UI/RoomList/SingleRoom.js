import RootLayout from "@/components/Layouts/RootLayout";
import React from "react"

const SingleRoom = () => {
  return (
    <div>
      SingleRoom
    </div>
  )
};

export default SingleRoom;


SingleRoom.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};