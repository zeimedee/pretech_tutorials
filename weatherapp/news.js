let api = `https://newsapi.org/v2/everything?q=farming&pageSize=10&apiKey=4aa669e66c8d41ed8558b0d161f071c7`


let news_items = document.getElementById("news-item")


const createStory = (title, snippet, author, date, imageurl) => {
    let story = document.createElement('div')
    story.className = 'story'

    let pic = document.createElement('div')
    let img = document.createElement('img')
    img.src = imageurl

    pic.className = 'pic'
    pic.append(img)

    let details = document.createElement('div')
    details.className = 'details'


    let col1 = document.createElement('div')
    col1.className = 'col-1'
    let titles = document.createElement('span')
    titles.innerHTML = title
    let icon = document.createElement('img')
    icon.src = './images/bookmark.svg'
    col1.append(titles,icon)

    let col2 = document.createElement('div')
    col2.className = 'col-2'
    let snippets = document.createElement('span')
    snippets.innerHTML = snippet
    col2.append(snippets)

    let col3 = document.createElement('div')
    col3.className = 'col-3'
    let authors = document.createElement('span')
    authors.innerHTML = author
    col3.append(authors)

    let col4 = document.createElement('div')
    col4.className = 'col-4'
    let dates = document.createElement('span')
    dates.innerHTML = date
    col4.append(dates)

    details.append(col1,col2,col3,col4)

    story.append(pic,details)
    news_items.append(story)
}




fetch(api).then(
    res => res.json()
).then(
    (res)=>{
        console.log(res)
        res.articles.map((data)=>{
        createStory(data.title, data.description, data.author, data.publishedAt, data.urlToImage)
            
        })
    }
).catch((err)=>{
    console.log("-----errors: "+ err)
})