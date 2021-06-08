
///third option
function User(id, name) {
    this.id = Date.now() + id * 10;
    this.name = name;
}

function Post(id, userId, text) {
    this.id = Date.now() + id * 10;
    this.userId = userId;
    this.text = text;
}
//////
function Comment(id, postId, text) {
    this.id = id;
    this.postId = postId;
    this.text = text;
}
//////
const getUsers = (num) => {
    const users = [];
    for (let i = 1; i <= num; i++){
        users.push(createUser(i));
    }
    return users;
}

const createUser = (idx) => {
    return new User (idx, `User ${idx}` )
}

const getPosts = () => {
    const posts = [];
    users.forEach ( (user) => {
        let numPosts = Math.floor(Math.random() * 25)
        for (let i = 1; i< numPosts; i++){
            posts.push( new Post( Date.now() + Math.floor(Math.random() * 100000), user.id, `Text from ${user.name} #${i}` ) )
        }
    } )
    return posts
}


const getComments = () => {
    const comments = [];
    posts.forEach ( (post) => {
        let numComments = Math.floor(Math.random() * 20)
        for (let i = 0; i< numComments; i++){
            comments.push( new Comment( Date.now() + Math.floor(Math.random() * 100000), post.id, `Text from ${post.id} #${i+1} was commented` ) )
        }
    } )
    return comments
}

const renderUsers = () =>{
    const lBlock = document.querySelector('#l')
    lBlock.innerHTML = ''
    users.forEach(user => {
        const card = document.createElement('div')
        card.id = `user_${user.id}`
        card.innerText = user.name
        card.addEventListener('click', onUserClickHandle)
        lBlock.appendChild(card)
    } )
}

const onUserClickHandle = event => {
    console.log(event.target)
    let userId = +event.target.id.split('_')[1]
    const filteredPosts = posts.filter( post => post.userId === userId)
    if (!filteredPosts.length){
        return false;
    }
    renderPosts(filteredPosts)
}

const renderPosts = (fPosts) =>{
    const rBlock = document.querySelector('#r')
    rBlock.innerHTML = ''
    fPosts.forEach(post => {
        const postCard = document.createElement('div')
        postCard.id = `user_${post.id}`
        postCard.innerText = post.text
        postCard.addEventListener('click', onPostClickHandle)
        rBlock.appendChild(postCard)
    } )
}

const onPostClickHandle = event => {
    console.log(event.target)
    let postId = +event.target.id.split('_')[1]
    const filteredComments = comments.filter( comment => (comment.postId === postId))
    if (!filteredComments.length){
        return false;
    }
    renderComments(filteredComments)
}

const renderComments = (fComments) =>{
    const cBlock = document.querySelector('#c')
    cBlock.innerHTML = ''
    fComments.forEach(comment => {
        const commentBlock = document.createElement('div')
        commentBlock.id = `comment_${comment.postId}`
        commentBlock.innerText = comment.text
        cBlock.appendChild(commentBlock)
    } )
}

const users = getUsers(5);
const posts = getPosts();
const comments = getComments();

posts.sort((a,b) => a.id-b.id)

renderUsers();



////add comments to a posts 

/* this is an example how it is has to work */
seems like branching work and I can push all my files to git
