fetch("https://api.github.com/users/solder3t/repos")
.then(res => res.json())
.then(data => {

const container = document.getElementById("github-projects")

data.slice(0,6).forEach(repo => {

const div = document.createElement("div")

div.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || ""}</p>
<a href="${repo.html_url}">View Repo</a>
`

container.appendChild(div)

})

})
