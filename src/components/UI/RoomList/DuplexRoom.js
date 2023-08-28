import RootLayout from "@/components/Layouts/RootLayout";
import React from "react"

const DuplexRoom = () => {
  return (
    <div>
      DuplexRoom
    </div>
  )
};

export default DuplexRoom;

DuplexRoom.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};