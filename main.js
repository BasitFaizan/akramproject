let imageArr = ["https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image1.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image2.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image3.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image4.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image5.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image6.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image7.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image8.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image9.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image10.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image11.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image12.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image13.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image14.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image15.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image16.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image17.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image18.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image19.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image20.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image21.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image22.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image23.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image24.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image25.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image26.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image27.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image28.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image29.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image30.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image31.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image32.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image33.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image34.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image35.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image36.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image37.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image38.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image39.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image40.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image41.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image42.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image43.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image44.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image45.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image46.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image47.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image48.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image49.jpg", "https://i0.wp.com/ssbprep.com/wp-content/uploads/2020/04/TAT-practice-sample-image50.jpg"]

let clickable = document.querySelector('.clickable')
let popUpImages = document.querySelector('.popUpImages')
function showImagePopup() {
    let randomNumber = Math.floor(Math.random() * imageArr.length) + 1;
    console.log(randomNumber);
    popUpImages.src = imageArr[randomNumber]

    // Close the popup after 30 seconds
    setTimeout(function () {
        popUpImages.style.display = "none";
        startTimer(5, 0); // Start the 5-minute timer
    }, 30000);
}

function startTimer(minutes, seconds) {
    let timerContainer = document.getElementById("timerContainer");
    let timerDisplay = document.getElementById("timerDisplay");
    timerContainer.style.display = "block";

    let totalTime = minutes * 60 + seconds;
    let interval = setInterval(function () {
        minutes = Math.floor(totalTime / 60);
        seconds = totalTime % 60;

        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (totalTime <= 0) {
            clearInterval(interval);
            timerContainer.style.display = "none";
        }

        totalTime--;
    }, 1000);
}

clickable.addEventListener('click', showImagePopup)