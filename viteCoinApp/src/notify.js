import Swal from "sweetalert2";

export const notify = (msg, icon) => {
  return Swal.fire({
    title: "Coin App",
    text: msg,
    icon: icon,
    confirmButtonText: "OK",
  });
};
