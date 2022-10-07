    //Hien thi tat ca hinh anh
let images = document.getElementsByTagName('img')
let viTri = 0
images[viTri].style.display = "block"
console.log(images)

    //Ham dung de chon hinh anh hien thi
function displayImg(index){
        images[index].style.display = "block"
}
displayImg(index)

    //Ham dung de an di hinh anh phia truoc = hien thi slide truoc do
function hienThiSlideTruocDo(){
    images[viTri].style.display = "none"
    viTri = viTri - 1
    displayImg(viTri)
}

    //Ham dung de an di hinh anh phia sau = hienThiSlideKeTiep
function hienThiSlideKeTiep(){
    images[viTri].style.display = "none"
    
    if(viTri === images.length -1) {   //Neu vi tri la vi tri cuoi cung thi hien thi hinh anh dau tien
        viTri =0
    }
    else{              //Neu vi tri khong phai la vi tri cuoi cung thi hien thi hinh anh ke tiep
        viTri++ 
    }
    displayImg(viTri)
}



