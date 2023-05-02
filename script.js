const selectImage = document.querySelector('.select-image')
const inputFile = document.querySelector('#file')

selectImage.addEventListener('click',function(){
    inputFile.click();
})

inputFile.addEventListener('change',function(){
    const image = this.files[0]
    console.log(image);
    const reader = new FileReader();
    reader.onload = () => {
        const imgUrl = reader.result;
        const img = document.createElement('img');
        img.src = imgUrl;
    }
    
    reader.readAsDataURL(image)
})
// 12:26