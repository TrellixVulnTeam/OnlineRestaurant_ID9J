// const [like, setLike] = useState(post.like)
//     const [isLiked, setIsLiked] = useState(false)

//     const likeHandler = () => {
//         setLike(isLiked ? like - 1 : like + 1)
//         setIsLiked(!isLiked)
//     }


var cartcounter = 0;

function printCartCounter()
{
  document.getElementById("CartCounter").innerHTML= cartcounter + " items in the Cart | Checkout &rarr;";
}

function cart() {
    cartcounter++;
    printCartCounter();
}

function order() {
  alert("Your order is confirmed!");
}