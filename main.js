document.querySelector('.resume-btn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'Saurabh.Resume.pdf';  // your file name
    link.download = 'Saurabh.Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});