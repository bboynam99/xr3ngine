import * as yup from "yup";

export const userValidationSchema = yup.object({
    name: yup.string().required("Name is required"),
    avatar: yup.string().required("Avatar is required!"),
    inviteCode: yup.string().required("Invite code is required!")
});