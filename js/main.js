const jsonData = {
    "generators": [
        {
            "id": 1,
            "title": "פגיעה מבעלי חיים",
            "img":"snakeIcon.png",
            "content": "עקיצות, הכשות, נשיכות",
        },
        {
            "id": 2,
            "title": "כאבים",
            "img":"painIcon.png",
            "content": "כאבי בטן,  ראש, אוזניים",
        },
        {
            "id": 3,
            "title": "נפילות",
            "img":"fall.png",
            "content": "שברים, נקעים ופציעות יבשות",
        },
        {
            "id": 4,
            "title": "איבוד הכרה",
            "img":"dizzyIcon.png",
            "content": "הנחיות לפעולה",
        },
        {
            "id": 5,
            "title": "מערכת העיכול",
            "img":"digestSystem.png",
            "content": "הקאות, שלשולים, עצירות",
        },
        {
            "id": 6,
            "title": "כללי",
            "img":"generalIcon.png",
            "content": "שיעול, חום, דימומים שונים",
        },
        {
            "id": 7,
            "title": "כוויות",
            "img":"burnIcon.png",
            "content": "הנחיות לפעולה",
        },
        {
            "id": 8,
            "title": "התחשמלות",
            "img":"flashIcon.png",
            "content": "הנחיות לפעולה",
            
       
        },
        {
            "id": 9,
            "title": "החייאה",
            "img":"cprIcon.png",
            "content": " החייאה מצילה חיים",
           
          
        },   
        {
            "id": 10,
            "title": "חנק",
            "img":"chokedIcon.png",
            "content": "למידה ותרגול של טיפול בחנק",
        },
    ]
}
document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementById("searchBtn").addEventListener("click", function() {
            var searchText = document.getElementById("searchBox").value.toLowerCase(); 
            var cards = document.querySelectorAll(".card");

     // שורת חיפוש
            cards.forEach(function(card) {
                var title = card.querySelector(".card-title");
                var content = card.querySelector(".card-content");

              
                title.innerHTML = title.innerHTML.replace(/<mark>/g, "").replace(/<\/mark>/g, "");
                content.innerHTML = content.innerHTML.replace(/<mark>/g, "").replace(/<\/mark>/g, "");
            });

           
            cards.forEach(function(card) {
                var title = card.querySelector(".card-title").innerText.toLowerCase();
                var content = card.querySelector(".card-content").innerText.toLowerCase();

                // מחפשים אם הטקסט של החיפוש נמצא בכותרת או בתוכן של הכרטיס
                if (title.includes(searchText)) {
                    card.querySelector(".card-title").innerHTML = title.replace(new RegExp(searchText, 'gi'), "<mark>$&</mark>");
                }
                if (content.includes(searchText)) {
                    card.querySelector(".card-content").innerHTML = content.replace(new RegExp(searchText, 'gi'), "<mark>$&</mark>");
                }
            });
        });
    jsonData.generators.forEach(g => {
        const itemsContainer= document.getElementById("itemsContainer");
        itemsContainer.setAttribute("class","row g-3");
        const myCard=document.createElement("div");
        myCard.setAttribute("class","card col-6 col-md-2 p-3");
 

        const myImg=document.createElement("img");
        myImg.setAttribute("src", `img/${g.img}`);

        const myTitle = document.createElement("h5");
        myTitle.setAttribute("class","card-title");
        myTitle.innerHTML= g.title;

        const myContent = document.createElement("p");
        myContent.setAttribute("class", "card-content");
        myContent.innerHTML = g.content;

        const myBtn = document.createElement("button");
        myBtn.setAttribute("class", "btn");
        myBtn.innerHTML = "למידע נוסף";
     
        myCard.appendChild(myTitle);
        myCard.appendChild(myImg);
        myCard.appendChild(myContent);
        myCard.appendChild(myBtn);
        itemsContainer.appendChild(myCard);


        const scrollToTopBtn = document.getElementById("scrollToTop");

        // הצגת הכפתור לאחר גלילה מסוימת
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });

        // גלילה לראש העמוד
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
// איפוס שורת החיפוש
        const searchBox = document.getElementById("searchBox");
        const resetBtn = document.getElementById("resetBtn");

        resetBtn.addEventListener("click", () => {
            searchBox.value = ""; 
            searchBox.focus();    
        });
    });


    
   // יצירת כפתור להורדת הטופס
    const buttonContainer = document.getElementById("buttonContainer");

    // יצירת כפתור
    const downloadButton = document.createElement("a");
    downloadButton.setAttribute("href", "FilesToDownload/firstAidList.pdf");
    downloadButton.setAttribute("download", "רשימת_עזרה_ראשונה.pdf");
    downloadButton.classList.add("btn", "btn-primary");
    downloadButton.textContent = "להורדה לחצו כאן";

   
    buttonContainer.appendChild(downloadButton);
    const downloadBtn = document.getElementById("downloadButton");
    const successMessage = document.getElementById("success");

    downloadButton.addEventListener("click", () => {
        // הצגת ההודעה
        successMessage.style.display = "block";

        // הסתרת ההודעה לאחר 3 שניות
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
   
});

function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

