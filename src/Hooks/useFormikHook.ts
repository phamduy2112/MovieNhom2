import * as Yup from "yup";
import { useFormik } from "formik";

export const useFormikHook = () => {
    const taiKhoanRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z][a-zA-Z\d]*$/;

    const hoTenRegex =
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/u;

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const { handleSubmit, touched, errors, getFieldProps } = useFormik({
        initialValues: {
            taiKhoan: "",
            password: "",
            hoTen: "",
            email: "",
            sdt: "",
        },

        onSubmit: (values) => {},

        validationSchema: Yup.object({
            taiKhoan: Yup.string()
                .matches(
                    taiKhoanRegex,
                    "Yêu cầu phải có chữ và số,không được bắt đầu bằng số và không được có ký tự đặc biệt",
                )
                .required("Required"),
            password: Yup.string()
                .min(6, "Nhập ít nhất là 6 ký tự")
                .required("Required"),
            hoTen: Yup.string()
                .matches(hoTenRegex, "Yêu cầu toàn bộ là chữ")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            sdt: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required")
        }),
    });

    return [
        { touched, errors },
        { handleSubmit, getFieldProps },
    ];
};
