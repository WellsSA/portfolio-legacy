const ultimaAtualizacao = '16/06/2019';

startWebP();
let webPSupported = false;
function startWebP(){
    Modernizr.on('webp', function (result) {
        // console.log('modernizr');
        if (result) {
            // supported
            $('.img-webp').each(function () {
                this.src = $(this).data('webp');
            });
            webPSupported = true;
        } else {
            // not-supported
            $('.img-webp').each(function () {
                this.src = $(this).data('original');
            });
        }
    });
}

//Navega até as sessões da página
$('.linkClick').on('click', function () {
    let destino = $(this).attr('alt');
    if ($(this).find('.label').text() == 'Contatos') scrollPage("#" + destino, 0, 2000);
    else scrollPage("#" + destino, 0);
    $('#menu .close').click();
});
let contClick = 0;
// Leva até a Section de Projetos e prepara o carrossel
buttonProjectsClick = function () {
    if(cont++ % 2 == 0) return ;

    const projectFilter = $(this).attr('projectFilter');
    
    loadProjects(projectFilter);
    
    scrollPage("#code", 1); //top + 1
};
function loadProjects(projectFilter) {
    projectFilter = (projectFilter !== 'none') ? projectFilter : missingProjectsMessage();
    $('#code').css('display', 'block');
    $('.carousel.mockups .carousel-item').remove();
    const imageQuality = ($(document).width() < 600 ? 'low' : 'medium');
    for (item of projects[projectFilter]) {
        let image = `${path}/projects/${item.project}/${imageQuality}/${item.image}`;
        let imageWebP = `${path}/projects/${item.project}/${imageQuality}/${item.imageWebP}`;
        $('.carousel.mockups').append(`
            <div class="carousel-item white-text">
                <h2>${item.title}</h2>
                <p class="white-text">${item.description}</p>
                <img class="carousel-item-backimage img-webp" data-original="${image}" data-webp="${imageWebP}"/>
            </div>
        `);
    }
    $('.carousel.carousel-slider.mockups').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.carousel.mockups .carousel-item').click(() => $('.carousel.mockups').carousel('next'));
    startWebP();
}

function loadCertificates() {
    certificates.map(certificate => {
        let image = `${path}/certificates/low/${certificate.image}`;
        let imageWebP = `${path}/certificates/low/${certificate.imageWebP}`;
        $('.carousel.certificates').append(`
            <div class="carousel-item white-text" href="${certificate.href}">
                <img class="carousel-item-backimage img-webp" data-original="${image}" data-webp="${imageWebP}">
            </div>
        `);
    });
    $('.carousel.carousel-slider.certificates').carousel({
        fullWidth: true,
        indicators: false
    });
    $('.carousel.certificates .carousel-item').click(() => $('.carousel.certificates').carousel('next'));
}

function loadLanguagesSection() {
    features.map(feature => {
        $('ul.features').append(`
            <li class="icon ${feature.icon}">
                <h3>${feature.title}</h3>
                <p class="personal-text">${feature.personalText}</p>
                <div class="professional-text hidden">${feature.professionalText}
                  <div class="align-right features-link"><a href="${feature.reference.link}" target="_blank">${feature.reference.title}</a></div>
                </div>
                <button class="button fit default projects" projectFilter="${feature.projectFilter}">Ver projetos</button>
            </li>
        `);
    });

    $('button.projects').on('click', buttonProjectsClick);
}

function loadBadges() {
    badges.map(badge => {
        $('.badgesContent').append(`
            <div class="badge badge-item">
                <img class="img-webp" data-original="${badge.image}" data-webp="${badge.imageWebP}" alt="Well S.A. Issued Badge">
                <a href="${badge.link}" target="_blank"><button>Verify</button></a>
            </div>
        `);
    });

    $('button.projects').on('click', buttonProjectsClick);
}

function loadFutureProjects() {
  // $('.futureProjects').remove();
  futureProjects.map(project => {
    const { title, items } = project;    
    $('.futureProjects').append(`
      <h5>${title}</h5>
      <ul>
        ${items.map(item => `<li>${item.name}</li>`).join(' ')}
      </ul>
    `);
  });
}

function loadEvents(sort, limit, skip) {
    sort = (sort) ? +1 : -1;
    limit = (limit) ? limit : 3;
    skip = (skip) ? skip : 0;
    $('.spotlight, #moreNotices').remove();
    events.sort(() => sort).slice(skip, limit).map(event => {
        $('#events').append(`
            <section class="spotlight">
                <div class="image"><img class="img-webp" data-original="${event.image}" data-webp="${event.imageWebP}" alt="${event.title}" /></div>
                <div class="content event">
                    <span class="eventDate">${event.date}</span>
                    <h2>${event.title}
                        <span class="internSubtitle">${event.subtitle}</span>
                    </h2>
                    <p class="txt-compressed txt-active">${this.formatText(event.shortDescription)}</p>
                    <div class="txt-expanded">
                        ${this.formatText(event.text)}
                    </div>
                    <span class="more"><button class="button fit moreInfo">Saiba mais</button></span>
                </div>
            </section>
        `);
    });
    $('button.moreInfo').click(moreInfoClick);
    $('#events').append(`  
            <div class="content" id="moreNotices">
                <div class="more">
                    <button class="button fit large moreNotices">Mais notícias</button>
                </div>
            </div>`);
    $('.moreNotices').click(moreNoticesClick);
}
// botão de retornar ao topo!
$('.btnTop').on('click', function () {
    scrollPage('#one', -50); //top - 1
});
// gambiarra bem auto-explicativa, não? shuahsua
function scrollPage(destino, acrescimo, delay) {
    $('html, body').animate({
        scrollTop: $(destino).offset().top + acrescimo
    }, (delay) ? delay : 1000);
}
//pra quando aparecer o code // Nota: Comentário antigo, nem eu sei o que eu fiz aqui kkkk
let $header = $('#header');
$('#coding').scrollex({
    top: $header.outerHeight() - 1,
    // terminate:	function() { $header.removeClass('alt'); },
    enter: function () { $header.removeClass('alt'); },
    leave: function () { $header.addClass('alt'); }
});

$('#cta').scrollex({
    top: $header.outerHeight() - 1,
    enter: function () { $('#page-wrapper').css('background-image', ('linear-gradient(top, rgba(0,0,0,0.5), rgba(0,0,0,0.5))', 'url("https://wallpapercave.com/wp/wp1904056.jpg")')); },
    leave: function () { $('#page-wrapper').css('background-image', 'radial-gradient(rgba(0,0,0,1), rgba(0,0,0,0.7), rgba(0,0,0,0.3))'); }
});

// função pra teste de animação @Apagar
$('#reanimate').click(function () {
    $('.A, .W, .S, .esconde').toggleClass('active');
});

// Quando o usuário clicar em "Saiba mais" na parte de Notícias/Eventos
moreInfoClick = (event) => {
    let button = event.target;
    let spotlight = $(button).parents().eq(2);
    let transit;
    // Altera texto no botão
    $(button).text(($(button).text() == 'Saiba mais') ? 'Mostrar menos' : 'Saiba mais');

    //controla a velocidade da animação
    if (spotlight.hasClass('expanded')) transit = { initial: 1000, final: 600 };
    else transit = { initial: 400, final: 1000 };

    // Animações --> Cheque os Keyframes relacionados a expanded e a show-text
    spotlight.slideToggle(transit.initial).slideToggle(transit.final).toggleClass('expanded');

    // Pega o tamanho do Spotlight para ajudar no Scroll. ex: '512px'
    let str = $(spotlight).css('height');
    // Remove o 'px' no fim da String. ex: 512
    let val = parseInt(str.substring(0, str.length - 2));
    // scrollPage(spotlight, 0);
    // Scroll de expansão quando estiver em mobile ou não. auto-explicativo :D 
    if ($('body').hasClass('is-mobile'))
        if (spotlight.hasClass('expanded')) scrollPage(spotlight, 0); //open
        else scrollPage(spotlight, 0); //close
    else
        if (spotlight.hasClass('expanded')) scrollPage(button, val / 5, 2000); //open
        else scrollPage(spotlight, 1, 2000); //close
    spotlight.find('.txt-compressed, .txt-expanded').toggleClass('txt-active');
};

// Armazenar quantidade de clicks do Switch Pessoal/Profissional
let cont = 0;
// Quando o user clicar no Switch Pessoal/Profissional
$('.switch_type2').click(() => {
    // O Switch sempre retorna 2 clicks por vez, este controle faz o código aqui ser executado apenas 1 vez :D
    if (cont++ % 2 != 0) {
        // Troca background
        $('#coding').toggleClass('professional');
        // Troca texto
        $('.personal-text, .professional-text').toggleClass('hidden');
    }

});
function developmentMessage() {
    return `\nMuito obrigado pelo interesse! :D 
            \nEsta função ainda está em desenvolvimento.
            Ultima atualização em ${ultimaAtualizacao}.`;
}
function missingProjectsMessage() {
    const currentTech = "PHP";
    // alert(`\nFico contente com o interesse!! :D 
    //         \nAinda não foram colocados projetos dessa tecnologia.
    //         \nEnquanto isso, que tal aproveitar e conferir os projetos de ${currentTech}??
    //         \nUltima atualização em ${ultimaAtualizacao}.`);
    return currentTech;
}
// Quando o usuário clicar em "Mais notícias"
moreNoticesClick = () => {
    alert(developmentMessage());
};
// Quando o usuário clicar em "Ver Projetos"
$('.seeProjects').click(() => {
    alert(developmentMessage());
});
// Quando o usuário clicar em "Link Certificado"
$('.btnCertLink').click(() => {
    // alert(developmentMessage());
    let href = $('.certificates .carousel-item.active').attr('href');
    window.open(href, '_blank');
});
$('.arrow-left').click(() =>$('.carousel.certificates').carousel('prev'));
$('.arrow-right').click(() =>$('.carousel.certificates').carousel('next'));

function cloneFooter() {
    $('#menuFooter').html($('#footer .icons, #footer .copyright').clone());
}
function initializePersonalToProfessionalSwitch() {
    $('.switch_type2 .switch__toggle').css('transform', 'translate3d(var(--uiSwitchIndent), -50%, 0)');
}
$(document).ready(() => {
    // console.log('ready');
    // Inicialização do Switch Pessoal/Profissional
    initializePersonalToProfessionalSwitch();
    //Inicialização dos textos Pessoal/Profissional
    // features.map(item => {
    //     $('ul.features').append(`
    //         <li class="icon ${item.icon}">
    //             <h3>${item.title}</h3>
    //             <p class ="personal-text" id ="zezims">${item.personalText}</p>
    //             <p class ="professional-text hidden">${item.professionalText}</p>
    //             <button class="button fit default projects" projectFilter="${item.projectFilter}">Ver projetos</button>
    //         </li>
    //     `);
    // });
    cloneFooter();
    loadFutureProjects();
    loadLanguagesSection();
    loadEvents(true, 5);
    loadProjects("PHP");
    loadBadges();
    loadCertificates();
    startWebP();
});

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    // return target.replace(new RegExp(search, 'g'), replacement);
    return target.split(search).join(replacement);
};

function formatText(text) {
    return text
        .replaceAll('#++++', '<p class="internSection">')
        .replaceAll('++++#', '</p>')

        .replaceAll('#~', '<h3 class="internTitle">')
        .replaceAll('~#', '</h3>')

        .replaceAll('<3', '&#128153;')
        .replaceAll('#ln', '<span class="ln"></span>')
        .replaceAll('#tab', '&nbsp;&nbsp;&nbsp;&nbsp;')

        .replaceAll('#em', '<em>')
        .replaceAll('em#', '</em>')

        .replaceAll('#b', '<strong>')
        .replaceAll('b#', '</strong>')
}
