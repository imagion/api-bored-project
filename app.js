const list = document.querySelector('.list')

async function getActivity() {
  try {
    const res = await fetch('http://www.boredapi.com/api/activity')
    const data = await res.json()
    console.log(data)
    if (list.childNodes.length == 3) {
      list.innerHTML = ''
    }
    console.log(list.childNodes.length)
    const el = document.createElement('li')
    el.innerHTML = data.activity
    list.appendChild(el)
  } catch (e) {
    console.error(e)
  }
}

getActivity()

const button = document.querySelector('.button')
button.addEventListener('click', getActivity)
