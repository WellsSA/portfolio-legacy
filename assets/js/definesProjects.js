const imagePath = 'images';


const technologies = [
  {
    _id: 1,
    name: 'JQuery'
  },
  {
    _id: 2,
    name: 'PHP'
  },
  {
    _id: 3,
    name: 'Javascript'
  },
  {
    _id: 4,
    name: 'React'
  }

];
const mainProjects = {
  PHP: [
    {
      _id: 1,
      name: 'Envia',
      project: 'envia',
      shortDescription:
        'Envia é um ferramenta para comunicação escola-aluno que permite envios personalizados de e-mail e SMS de acordo com turmas, professores, alunos específicos, responsáveis e muito mais!',
      textTitle: 'Mais do que uma Startup',
      text: ` <p>Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.</p>
		
              <p>Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.</p>`,
      technologies: [1, 2, 3, 4, 2, 1],
      gallery: [
        {
          imageTitle: 'envia05',
          image: 'Mobile_Envia05.jpg',
          imageWebP: 'Mobile_Envia05.webp'
        },
        {
          imageTitle: 'envia04',
          image: 'Mobile_Envia04.jpg',
          imageWebP: 'Mobile_Envia04.webp'
        },
        {
          imageTitle: 'envia04',
          image: 'Mobile_Envia04.jpg',
          imageWebP: 'Mobile_Envia04.webp'
        },
        {
          imageTitle: 'envia04',
          image: 'Mobile_Envia04.jpg',
          imageWebP: 'Mobile_Envia04.webp'
        },
        {
          imageTitle: 'envia04',
          image: 'Mobile_Envia04.jpg',
          imageWebP: 'Mobile_Envia04.webp'
        }
      ]
    },
    {
      _id: 2,
      name: 'NOME DO PROJETO',
      project: 'no-one',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia assumenda aperiam error, amet quasi? Veniam nemo odio, sed, cum inventore illum architecto quos est, numquam illo magni quia maxime?',
      textTitle: 'FEUGIAT ALIQUAM',
      text: ` <p>Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.</p>
		
              <p>Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.</p>`,
      technologies: [1, 1, 1, 1, 1, 1],
      gallery: [
        {
          imageTitle: 'without-image',
          image: 'without-image.jpg',
          imageWebP: 'without-image.webp'
        }
      ]
    },
    {
      _id: 3,
      name: 'NOME DO PROJETO',
      project: 'no-one',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia assumenda aperiam error, amet quasi? Veniam nemo odio, sed, cum inventore illum architecto quos est, numquam illo magni quia maxime?',
      textTitle: 'FEUGIAT ALIQUAM',
      text: ` <p>Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.</p>
		
              <p>Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.</p>`,
      technologies: [1, 1, 1, 1, 1, 1],
      gallery: [
        {
          imageTitle: 'without-image',
          image: 'without-image.jpg',
          imageWebP: 'without-image.webp'
        }
      ]
    },
    {
      _id: 4,
      name: 'NOME DO PROJETO',
      project: 'no-one',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia assumenda aperiam error, amet quasi? Veniam nemo odio, sed, cum inventore illum architecto quos est, numquam illo magni quia maxime?',
      textTitle: 'FEUGIAT ALIQUAM',
      text: ` <p>Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean erat diam, tempus aliquet erat.</p>
		
              <p>Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit, eget condimentum nunc blandit vel. In at pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget, fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim vel, posuere finibus justo. Vivamus facilisis maximus nibh quis pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum. Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.</p>`,
      technologies: [1, 1, 1, 1, 1, 1],
      gallery: [
        {
          imageTitle: 'without-image',
          image: 'without-image.jpg',
          imageWebP: 'without-image.webp'
        }
      ]
    }
    // {
//       _id: 1,
    //   name: '',
    //   project: '',
    //   shortDescription: '',
    //   textTitle: '',
    //   text: '',
    //   technologies: [1,1,1,1,1,1],
    //   gallery: [
    //     {
    //       imageTitle: '',
    //       image: '',
    //       imageWebP: ''
    //     }
    //   ]
    // }
  ]
};
