const signUpForm = document.querySelector('.signup-form form');
const uploadForm = document.querySelector('.upload-form form');
const quizList = document.getElementById('quiz-list');

// Add event listener for signing up
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = signUpForm.querySelector('input[name="username"]').value;
    const email = signUpForm.querySelector('input[name="email"]').value;
    // You can implement user registration logic here
    console.log(`Signed up: Username: ${username}, Email: ${email}`);
    signUpForm.reset();
});

// Add event listener for uploading documents
uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = uploadForm.querySelector('input[type="file"]');
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
        // You can implement file upload logic here
        console.log(`Uploaded file: ${selectedFile.name}`);
        uploadForm.reset();
    }
});

// Add event listener for quiz selection
quizList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const selectedQuiz = event.target.textContent;
        // You can implement quiz loading logic here
        console.log(`Selected quiz: ${selectedQuiz}`);
    }
});
