class Gallery {
    constructor(gallerySelector, modalSelector, imgSelector) {
      this.gallery = document.querySelector(gallerySelector)
      this.modal = document.querySelector(modalSelector)
      this.img = document.querySelector(imgSelector)
    };
  ​
    render(imagesArr) {
      imagesArr.forEach((img) => {
        this.gallery.insertAdjacentHTML(
          "afterbegin",
          `<li class="gallery__item">
          <a
            class="gallery__link"
            href=${img.original}
          >
            <img
              class="gallery__image"
              src=${img.preview}
              data-source=${img.original}
              alt='${img.description}'
            />
          </a>
        </li>`
        );
      });
      this.addListeners();
    };
  ​
    addListeners() {
      this.gallery.addEventListener("click", this.onClickGallery(this));
      this.modal.addEventListener("click", this.closeImg(this));
    };
  ​
    onClickGallery (event) {
      event.preventDefault();
      if (event.target.nodeName !== "IMG") {
        return;
      }
      this.img.src = event.target.dataset.source;
      this.modal.classList.add("is-open");
      window.addEventListener("keydown", this.nextOrPrevImg.bind(this));
      window.addEventListener("keydown", this.keyClose.bind(this));
    };
  ​
    onCloseImg = (event) => {
      let node = event.target.nodeName;
      if (node === "BUTTON" || node !== "IMG") {
        this.modal.classList.remove("is-open");
        this.img.src = "";
        window.removeEventListener("keydown", this.nextOrPrevImg.bind(this));
        window.removeEventListener("keydown", this.keyClose.bind(this));
      }
    };
  ​
    keyClose = (event) => {
        if (event.key === "Escape") {
          this.modal.classList.remove("is-open");
          this.img.src = "";
          window.removeEventListener("keydown", this.nextOrPrevImg.bind(this));
          window.removeEventListener("keydown", this.keyClose.bind(this));
        }
      }
    
      nextOrPrevImg = (event) => {
        let imgs = this.gallery.querySelectorAll(".gallery__image");
        if (event.key === "ArrowRight") {
          this.nextImg(imgs);
        }
        if (event.key === "ArrowLeft") {
          this.prevImg(imgs);
        }
      };
          
      nextImg(images) {
        if (event.key === "ArrowRight") {
          for (let i = 0; i < images.length; i += 1) {
            if (this.img.src === images[images.length - 1].dataset.source) {
              break;
            }
            if (this.img.src === images[i].dataset.source) {
              this.img.src = images[i + 1].dataset.source;
              break;
            }
          }
        }
      };
    
      prevImg(images) {
        if (event.key === "ArrowLeft") {
          for (let i = 0; i < images.length; i += 1) {
            if (this.img.src === images[0].dataset.source) {
              break;
            }
            if (this.img.src === images[i].dataset.source) {
              this.img.src = images[i - 1].dataset.source;
              break;
            }
          }
        }
      }
  };
  ​
  import galleryItems from "../gallery-items.js";
  ​
  let sunflowersGallery = new Gallery(
    ".js-gallery",
    ".js-lightbox",
    ".lightbox__image"
  );
  ​
  sunflowersGallery.render(galleryItems);
  console.log(sunflowersGallery);