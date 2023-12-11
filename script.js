const gameContainer = document.querySelector(".container")
userResult = document.querySelector(".user_result img")
cpuResult = document.querySelector(".cpu_result img")
result = document.querySelector(".result")
optionImages = document.querySelectorAll(".option_image")
//bu sonuncu classtan birden fazla var ve hepsini seçmek istedik o yüzden querySelectorAll

// console.log(gameContainer, userResult, cpuResult, result, optionImages)


//her resim için döngü
optionImages.forEach((image, index) => {  //her resmi dönerek her resme olay izleyicisi ekledik. 
    /*üstteki kısım, optionImages içindeki her bir öğe için bir döngü 
    oluşturur. Her bir öğe, döngü içinde kullanılacak olan "image" değişkenine 
    atanır. "index" ise o anki öğenin dizindeki konumunu temsil eder */
    image.addEventListener("click", (e)=>{   //eklediğimiz olay dinleyicisi de tıklanıldığında çalışacak
        //e değişkeni, tıklama olayının ayrıntılarını içerir
        image.classList.add("active")

        userResult.src = cpuResult.src = "images/rock.png"   //her turda taş ile başlasınlar
        result.textContent = "Wait..."

        //her resim için tekrar döngü
        optionImages.forEach((image2, index2) =>{
            /*geçerli dizin tıklanan dizinle eşleşmiyorsa
            "aktif" sınıfını diğer resimlerinden kaldır*/
            index !== index2 && image2.classList.remove("active")
            // Seçilen resim dışındaki tüm resimlerden "active" sınıfı kaldırılır
        })
        /* resim öğesine tıklandığında, seçilen resmin üzerine "active" sınıfı eklenir 
        ve diğer resim öğelerinden "active" sınıfı kaldırılır. Böylece, yalnızca 
        tıklanan resim seçili kalır ve diğerleri seçili durumdan çıkarılır. */
        /*
        Amaç,
        Tıklanan resmin üzerine "active" sınıfı eklenir,
        Ardından, iç içe geçmiş ikinci bir döngü ile dizideki diğer resim öğelerine 
        bakılır. Eğer bu resim öğesi, tıklanan resim değilse, üzerinden "active" sınıfı
        kaldırılır. Böylece yalnızca tıklanan resim seçili durumda kalır ve diğerleri 
        seçili durumdan çıkarılır.
        */

        gameContainer.classList.add("start")

        let time = setTimeout(()=>{
        gameContainer.classList.remove("start")
        
        //get the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc  
        /*seçilen imageyi user imageye atadık. userResult adlı <img> elementinin
        src özelliğine, imageSrc değişkenindeki resmin kaynak URL'sini atar. 
        Bu sayede, userResult elementi, belirtilen resmi gösterir.*/
        
        //rastgele sayı oluşturuyoruz
        let random = Math.floor(Math.random()*3) //sonuncusu yani 3 dahil değil!

        //cpu'nun resim seçeneklerini oluşturuyoruz
        let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"]
        cpuResult.src = cpuImages[random]
        /*Bu satır, cpuResult adlı <img> elementinin src özelliğine, rastgele seçilen 
        CPU resminin URL'sini atar. Bu sayede, sayfa üzerinde CPU'nun görüntüsü 
        değiştirilir.*/

        //cpu ya bir harf değeri atıyoruz
        let cpuValue = ["R", "P", "S"][random]

        //user'e bir harf değeri atıyoruz
        let userValue = ["R", "P", "S"][index]
        
        //tüm olası sonuçları içeren bir nesne yazıyoruz
        let outcomes = {
            RR: "draw",
            RP: ":( PC",
            RS: "YOU",
            PP: "draw",
            PR: "YOU",
            PS: ":( PC",
            SS: "draw",
            SR: ":( PC",
            SP: "YOU"
        }

        //kullanıcı ve cpu'nun sonuçları
        let outComeValue = outcomes[userValue + cpuValue]


        result.textContent = userValue === cpuValue 
        ? "Draw" : `${outComeValue} Won !!`

        }, 2125)


    })
})

// son olarak 39.satırdan en alta kadar kesip settimeOut'un içine attık