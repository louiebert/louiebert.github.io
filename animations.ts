const cbpAnimatedHeader = (function (): void {
  const docElem: HTMLElement = document.documentElement;
  let didScroll: boolean = false;
  let changeHeaderOn: number = 50;

  function init(): void {
    window.addEventListener(
      "scroll",
      function (event: Event): void {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 50);
        }
      },
      false,
    );
  }

  function scrollPage(): void {
    const titleNameElement = document.getElementById("titleName");
    if (titleNameElement) {
      changeHeaderOn = titleNameElement.getBoundingClientRect().top;
    }
    const sy: number = scrollY();
    const headerElement = document.getElementById("header");
    if (headerElement) {
      if (sy >= changeHeaderOn) {
        headerElement.className = "cbp-af-header cbp-af-header-shrink";
      } else {
        headerElement.className = "cbp-af-header";
      }
    }
    didScroll = false;
  }

  function scrollY(): number {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();
})();