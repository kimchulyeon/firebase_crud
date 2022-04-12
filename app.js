const addBtn = document.querySelector('.btn-add')
const editBtn = document.querySelector('.btn-edit')
const deleteBtn = document.querySelector('.btn-delete')

const addModal = document.querySelector('.add-modal')

// Add User Button
addBtn.addEventListener('click', () => {
  addModal.classList.add('modal-show')
})

// click outside modal
addModal.addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target === addModal) {
    addModal.classList.remove('modal-show')
  }
})
