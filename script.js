const videoElement = document.getElementById('video');
const button = document.getElementById('button');
async function selectmediastream(){
    try{
     const mediastream = await navigator.mediaDevices.getDisplayMedia();
     videoElement.onloadedmetadata = () =>{
        videoElement.onplay();
     }
    }catch(error){

    }
    button.addEventListener('click', async() =>{
        button.Disabled = true;
        await videoElement.requestPictureinPicture();
        button.Disabled = false;
    });
    selectmediastream();
}
