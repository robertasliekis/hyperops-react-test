function gtag_report_conversion(url) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", { send_to: "AW-950407447/IIFxCIzujfsBEJeimMUD", event_callback: callback });
  return false;
}

export default gtag_report_conversion;
