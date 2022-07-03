function forms() {

    const forms = document.querySelectorAll('form');

	forms.forEach((item) => {
		bindPostData(item);
	})

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы свяжемся с вами',
		failure: 'Что-то пошло не так...'
	}

	async function postData(url, data) {
		const res = await fetch(url, {
			method: "POST",
			body: data,
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			}
		});
		
		if (!res.ok) {
			throw new Error('post failed');
		}

		return res.json();
	}

	async function bindPostData(form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			
			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;

			form.insertAdjacentElement('afterend', statusMessage);

			const formData = new FormData(form);
			const formDataObject = Object.fromEntries(formData.entries())
			const json = JSON.stringify(formDataObject);

			try {
				await postData('https://jsonplaceholder.typicode.com/posts', json);
				showThanksModal(message.success);
				statusMessage.remove();
			} catch(error) {
				showThanksModal(message.failure);
				console.log(error.message);
			} finally {
				form.reset();
			}
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');
		prevModalDialog.classList.add('hide');

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
					<div data-close class="modal__close">&times;</div>
					<div class="modal__title">${message}</div>
			</div>		
		`;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add("show");
			prevModalDialog.classList.remove("hide");
			closeModal();
		}, 4000);
		
	}	
}

module.exports = forms;