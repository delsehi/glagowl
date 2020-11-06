self.addEventListener('install', (e) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
    return cache.addAll([
      '/',
      '/icons/glagowl.png',
      '/index.js',
      '/css/master.css'
    ])
    })
  )
})
