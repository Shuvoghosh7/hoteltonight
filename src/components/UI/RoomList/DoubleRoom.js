import RootLayout from "@/components/Layouts/RootLayout";
import React from "react"

const DoubleRoom = () => {
  return (
    <div>
      DoubleRoom
    </div>
  )
};

export default DoubleRoom;

DoubleRoom.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};