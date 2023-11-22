import React, { useState } from "react"
import styles from "@/styles/LoginPage.module.css";
import AdminLayout from "@/components/Layouts/AdminLayout";
import { Controller, useForm } from "react-hook-form";
import Select from 'react-select';
const CreateRoom = () => {
    const { handleSubmit, control, register } = useForm();

    const onSubmit = (data) => {

        try {
            console.log(data);

          } catch (err) {
            console.error(err.message);
          }
    };
    return (
        <div className="mt-12">
            <div className={styles.login_container}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
                    <div>
                        <label className={styles.form_input_label}>Room Number:</label><br></br>
                        <input {...register("RoomNumber")} className={styles.login_form_input} />
                    </div>

                    <div>
                        <label className={styles.form_input_label}>Room Type:</label><br></br>
                        <Controller
                            name="RoomType"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <select {...field} className={styles.login_form_input}>
                                     <option value="option">Select a option...</option>
                                    <option value="Single">Single</option>
                                    <option value="TV">TV</option>
                                    <option value="Air Conditioning">Air Conditioning</option>
                                </select>
                            )}
                        />
                    </div>

                    <div>
                        <label className={styles.form_input_label}>Price Per Night:</label><br></br>
                        <input type="number" {...register("PricePerNight")} className={styles.login_form_input} />
                    </div>

                    <div>
                        <label className={styles.form_input_label}>Description:</label><br></br>
                        <textarea {...register("Description")}  className={styles.login_form_textarea} />
                    </div>

                    <div>
                        <label className={styles.form_input_label}>Capacity:</label><br></br>
                        <input type="number" {...register("Capacity")} className={styles.login_form_input} />
                    </div>

                    <div>
                        <label className={styles.form_input_label}>Facilities:</label><br></br>
                        <Controller

                            name="Facilities"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    isMulti
                                    options={[
                                        { value: 'Wi-Fi', label: 'Wi-Fi' },
                                        { value: 'TV', label: 'TV' },
                                        { value: 'Air Conditioning', label: 'Air Conditioning' },
                                    ]}
                                />
                            )}
                        />

                    </div>
                    <div className="flex justify-center">
                        <button type="primary" >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
};

export default CreateRoom;

CreateRoom.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};

