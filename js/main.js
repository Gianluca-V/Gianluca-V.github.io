
// Detect if a link's href goes to the current page
function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem, autoKill: true, ease: "ease" });
  }
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('a[href]').forEach(a => {
  ;
  a.addEventListener('click', e => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);


const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav__ul a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 450;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(".nav__ul a[href*=" + id + "]").classList.add("active");
      })
    }
  })
}

const skills = document.querySelector(".skills__container").innerHTML;

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener('click', (e) => {
  submitBtn.textContent = "Thanks :)";
})

handleDrag = () => {
  if (window.innerWidth <= 850) {
   
  }
  else {
    document.querySelectorAll(".skills__div").forEach((el) => {
      Draggable.remove(el)
    });
  }
}

innitSkills = ()=>{
  if (window.innerWidth <= 850) {
    document.querySelectorAll(".skills__div").forEach((el) => {
      Draggable.create(el, { bounds: document.querySelector(".skills__container"), inertia: true });
    });
  }
  else if(window.innerWidth > 850) {
    const skillsToggle = document.querySelector(".skills__title");
    skillsToggle.addEventListener("click", () => {
      document.querySelectorAll(".skills__div").forEach((el) => {
        el.classList.toggle("active");
        document.querySelectorAll(".skills__img").forEach(imgEl => {
          Draggable.create(imgEl, { type: "rotation", });
        })
      })
    });
  }
}

let prevWidth = window.innerWidth;

handleSkills = () => {
  if (window.innerWidth <= 850 && prevWidth > 850) {
    resetSkills();
    const skillsToggle = document.querySelector(".skills__title");
    skillsToggle.removeEventListener("click",()=>{});
    document.querySelectorAll(".skills__div").forEach((el) => {
      Draggable.get(el)?.kill();
      document.querySelectorAll(".skills__img").forEach(imgEl => {
        Draggable.get(imgEl)?.kill();
      })
      Draggable.create(el, { bounds: document.querySelector(".skills__container"), inertia: true });
    });
  }
  else if(window.innerWidth > 850 && prevWidth <= 850) {
    resetSkills();
    const skillsToggle = document.querySelector(".skills__title");
    skillsToggle.addEventListener("click", () => {
      document.querySelectorAll(".skills__div").forEach((el) => {
        Draggable.get(el)?.kill();
        el.classList.toggle("active");
        document.querySelectorAll(".skills__img").forEach(imgEl => {
          Draggable.get(imgEl)?.kill();
          Draggable.create(imgEl, { type: "rotation", });
        })
      })
    });
  }
  prevWidth = window.innerWidth;
}

resetSkills=()=>{
  let container = document.querySelector(".skills__container");
  container.innerHTML = skills;
}

window.onresize = () => {
  handleSkills(); 
}
innitSkills();