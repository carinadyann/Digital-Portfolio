//contact
function copyFunction() {
    // Get the text field
    var copyText = document.getElementById("emailId").innerHTML;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert('"' + copyText + '" was copied to your clipboard');
}
