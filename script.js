let modeToggle = document.getElementById("checkbox")
modeToggle.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark");
  });

  function handleForm() {
    const form = document.getElementsByTagName("form")[0];
    const button = document.getElementById("create");
    const inputs = document.querySelectorAll(".form input");
    const pass1 = document.getElementById("password");
    const pass2 = document.getElementById("confirm_pass");

    // Button Click Event Listener
    button.addEventListener('click', () => {
        // Validate All Inputs
        form.classList.add('validate');
        // Remove Old Messages
        const valid = form.querySelectorAll('input:valid');
        for (let i = 0; i < valid.length; i++) {
            const label = valid[i].parentElement;
            const div   = label.getElementsByTagName('div')[0];
            if (typeof div !== 'undefined') {
                label.removeChild(div);
            }
        }

        // Create New Messages
        const invalid = form.querySelectorAll('input:invalid');
        for (let i = 0; i < invalid.length; i++) {
            const label = invalid[i].parentElement;
            const div   = label.getElementsByTagName('div')[0];
            if (typeof div === 'undefined') {
                const error = document.createElement('div');
                error.innerText = label.title;
                label.appendChild(error);
            }
        }

        // Match Passwords
        if (pass1.value !== pass2.value) {
            pass2.setCustomValidity('Passwords Must Match');
            pass2.reportValidity();
        } else {
            pass2.setCustomValidity('');
        }
    });

    // Input Blur Event Listener
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', (e) => {
            // Validate this Input
            e.target.classList.add('validate');
            const label = inputs[i].parentElement;
            const div   = label.getElementsByTagName('div')[0];
            if (e.target.validity.valid) {
                // Remove Old Message
                if (typeof div !== 'undefined') {
                    label.removeChild(div);
                }
            } else {
                // Create New Message
                if (typeof div === 'undefined') {
                    console.log(label.title);
                    const error = document.createElement('div');
                    error.innerText = label.title;
                    label.appendChild(error);
                }
            }
        });
    }

    // Form Submit Event Listener
    form.addEventListener('submit', () => {
        alert('Form Submitted');
    });
}
window.addEventListener('DOMContentLoaded', () => {
    handleForm();
});