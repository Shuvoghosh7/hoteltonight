import React from "react"
import Form from "@/components/Forms/Form";
import styles from "@/styles/LoginPage.module.css";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/router";
import { storeUserInfo } from "@/services/auth.service";
import AdminLayout from "@/components/Layouts/AdminLayout";

const CreateRoom = () => {
    return (
        <div className="mt-12">
            <div className={styles.login_container}>
                <Form>
                    <h4 className={styles.brand_title}>Admin Login</h4>
                    <div>
                        <FormInput name="RoomNumber" type="text" label="RoomNumber" />
                    </div>

                    <div>
                        <FormInput
                            name="RoomType"
                            type="select"
                            label="Select Room"
                            options={[
                                { label: "Single", value: "Single" },
                                { label: "Double", value: "Double" },
                                { label: "Deluxe", value: "Deluxe" },

                            ]}
                        />
                    </div>
                    <div>
                        <FormInput name="PricePerNight" type="number" label="Price Per Night" />
                    </div>
                    <div>
                        <FormInput name="Description" type="textarea" label="Price Per Night" />
                    </div>
                    <div>
                        <FormInput
                            name="Facilities"
                            type="select"
                            label="Facilities"
                            options={[
                                { label: "Wi-Fi", value: "wifi" },
                                { label: "TV", value: "tv" },
                                { label: "Air Conditioning", value: "ac" },
                               
                            ]}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="primary" >
                            Login
                        </button>
                    </div>

                </Form>

            </div>

        </div>
    )
};

export default CreateRoom;

CreateRoom.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};

