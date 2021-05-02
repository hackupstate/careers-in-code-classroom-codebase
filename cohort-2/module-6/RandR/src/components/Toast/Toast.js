import { ToastContainer, toast, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

/**
 * Third party toast component. Export both the component and
 * the trigger function from the same file for ease of use.
 */

export const Toast = ToastContainer

export const showToast = (text) => {
  toast(text, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
  })
}
