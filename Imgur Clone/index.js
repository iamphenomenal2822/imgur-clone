// const key = `Menfd1Dd6PAOP4_7tbpkNfdKj2pIihI24KDm04Cvmxc`;
const url = `https://api.unsplash.com/photos/?client_id=Menfd1Dd6PAOP4_7tbpkNfdKj2pIihI24KDm04Cvmxc`;
const count = 4;
const loader = document.querySelector("#loader-img");
let image_grid = document.querySelector(".image-grid");
let appendPic = photos => {
    photos.forEach(photo => {
        let elem = document.createElement("div");
        elem.classList.add("image-item");
        elem.style.backgroundColor = photo.color;
        elem.innerHTML = `
        <a href = "${photo.links.download}"target="_blank"/>
        <img src = "${photo.urls.regular} = ">
        <div class = "overlay">
          <div class = "download">+</div>
        </div>
        </a>`;
        image_grid.appendChild(elem);
    });
};

let loadMore = () => {
    let photos = [];
    loader.style.display = "block";
    fetch(`${url}&count=${count}`)
    .then((res) => {
        return res.json();
    })
    .then(data => {
        photos.push(...data);
        appendPic(photos);
        loader.style.display = "none";
    })
    .catch(error => {
        console.log(error);
    });
};

window.addEventListener("scroll",function(){
    if((window.innerHeight + window.scrollY) >= this.document.body.offsetHeight - 10){
        loadMore();
    }
});
loadMore();

let search = () => {
    let search_term = localStorage.getItem("search_term");
    let res = await 
}