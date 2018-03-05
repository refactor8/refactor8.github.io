import Chart from './Chart.min.js'

var ctx = document.getElementById('frontend-chart')
var ctxBackend = document.getElementById('backend-chart')

var backend = {
  labels: [
    'Ruby on Rails',
    'Node.js',
    'Java',
    'Python'
  ],
  datasets: [
    {
      backgroundColor: [
        '#635380',
        '#2E294E',
        '#90708C',
        '#ACE4AA',
        '#E1CDB5'],
      data: [
        98,
        70,
        70,
        50
      ]
    }
  ]
}

var frontend = {
  labels: [
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'React'
  ],
  datasets: [
    {
      backgroundColor: [
        '#5BC0BE',
        '#2E294E',
        '#6FFFE9',
        '#141B41',
        '#306BAC'],
      data: [
        98,
        95,
        90,
        98,
        70
      ]
    }
  ]
}

var frontendOpts = {
  title: {
    display: true,
    text: 'Frontend expertise level'
  },
  responsive: true,
  maintainAspectRatio: true,
  legend: { display: false }
}

var backendOpts = {
  title: {
    display: true,
    text: 'Backend expertise level'
  },
  responsive: true,
  maintainAspectRatio: true,
  legend: { display: false }
}

var frontendChart = new Chart(ctx, {
  type: 'doughnut',
  data: frontend,
  options: frontendOpts
})

var backendChart = new Chart(ctxBackend, {
  type: 'doughnut',
  data: backend,
  options: backendOpts
})
