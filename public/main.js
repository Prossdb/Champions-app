const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('message')

update.addEventListener('click', _ =>{
    fetch('/teams', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
name: 'Prosper',
surname: 'Dube',
teams: 'Arsenal.'
    })
    
    })
    .then(res =>{
        if (res.ok) return res.json()
    })
.then (response => {
    window.location.reload(true)
})
} )

deleteButton.addEventListener('click', _ => {
    fetch('/teams', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Prosper',
            surname: 'Dube',
            teams: 'Arsenal.'
    })
})
.then(res =>{
    if (res.ok) return res.json()
})
.then (response => {
    if (response === 'No team to delete') {
        messageDiv.textContent = 'No team to delete'
      } else {
        window.location.reload(true)
      }
})
.catch(error => console.error(error))
} )