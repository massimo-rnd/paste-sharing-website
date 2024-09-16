function showPaste(){
    retrievePaste(getVariableFromURL());
}
function getVariableFromURL() {
            var query = window.location.search.substring(1);
            
            // Check if there is any query parameter
            if (query) {
                return decodeURIComponent(query);
            } else {
                console.log('No variable found in the URL');
                return null;
            }
        }

function retrievePaste(keylink) {
            // Replace with the actual URL of your PHP script
            var phpScriptUrl = '/api.php?action=read';

            // Construct the URL with the keylink parameter
            var url = phpScriptUrl + '&keylink=' + encodeURIComponent(keylink);

            // Make the GET request
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(pastetext => {
                    // Handle the retrieved pastetext
                    console.log('Retrieved pastetext:', pastetext);
                    document.getElementById('paste-text').value = pastetext;
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error during GET request:', error.message);
                });
        }