
function main() {
  let setupAudio = (e) => {
    let id = e.getAttribute('fid')
    let eAudio = document.createElement('audio')
    eAudio.src = `sound/e${id}.mp3`
    e.append(eAudio)
    e.addEventListener('click', _e => {
      eAudio.play()
    })
    eAudio.addEventListener('play', _e => {
      e.classList.add('playing')
    })
    eAudio.addEventListener('ended', _e => {
      e.classList.remove('playing')
    })
    e.append('🔉\ufe0e')
  }

  for (let e of document.querySelectorAll('.listen')) {
    setupAudio(e)
  }
}

document.addEventListener('DOMContentLoaded', main)
