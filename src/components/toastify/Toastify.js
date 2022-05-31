import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Success = (message) => { return toast.success(message) }
const Info = (message) => { return toast.info(message) }
const Warning = (message) => { return toast.warning(message) }
const Error = (message) => { return toast.error(message) }

export const Toastify = {
    Success,
    Info,
    Warning,
    Error
}