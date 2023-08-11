window.addEventListener("DOMContentLoaded", (event) => {
    const $scrollToTopEle = document.querySelector("#test");
    document.addEventListener("scroll", (event) => {
      console.log("how far I have been gone", window.scrollY);
      // if (window.scrollY >= 300) {
      //   $scrollToTopEle.classList.remove("hidden");
      //   $scrollToTopEle.classList.add("block");
      // }
      // if (window.scrollY < 300) {
      //   $scrollToTopEle.classList.remove("block");
      //   $scrollToTopEle.classList.add("hidden");
      // }
      $scrollToTopEle.setAttribute(
        "data-display",
        window.scrollY >= 300 ? "block" : "none"
      );
    });
    $scrollToTopEle.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  });