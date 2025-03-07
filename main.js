document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    if (!img.getAttribute("src") || img.getAttribute("src").trim() === "") {
      let iconWrapper = document.createElement("div");
      let imgWidth = img.clientWidth || img.offsetWidth || "100px";
      let imgHeight = img.clientHeight || img.offsetHeight || "100px";
      iconWrapper.innerHTML = `
              <svg width="${imgWidth}" height="${imgHeight}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H21V21H3V3Z" stroke="#ccc" stroke-width="2"/>
                  <circle cx="12" cy="10" r="3" stroke="#ccc" stroke-width="2"/>
                  <path d="M3 17L8 12L12 16L16 12L21 17" stroke="#ccc" stroke-width="2"/>
              </svg>`;
      iconWrapper.style.width = imgWidth + "px";
      iconWrapper.style.height = imgHeight + "px";
      iconWrapper.style.display = "flex";
      iconWrapper.style.alignItems = "center";
      iconWrapper.style.justifyContent = "center";
      iconWrapper.style.background = "whitesmoke";
      iconWrapper.style.borderRadius = "8px";
      iconWrapper.style.overflow = "hidden";
      let parent = img.parentElement;
      if (parent) {
        parent.replaceChild(iconWrapper, img);
      }
    }
  });
});

////////////////////////////////////////////////////////////////////////

const firstMenuItem = document.querySelector(".right-menulist-menutitle .t-menui:nth-child(1)");
const secondMenuItem = document.querySelector(".right-menulist-menutitle .t-menui:nth-child(2)");
const thirdMenuItem = document.querySelector(".right-menulist-menutitle .t-menui:nth-child(3)");
const fourthMenuItem = document.querySelector(".right-menulist-menutitle .t-menui:nth-child(4)");
const fifthMenuItem = document.querySelector(".right-menulist-menutitle .t-menui:nth-child(5)");
const sixthMenuItem = document.querySelector(".right-menulist-menutitle .t-menui:nth-child(6)");
const seventhMenuItem = document.querySelector(".right-menulist-menutitle .t-menui:nth-child(7)");
const eighthMenuItem = document.querySelector(".right-menulist-menutitle .t-menui:nth-child(8)");

const submenu1 = document.querySelector(".left-menulist-details .submenuitems-1");
const submenu2 = document.querySelector(".left-menulist-details .submenuitems-2");

function showSubmenu(submenuToShow) {
  submenu1.style.display = "none";
  submenu2.style.display = "none";
  submenuToShow.style.display = "block";
}

firstMenuItem.addEventListener("mouseenter", () => showSubmenu(submenu1));
secondMenuItem.addEventListener("mouseenter", () => showSubmenu(submenu2));
thirdMenuItem.addEventListener("mouseenter", () => showSubmenu(submenu1));
fourthMenuItem.addEventListener("mouseenter", () => showSubmenu(submenu2));
fifthMenuItem.addEventListener("mouseenter", () => showSubmenu(submenu1));
sixthMenuItem.addEventListener("mouseenter", () => showSubmenu(submenu2));
seventhMenuItem.addEventListener("mouseenter", () => showSubmenu(submenu1));
eighthMenuItem.addEventListener("mouseenter", () => showSubmenu(submenu2));

submenu1.addEventListener("mouseleave", () => submenu1.style.display = "none");
submenu2.addEventListener("mouseleave", () => submenu2.style.display = "none");
