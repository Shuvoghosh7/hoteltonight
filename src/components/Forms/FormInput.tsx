
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import styles from "@/styles/LoginPage.module.css";
const FormInput = ({
    name,
    type,
    size,
    value,
    id,
    placeholder,
    validation,
    label,
}) => {
    const { control } = useFormContext();

    return (
        <>
            <div className={styles.form_input_label}>
                {label ? label : null}
            </div>

            <Controller
                control={control}
                name={name}
                render={({ field }) =>

                    <input
                        type={type}
                        size={size}
                        placeholder={placeholder}
                        {...field}
                        value={value ? value : field.value}
                        className={styles.login_form_input}
                    />

                }
            />
        </>
    );
};

export default FormInput;