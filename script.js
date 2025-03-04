function scrollToContent() {
    document.getElementById('container').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}