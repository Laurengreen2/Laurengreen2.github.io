// RESPONSIVE NAV BAR
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// MODAL POPUP
function modalPop() {

    // Get the modal
    var modal = document.getElementById("modal");

    // Get the button that opens the modal
    var btn = document.getElementById("modal-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

setTimeout(modalPop, 2000);


// CONTACT FORM VALIDATION 

setTimeout(function () {

    // On click of the submit button, run validation
    var submitBtn = document.getElementById('submit');

    submitBtn.addEventListener("click", function () {
        // Validate the name does not contain numbers, but only letters
        var hasNumber = /\d/;
        var name = document.getElementById('name');
        if (hasNumber.test(name.value) === true) {
            name.setCustomValidity("Name may contain ONLY letters.");
            name.classList.add("invalid");
            var nameCheck = name.reportValidity();

        } else {
            name.setCustomValidity("");
            name.classList.add("valid");
        };

        // Prevent the form from submitting if all validations do not pass 
        if (nameCheck === false) {
            event.preventDefault();
        }
    });

}, 1000);
