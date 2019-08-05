self.addEventListener('install', (event) => {
	console.log('Service worker instalando');
})

self.addEventListener('activate', (event) => {
	console.log('Service worker ativando');
})

self.addEventListener('fetch', (event) => {
	
})