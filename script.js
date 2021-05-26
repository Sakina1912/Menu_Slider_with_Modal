const toggle = document.getElementById('btn-toggle')
const signUp = document.getElementById('btn-signUp')
const close = document.getElementById('btn-close')
const modal = document.getElementById('modal')



toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'))

signUp.addEventListener('click', () => modal.classList.add('show-modal'))

close.addEventListener('click', () => modal.classList.remove('show-modal'))

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false)