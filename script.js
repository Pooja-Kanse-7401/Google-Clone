// Drop Box
function drop(){
    document.querySelector("#drop").style.display = "block";  
}


// Search Function

async function search() {
    let searchTo = document.querySelector("#search").value;
    const url = `https://google-search72.p.rapidapi.com/search?q=${searchTo}&gl=us&lr=lang_en&num=10&start=0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '85c1b2122dmsh7f4a4a2bfbc1d2cp1fe88ejsn85dcedf40e41',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const mainData = result.items;
        // console.log(result);

        mainData.map((res, index) => {

            document.querySelector("#google-search").innerHTML += `

                <a href="${res.link}"><h5>${res.title}</h5></a>
                <p>${res.htmlTitle}</p>

            `
        })

    } catch (error) {
        console.error(error);
    }

    document.querySelector("#home").style.height = "100vh"
    document.querySelector("#top").style.display = "block"
    document.querySelector("#google").style.display = "none"
    document.querySelector("#buttons").style.display = "none"
}


async function imageSearch() {
    let searchTo = document.querySelector("#search").value;

    const url1 = `https://google-search72.p.rapidapi.com/imagesearch?q=${searchTo}&gl=us&lr=lang_en&num=10&start=0`;
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '85c1b2122dmsh7f4a4a2bfbc1d2cp1fe88ejsn85dcedf40e41',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
    };

    try {
        const response1 = await fetch(url1, options1);
        const result1 = await response1.json();
        // console.log(result1);
        const data = result1.items;

        data.map((res, index) => {

            document.querySelector("#images").innerHTML += `
                
                    <div class="image-result w-25">
                        <img style="width: 15vw; height: 20vh;"  src="${res.thumbnailImageUrl}" alt="">
                        <a href="${res.originalImageUrl}"><p>${res.title}</p></a>
                        <a href="${res.contextLink}"><p>Know more .....</p></a>
                    </div>   

                `
        })
    } catch (error) {
        console.error(error);
    }

    document.querySelector("#google-search").style.display = "none"

}


// Setting DropDown

let show = document.querySelector("#main-setting")
show.addEventListener("click", function (event) {
    // event.preventDefault()
})
function showMenu(event) {
    document.querySelector("#settings").style.display = "block";
}



// Feedback Form

function sendFeedback() {
    let send = document.querySelector(".close-feedback");
    send.innerHTML += `
    <div id="feedback" class="d-flex flex-column justify-content-between">

    <form action="https://formspree.io/f/xgegpaye" method="POST">
    <i class="fa-regular fa-circle-xmark" class="close-feedback" onclick="closeForm();"></i>
    <h3>Send feedback to Google</h3>
        <h5>Describe your feedback</h5>
        <textarea name="text" id="text" cols="30" rows="5"></textarea>
        <p>Please don't onclude any sensitive information <i
                class="fa-regular fa-circle-question"></i></p>

        <span class="d-flex pt-5">
            <input type="checkbox">
            <p>We may email you for more information or updates</p>
        </span>
        <p class="text-small">Some <a href="">account and system information</a>
            may be sent to Google. We will use it to fix problems and improve
            our services, subject to our <a
                href="https://policies.google.com/privacy?hl=en-GB">Privacy
                Policy</a> and <a
                href="https://policies.google.com/terms?hl=en_in">Terms of
                Service</a>. We may email you for more information or updates.
            Go to <a
                href="https://support.google.com/legal/answer/3110420?hl=en-IN&authuser=0">Legal
                Help</a> to ask for content changes for legal reasons.
        </p>
        <button class="btn btn-secondary">Send</button>
        </form>

    </div>
    `
   
}

// Close Feedback Form

function closeForm() {
    let closeFeedback = document.querySelector(".close-feedback");
    closeFeedback.style.display = "none";
    location.reload();
    // alert("close");
}



// Dark Theme

function darkTheme() {
    let dark = document.querySelector('#dark')
    document.body.classList.toggle("dark-theme");
    var theme;
    if (document.body.classList.contains("dark-theme")) {
        dark.innerHTML = `Dark Theme : ON`
        theme == "DARK"
        localStorage.setItem("darkMode", "ON");
    }
    else {
        dark.innerHTML = `Dark Theme : OFF`
        theme == "LIGHT"
        localStorage.setItem("darkMode", "OFF");
    }
}

let darkModeOn = localStorage.getItem('darkMode');
// console.log("Dark mode : ", darkModeOn)

if (darkModeOn == "ON") {
    document.body.classList = "dark-theme";
    // alert("dark")
}



// function handleMainClick(){

//     alert('Hello')
// }