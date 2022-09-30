// // bai 01 //
const person = {
    ten: "Thu",
    namsinh: 1998,
}
console.log(person.ten);
console.log(2022-person.namsinh);

// // bai 02 //
let area = [2,6,0,1,9,8]
console.log(area[5])

// //bai 03 //
let t = prompt("Nhap ten?")
let x = prompt("Nhap nam sinh?")
console.log("Xin chào, mình tên là:" + t)
console.log("Mình sinh năm:"+x)
console.log("Rất vui được gặp bạn.")

// //bai 04//
console.log("Xin chào, mình tên là:" + prompt("Nhap ten?"))
console.log("Mình sinh năm:" + prompt("Nhap nam sinh"))
console.log("Rất vui được gặp bạn.")

// //bai 05//
console.log("Xin chào, mình tên là:" + prompt("Nhap ten?"))
console.log("Mình sinh năm:" + prompt("Nhap nam sinh"))
console.log("Rất vui được gặp bạn.")

// //bai 06//
function gioithieu(){
    let name= prompt("Nhap ten cua ban?")
    let namsinh= prompt("Nhap nam sinh cua ban")
    console.log("Xin chào, mình tên là: " + name)
    console.log("Mình sinh năm: " + namsinh)
}
    gioithieu()

//bai 07//

function inputF() {
    const doF = prompt("Nhap do F:");
    return doF;
}

function degreeConvert() {
    abc = inputF();
    const doC = 5/9*(abc-32);
    console.log("Nhiet do C la:" + doC)
}

degreeConvert()

//bai 08//

function calculator(){
    console.log("Dien tich hinh chu nhat la:" + prompt("Nhap chieu cao")*prompt("Nhap chieu dai"))
}
calculator()

// bai 9//


function average(toan, ly, sinh, anh){
    let toan = prompt("Nhap diem Toan:")
    let ly = prompt("Nhap diem ly")
    let sinh = prompt("Nhap diem sinh")
    let anh = prompt("Nhap diem anh")
    console.log("Điểm trung bình là:" + average(toan,ly,sinh, anh))
}
average()





