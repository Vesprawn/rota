'use strict'

let jobs = []
let workers = []

function addEvents () {
  let modals = document.getElementsByClassName('modal overlay')
  Array.from(modals).forEach((modal) => {
    modal.addEventListener('click', (e) => {
      removeClass(e.target, 'open')
    })
  })

  document.getElementById('add-job-btn')
  .addEventListener('click', () => {
    modal('add-job-modal', 'show')
    // addJob()
  })

  document.getElementById('add-worker-btn')
  .addEventListener('click', () => {
    // addWorker()
    modal('add-worker-modal', 'show')
  })
}

function addJob () {
  jobs.push({
    title: 'Box',
    start: '1800',
    end: '0000'
  })

  console.table(jobs)
}

function addWorker () {
  workers.push({
    name: 'Mike Malcolm',
    nameShort: 'Mike',
    availability: []
  })
  console.table(workers)
}

function modal (id, display) {
  let target = document.getElementById(id)

  if (display !== 'show') {
    target.classList.remove('open')
    return false
  }

  target.classList.add('open')
  return true
}

function removeClass (target, className) {
  target.classList.remove('open')
}

addEvents()
