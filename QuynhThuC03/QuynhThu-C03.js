// // Bài 1: Đậu rớt 
// //Cho phép người dùng nhập vào điểm trung bình (ĐTB) cuối khóa của lớp Tư duy và kỹ năng lập trình của một học viên, 
// //hãy xuất ra màn hình kết quả cuối khóa của học viên. Biết rằng: nếu ĐTB >= 5 là “Đậu”, ngược lại là “Rớt”.
// //Quy ước: Dau/Rot

// function bai01(){
//     let ketQua = prompt("Nhap diem trung binh:")
//     if (ketQua >= 5){
//         console.log("Dau")
//     }
//     else{
//         console.log("Rot")
//     }
// }
// bai01()

// Bài 2: Số quyền lực

// Cho phép nhập vào một số nguyên dương x có 3 chữ số. 
// Hãy cho biết x có phải là “số quyền lực” không? Biết “số quyền lực” là số có chữ số hàng trăm là chữ số 9.
// Quy ước: Yes/No

// function bai02(){
//     let soQuyenLuc = prompt("Nhap mot chu so:")
       

//     if (soQuyenLuc >99 && soQuyenLuc %10 == 9){
//         console.log("yes")
//     }

//     else{
//         console.log("No")
//     }
// }

// bai02()


// Bài 3: Tam giác cân
// Cho 3 cạnh của một tam giác. Hãy kiểm tra tam giác này có phải tam giác cân hay không?
// Quy ước: Yes/No

// function bai03(){
//     let canhTamGiac1 = prompt("Nhap canh tam giac dau tien:")
//     let canhTamGiac2 = prompt("Nhap canh tam giac thu hai:")
//     let canhTamGiac3 = prompt("Nhap canh tam giac thu ba:")

//     if (canhTamGiac1 == canhTamGiac2 || canhTamGiac1 == canhTamGiac3 || canhTamGiac2 == canhTamGiac3){
//         console.log("Yes")
//     }
//     else{
//         console.log("No")
//     }
// }
// bai03()

//Bài 4: Tính tiền điện
//Cho phép người dùng nhập vào số kw điện, tính số tiền phải trả. Biết rằng:
//- Nếu số kw < 100 thì tính 2000 đồng/kw.
//- Nếu 100 <= số kw < 200, thì tính 2500 đồng/kw.
//- Nếu số kw từ 200 trở lên thì tính 3500 đồng/kw.

function bai04(){
    let soKwDien = prompt("Nhap so kw dien:")
    if(soKwDien <100){
        return soKwDien*2000
    }
    else{
        if(soKwDien < 200){
            return soKwDien*2500
        }
        else{
            return soKwDien*3500
        }
    }
}
let soTien = bai04()
console.log("So tien la: " + soTien + " nghin dong")




