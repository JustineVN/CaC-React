const videos = [
    {
      iframe    : '<<iframe width="560" height="315" src="https://www.youtube.com/embed/VG7Sae0BTpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title     : 'Selena Gomez - Alone With You (ft. Shawn Mendes)',
      subtitle  : 'Selena Gomez - Alone With You (ft. Shawn Mendes) (Style Music)',
    },
    {
      iframe    : '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/ndVxD9u95Z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title     : 'Ed Sheeran, Martin Garrix, Avicii, Kygo, Dua Lipa, The Chainsmokers Style - Feeling Me',
      subtitle  : 'Ed Sheeran, Martin Garrix, Avicii, Kygo, Dua Lipa, The Chainsmokers Style - Feeling Me #Deephouse​ #Chillout​ #Houserelax2021​ #Summermix2021​ #Summermusicmix2021 🔔 Listen on Spotify:...',
    },
    {
      iframe    : '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/OKf7dUROnOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title     : 'Relaxing Whiskey Blues Music - Best Of Slow Blues, Rock Ballads Songs - Jazz Blues Music',
      subtitle  : '🥃🎸Music is also used for what you say, not just for entertainment, but also for accompanying us while we perform other missions. My passion is writing, and my habit of listening to blues while doing it produces amazing results because of the simple fact that it motivates and ignites the imagination. This playlist features great songs and performers. ',
    },
    {
      iframe    : '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/ANF1X42_ae4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title     : 'Curso Git Introducción Vídeo 1',
      subtitle  : 'Comenzamos un nuevo curso donde aprenderemos el uso de esta imprescindible herramienta para todo programador. Para más cursos, ejercicios y manuales visita: www.pildorasinformaticas.es',
    },
    {
      iframe    : '<iframe class="grow shadow" width="346" src="https://www.youtube-nocookie.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title     : 'Curso JavaScript: 1. Introducción - #jonmircha',
      subtitle  : 'En este video comienzo un nuevo curso de #JavaScript, donde te doy una introducción a la historia y características del lenguaje.',
    }
  ]
  
  const html = `<li>
                  <div class="d-flex flex-column flex-md-row mb-2">
                    %iframe%
                    <div class="container-md">
                      <span class="yt-title">%title%</span> <br>
                      <small class="yt-title yt-subtitle">%extra%</small> <br>
                      <small class="yt-title yt-subtitle">%subtitle%</small>
                    </div>
                  </div>
                </li>`
                
const mostrar_videos = () => {
let videoNb = document.getElementById('videoQ')
let cantidad = parseInt(document.getElementById('cantidad').value)
let nro_frame = 0
video.innerHTML = ''
    
    for (let index = 0; index < videoNb; index++) {    
      videos.innerHTML += html.replace('%iframe%',   videos[nro_frame].iframe)
                             .replace('%title%',    videos[nro_frame].title)
                             .replace('%subtitle%', videos[nro_frame].subtitle)
  
      nro_frame = nro_frame === 4 ? 0 : nro_frame + 1
    }                
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('load').addEventListener('click', e => {
      mostrar_videos()
    })
    
    document.getElementById('cantidad').addEventListener('keyup', e => {
      if (e.key == 'Enter') {
        mostrar_videos()
      }
    })
    
  })