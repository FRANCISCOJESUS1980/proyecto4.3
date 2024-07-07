import './main.scss'

const contenidoHTML = `
<header class="header">
  <div class="switches">
    <div id="toggle-theme" class="toggle-theme">
      <img
        id="toggle-icon"
        src="./assets/icons.svg/moon.svg"
        alt="icon theme"
        class="toggle-theme__icon"
      />
      <p id="toggle-text" class="toggle-theme__text">Dark Mode</p>
    </div>
  </div>
  <div id="toggle-colors" class="colors">
    <div
      data-color="hsl(214, 84%, 56%)"
      class="colors__item colors__item--blue"
    ></div>
    <div
      data-color="hsl(150, 84%, 56%)"
      class="colors__item colors__item--green"
    ></div>
    <div
      data-color="hsl(276, 84%, 56%)"
      class="colors__item colors__item--purple"
    ></div>
    <div
      data-color="hsl(46, 84%, 56%)"
      class="colors__item colors__item--orange"
    ></div>
  </div>
</header>
<main class="main">
  <section class="column column--left">
    <article class="card card--profile">
      <div class="card__image-container">
        <img src="./assets/imagenes.jgp/perfil.jpg" alt="perfil" />
      </div>
      <div class="card__header">
        <h2 class="card__title no-margin">FranciscoDesings</h2>
        <p class="card__subtitle">Estudiante THEPOWER</p>
      </div>
      <div class="car__body">
        <div class="card__link">
          <i class="fas fa-envelope icon"></i>
          <a href="jesusgonzalezvergara@hotmail.com"
            >francisco@hotmail.com</a
          >
        </div>
        <div class="card__link">
          <i class="fas fa-phone-alt icon"></i>
          <a href="tel:12345678">+34-12345678</a>
        </div>
        <p class="card__text">
          Mas de 25 años como empresario en el sector del mobiliario y
          decoracion, pero desde hace 4 meses estoy estudiando un Master en
          programacion en la empresa THE POWER, siempre he destacado por mi
          constancia y cumplir mis objetivos, ahora me he marcado este y
          espero estar a la altura de lo que se me pide
        </p>
      </div>
    </article>
    <article class="card card--experience">
      <h2 class="card__title">Experiencies</h2>
      <div class="experience">
        <img src="./assets/imagenes.jgp/logo tienda.jpg" alt="logo" class="experience__image">
        <div class="experience__info">
          <p class="experience__time">
            Enero 2000- Current
          </p>
          <h3 class="experience__job">Gerente Mobiliario</h3>
          <p class="experience__description">Tengo varias tiendas de muebles y electrodomesticos desde el año 2000 a la actualidad y basicamente vendemos de todo para el hogar</p>
        </div>
      </div>
      <div class="experience">
        <img src="./assets/imagenes.jgp/logopower.jpg" alt="logo" class="experience__image">
        <div class="experience__info">
          <p class="experience__time">
            Marzo 2024 - actualidad
          </p>
          <h3 class="experience__job">Estudiante ThePower</h3>
          <p class="experience__description">Desde el 27 de Marzo de 2024 estoy asistiendo a clases de programacion en un master online en una de las mejores empresas del mundo, donde te proporcionan unas herramientas y conocimientos para estar muy por encima de la media en este sector</p>
        </div>
      </div>
    </article>
    <article class="card ">
     <h2 class="card__title">Hobbies</h2>
     <div class="card--hobbies">
      <div class="card__image-container">
        <img src="./assets/imagenes.jgp/volar.jpg" alt="Avioneta">
      </div>
      <h3 class="hobbie__title">Volar en Avioneta</h3>
      <p class="card__text">Me encanta volar en avioneta es una sensacion unica de libertad y dejarte llevar por el viento como si fueses un pajaro, da ganas de quedarse alli arriba para siempre</p>
      </div>
      <div class="card--hobbies">
      <div class="card__image-container">
        <img src="./assets/imagenes.jgp/tiro.jpg" alt="tiro olimpico">
      </div>
      <h3 class="hobbie__title">Tiro Olimpico</h3>
      <p class="card__text">Desde hace unos 10 años pertenezco al club sevilla de Tiro Olimpico con pistola de 9 mm en la modalidad de precision y rapidez. Mi modalidad se basa en disparar a una mano desde 25 metros a una diana</p>
      </div>
      <div class="card--hobbies">
      <div class="card__image-container">
        <img src="./assets/imagenes.jgp/fortnite.jpg" alt="Fortnite">
      </div>
      <h3 class="hobbie__title">Gamer</h3>
      <p class="card__text">Tengo un grupo de amigos con los que quedamos practicamente todos los dias para echar unas partidas a un juego que se llama Fornite, consiste en caer en una isla he ir matando a todos los enemigos he intentar que solo quedes tu para ganar</p>
      </div>
       <div class="card--hobbies">
      <div class="card__image-container">
        <img src="./assets/imagenes.jgp/crosfit.JPG" alt="crosfit">
      </div>
      <h3 class="hobbie__title">crosfit</h3>
      <p class="card__text">Al trabajar de cargador de pequeño me destroze la espalda y gracias al crosfit el cual conoci en 2012, me cambio la vida, pase de estar siempre dolorido a estar mas en forma que nunca, es un deporte que le recomiendo a todo el mundo</p>
       </div>
    </article>
  </section>
  <section class="column column--right">
    <article class="card">
      <h2 class="card__title">FRONT END</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">HTML</p>
          <div class="skills__bar skills__bar--90"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">CSS</p>
          <div class="skills__bar skills__bar--90"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">JAVASCRIPT</p>
          <div class="skills__bar skills__bar--60"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">PHP</p>
          <div class="skills__bar skills__bar--10"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">REACT</p>
          <div class="skills__bar skills__bar--10"></div>
        </div>
      </div>
    </article>
    <article class="card">
      <h2 class="card__title">DESIGN</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">Photshop</p>
          <div class="skills__bar skills__bar--20"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Ilustrador</p>
          <div class="skills__bar skills__bar--70"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Figma</p>
          <div class="skills__bar skills__bar--50"></div>
        </div>
     </article>
    <article class="card">
      <h2 class="card__title">MULTIMEDIA</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">After Effects</p>
          <div class="skills__bar skills__bar--70"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Premiere</p>
          <div class="skills__bar skills__bar--60"></div>
        </div>
    </article>
    <article class="card card--project">
      <div class="card__image-container">
        <img src="./assets/imagenes.jgp/proyecto1.jpeg" alt="landing page" class="card__image">
      </div>
      <div class="project">
        <div class="project__tags">
          <span class="project__tag">#HTML</span>
          <span class="project__tag">#CSS</span>
          <span class="project__tag">#Responsive</span>
        </div>
        <h2 class="card__title">Landing Page</h2>
        <p class="card__text">Teniamos que hacer una landing page con HTML Y CSS en la que todo estuviese responsive y con buenas practicas</p>
        <p class="card__text">Este al ser mi primer proyecto y acababa de empezar fue el que mas me costo y mas trabajo me dio, por lo tanto es al que mas cariño le tengo</p>
      <div class="buttons">
        <a href="https://tubular-lolly-c6809e.netlify.app/" class="button button--primary">Demo</a>
        <a href="https://github.com/FRANCISCOJESUS1980/PROYECTO-1" class="button button--ghost">Code</a>
      </div>
    </article>
    <article class="card card--project">
      <div class="card__image-container">
        <img src="./assets/imagenes.jgp/proyecto2.jpeg" alt="landing page" class="card__image">
      </div>
      <div class="project">
        <div class="project__tags">
          <span class="project__tag">#HTML</span>
          <span class="project__tag">#CSS</span>
          <span class="project__tag">#JavaScript</span>
          <span class="project__tag">#Responsive</span>
        </div>
        <h2 class="card__title">Landing Page</h2>
        <p class="card__text">En este proyecto nos pedian hacer una pagina, donde un usuario tenia unos productos para elegir, ademas debia tener un modal con un buscador</p>
        <p class="card__text">Este fue el segundo proyecto y el tema css y html se me dio muy rapido y bien, con el javascript ya tuve mas problemas, tambien le guardo un cariño especial porque fue le primero con javascript</p>
      <div class="buttons">
        <a href="https://beamish-pothos-bcd5df.netlify.app" class="button button--primary">Demo</a>
        <a href="https://github.com/FRANCISCOJESUS1980/proyecto2.5.git" class="button button--ghost">Code</a>
      </div>
    </article>
    <article class="card card--project">
      <div class="card__image-container">
        <img src="./assets/imagenes.jgp/proyecto3.jpeg" alt="landing page" class="card__image">
      </div>
      <div class="project">
        <div class="project__tags">
          <span class="project__tag">#HTML</span>
          <span class="project__tag">#CSS</span>
          <span class="project__tag">#JavaScript</span>
          <span class="project__tag">#Responsive</span>
        </div>
        <h2 class="card__title">Landing Page</h2>
        <p class="card__text">Este proyecto consistia en saber utilizar las Apis y hacerle peticiones segun el criterio del usuario</p>
        <p class="card__text">El tercer proyecto, excepto la parte de las Api que era la primera vez que la hacia el resto fue bastante bien y rapido, por ahora creo mi mejor proyecto tanto en maquetacion como en funcionalidad y estructuracion</p>
      <div class="buttons">
        <a href="https://heartfelt-twilight-cc89a6.netlify.app" class="button button--primary">Demo</a>
        <a href="https://github.com/FRANCISCOJESUS1980/proyecto-3" class="button button--ghost">Code</a>
      </div>
    </article>
  </section>
</main>
`

document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.querySelector('.app')
  appDiv.innerHTML = contenidoHTML

  const toggleTheme = document.getElementById('toggle-theme')
  const toggleIcon = document.getElementById('toggle-icon')
  const toggleText = document.getElementById('toggle-text')

  const toggleColors = document.getElementById('toggle-colors')
  const rootStyles = document.documentElement.style

  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (toggleIcon.src.includes('moon.svg')) {
      toggleIcon.src = './assets/icons.svg/soleado.png'
      toggleText.textContent = 'Light Mode'
    } else {
      toggleIcon.src = './assets/icons.svg/moon.svg'
      toggleText.textContent = 'Dark Mode'
    }
  })

  toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
  })
})
