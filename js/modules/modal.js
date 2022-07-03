function modal()  {

    const modalTrigger = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');
	const modalCloseBtn = document.querySelector('[data-close]');  //data-close

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function openModal () {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		//clearTimeout(modalTimerId);
	}

	function closeModal () {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal();
		}
	});

	//const modalTimerId = setTimeout(openModal, 6000);

	function showModalByScroll() {
    const { pageYOffset } = window;
    const { clientHeight, scrollHeight } = document.documentElement;

    if (pageYOffset + clientHeight >= scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
	}

	window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;
