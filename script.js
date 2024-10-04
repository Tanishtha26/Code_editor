alert("Code Editor for Web Development: Output Visible easily without much hassle!")
alert("enjoy! :D")
function showTab(tabName) {
    const editors = document.querySelectorAll('.editor');
    editors.forEach(editor => editor.style.display = 'none');

    // Show the selected editor and ensure the container is visible
    document.getElementById(`${tabName}-editor`).style.display = 'block';
    document.querySelector('.editor-container').style.display = 'block';
}

// Default to show HTML tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('html');
});

function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const outputFrame = document.getElementById('output-frame');

    // Create a new document in the iframe
    const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    outputDoc.open();
    outputDoc.write(`
        <style>${cssCode}</style>
        ${htmlCode}
        <script>${jsCode}</script>
    `);
    outputDoc.close();
}