
// menunggu Alpine JS siap
document.addEventListener('alpine:init', () => {

	// deklarasi komponen button counter
	Alpine.data('btnCounter', () => ({
		clickCount: 0,

		// method untuk menambahkan nilai clickCount
		increment() {
			this.clickCount++;
		}
	}))
})