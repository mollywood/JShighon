var rootContainer = document.getElementById("container")
var navbar = document.createElement("div")
navbar.className="navbar"

var logoText = document.createElement("h2")
var homeLink = document.createElement("a")
var catLink = document.createElement("a")

logoText.innerHTML = "HighOnCoding"
homeLink.innerHTML = "Home"
catLink.innerHTML = "Categories"

navbar.appendChild(logoText)
navbar.appendChild(homeLink)
navbar.appendChild(catLink)
rootContainer.appendChild(navbar)

var featureInfo = document.createElement("div")
featureInfo.className = "featureInfoWrapper"

var featureTitle = document.createElement("div")
featureTitle.className = "featureTitleText"
featureTitle.innerHTML = "Curse of the Current Reviews"

var featureDescription = document.createElement("p")
featureDescription.className = "featureDescriptionText"
featureDescription.innerHTML = "lorem ipsum sit valat dum spiro kdafiajsdfkja waidjf;oai ewjtoiw ajkf oi;aefjewfioaf"

featureInfo.appendChild(featureTitle)
featureInfo.appendChild(featureDescription)
rootContainer.appendChild(featureInfo)

var postWrapper = document.createElement("div")
postWrapper.className = "postWrapper"

var postTitle = document.createElement("h4")
postTitle.className = "postTitle"
postTitle.innerHTML = "Hello Watchkit"

var postInfo = document.createElement("p")
postInfo.className = "postInfo"
postInfo.innerHTML = "lorem ipsum prr prrrr prrrrrrrrrr"

var postSocial = document.createElement("div")
postSocial.className = "postSocial"
postSocial.innerHTML = "12 comments &nbsp &nbsp &nbsp &nbsp 124 likes"

postWrapper.appendChild(postTitle)
postWrapper.appendChild(postInfo)
postWrapper.appendChild(postSocial)
rootContainer.appendChild(postWrapper)

var postWrapper = document.createElement("div")
postWrapper.className = "postWrapper"

var postTitle = document.createElement("h4")
postTitle.className = "postTitle"
postTitle.innerHTML = "Introduction to Swift"

var postInfo = document.createElement("p")
postInfo.className = "postInfo"
postInfo.innerHTML = "lorem ipsum something something"

var postSocial = document.createElement("div")
postSocial.className = "postSocial"
postSocial.innerHTML = "312 comments &nbsp &nbsp &nbsp &nbsp 42 likes"

postWrapper.appendChild(postTitle)
postWrapper.appendChild(postInfo)
postWrapper.appendChild(postSocial)
rootContainer.appendChild(postWrapper)
