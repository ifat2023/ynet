const newFetch = fetch(`https://newsapi.org/v2/top-headlines?sources=ynet&apiKey=51a1f1de53944e58be88f2d96e98efa6`)
.then (res => res.json())
.then (data => data)


async function disPlayNews(){
const data = await newFetch

console.log (data)
const container = document.querySelector(".container")
console.log(container)
container.innerHTML = data.articles.map((article) => {
    return `
    <div class="card">
        <h2>${article.title}</h2>
        <h4>${article.title}</h4>
        <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read on Ynet</a>
        </div>
    `
}).join("")

}

disPlayNews()
