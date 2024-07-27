document.addEventListener("DOMContentLoaded", function() {
    let from_name = document.getElementById("from_name");
    let email = document.getElementById("email");
    let budget = document.getElementById("budget");
    let desc = document.getElementById("desc");
    let submit = document.getElementById("submit");

    submit.addEventListener('click', () => {
        if (
            from_name.value == "" ||
            email.value == "" ||
            budget.value == "" ||
            desc.value == ""
        ) {
            alert("All fields are required");
            return;
        } else {
            submitEmail();
        }
    });

    function submitEmail() {
        let param = {
            from_name: from_name.value,
            emailid: email.value,
            budget: budget.value,
            desc: desc.value,
        };
        let serviceId = 'service_w1pci6o';
        let templateId = 'template_cwjw289';
        emailjs.send(serviceId, templateId, param).then(
            function(response) {
                alert("SUCCESS! email sent " + response.text);
                resetForm();
            },
            function(error) {
                alert("FAILED... " + error);
            }
        );
    }

    function resetForm() {
        from_name.value = "";
        email.value = "";
        budget.value = "";
        desc.value = "";
    }

    // document.querySelector("form").addEventListener("submit", (e) => {
    //     e.preventDefault();
    // });
});
