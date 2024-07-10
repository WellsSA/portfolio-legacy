function loadSlider(projectFilter) {
  $('.carousel.mainProjects .carousel-item').remove();
mainProjects[projectFilter].map(project => {
  const image = project.gallery[0];
  const imageUrl = `${imagePath}/projects/${project.project}/miniature/${image.image}`
  $('.carousel.mainProjects').append(`
    <div class="carousel-item">
      <div class="project-item" id="${project._id}">
        <div class="image"><img src="${imageUrl}" alt="${image.imageTitle}"></div>
          <hr />
          <h3>${project.name}</h3>
          <p>${project.shortDescription}</p>
          <button class="button fit default showProject" projectFilter="${projectFilter}" projectId="${project._id}" id="${project._id}">Saiba mais</button>
          <hr />
          <div class="techs">
            ${this.loadTechnologiesById(project.technologies)}
          </div>
        </div>
    </div> 
  `); 
});
$('.techs-item').hover(techsItemHover);
$('button.showProject').on('click', showProjectClick);
}

function loadProjectText(projectFilter, projectId){
  const project = mainProjects[projectFilter].filter(project => project._id == projectId)[0];
  const { textTitle, text, gallery } = project;
  $('.division *').remove();
  $('.division').append(`
    <hr />  
    <h4>${textTitle}</h4>
    <p>${text}</p>
    <div class="carousel gallery"></div>
  `);

  gallery.map(galleryItem => {
    const { imageTitle, image } = galleryItem;
    const imageUrl = `${imagePath}/projects/${project.project}/low/${image}`
    $('.gallery').append(`
      <a class="carousel-item" href="#">
        <img src="${imageUrl}" alt="${imageTitle}">
      </a>
    `);
  });

  $('.carousel.gallery').carousel();
  $('.gallery .carousel-item').click(infoCarouselItemClick);
}

function loadTechnologiesById(techs){
  let stringToReturn = '';
  techs.map(techId => {
    const tech = technologies.filter(tech => tech._id === techId)[0];
    stringToReturn += `<span class="techs-item">${tech.name}</span>`
  });
  return stringToReturn; 
}

$(document).ready(() => {
  loadSlider("PHP");
})

techsItemHover = () => {
  console.log('@TODO hover tech item');
};

showProjectClick = function() {
  const projectFilter = $(this).attr('projectFilter');
  const projectId = $(this).attr('projectId');
  loadProjectText(projectFilter, projectId);
  scrollPage('#projectInfo', 0);
}
// $('.carousel').on('pressed', function(){
//   console.log('Sss')
// });
let senderssss = '';
infoCarouselItemClick = function(e) {
  const sender = e.target.parentElement;
  senderssss = sender;
  e.preventDefault();
  if($(sender).hasClass('active'))
  console.log('aqui');
}

//////////////////////////////////////////
function scrollPage(destino, acrescimo, delay) {
  $('html, body').animate({
      scrollTop: $(destino).offset().top + acrescimo
  }, (delay) ? delay : 1000);
}

