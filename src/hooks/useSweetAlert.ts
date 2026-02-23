import Swal from "sweetalert2";
import type {
  showErrorTypes,
  showSuccessTypes,
  showWarningTypes,
} from "./useSweetAlert.types";

export function useSweetAlert() {
  function showSuccess({ title, message }: showSuccessTypes) {
    return Swal.fire({
      icon: "success",
      title,
      text: message,
      timer: 3200,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }

  function showError({ title, message }: showErrorTypes) {
    return Swal.fire({
      icon: "error",
      title,
      text: message,
      timer: 3200,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }

  function showWarning({ title, message }: showWarningTypes) {
    return Swal.fire({
      icon: "warning",
      title,
      text: message,
      timer: 3200,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
  return { showSuccess, showError, showWarning };
}
