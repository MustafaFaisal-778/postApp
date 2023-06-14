
post=document.getElementById("post")

// function unhidePost(){
// post.style.display="block"


// }


textArea=document.getElementById("text-area")
uploadPost=document.getElementById("upload-post")

function upload(){
    // post.style.display="none"
    if(textArea.value.trim()!=""){
      uploadPost.innerHTML+=`
      <div class="upload" id="upload-post">

    <div class="user-on-tag">
        <div class="uesrprofile">
            <!-- <img src="owner.jpg" width="19%" height="9%" alt=""> -->
        </div>
        <div class="user-info">
            <h6>Mustafa Faisal</h6>
            <span>faisalmustafa067@gmail.com</span>
        </div>

    </div>       
    
    <textarea name="text" placeholder="What's on your Mind?" class="towrite" id="" cols="1"
    rows="4">${textArea.value}</textarea>

    </div>`


    }
else{
    alert("write something")
}
textArea.value=""
}