self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('v1').then((cache) => {
    return cache.addAll([
      './',
      './icons/glagowl.png',
      './index.js',
      './css/master.css'
    ])
  }).catch(error) {
    console.log(error)
  }
  )
})

self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request)
      })
    )
})

self.addEventListener('activate', (e) => {
  self.clients.claim()
})
