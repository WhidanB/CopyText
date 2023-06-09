const buttonCopy = document.getElementById("button-copy");
const input = document.getElementById("copy-text");

buttonCopy.addEventListener("click", function () {
  input.select();
  document.execCommand("copy");
  toastr["success"]("Texte Copié");

  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-bottom-center",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "1500",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
});
