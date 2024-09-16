function sendPaste(){
    // API endpoint URL
    const apiUrl = '/api.php?action=write';

    //check if text is empty
    if (document.getElementById('text-input').value === ""){
        alert("Please enter some text!");
    }else {
        // Data to be sent in the POST request
const postData = {
    input_string: document.getElementById('text-input').value,
};

    // Perform the POST request using the fetch function
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(postData),
    })
        .then(response => response.text())
        .then(data => {
            // Display the response from the API
            console.log('API Response:', data);
            document.getElementById('text-input').value = 'https://qippx.xyz/view?' + data;
        navigator.clipboard.writeText('https://qippx.xyz/view?' + data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}


