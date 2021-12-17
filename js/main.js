
function main() {
  let setupAudio = (e) => {
    let id = e.getAttribute('fid')
    let eAudio = document.createElement('audio')
    eAudio.src = `sound/e${id}.mp3`
    e.append(eAudio)
    e.addEventListener('click', _e => {
      eAudio.play()
    })
    e.append('🔉\ufe0e')
  }

  for (let e of document.querySelectorAll('.listen')) {
    setupAudio(e)
  }
}

document.addEventListener('DOMContentLoaded', main)
