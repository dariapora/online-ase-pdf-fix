window.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    const url = link.href.toLowerCase();
    if (url.includes('.pdf') || 
        url.includes('pluginfile.php') || 
        url.includes('/mod_resource/') ||
        url.includes('mod/resource/view.php')) {
      
        e.preventDefault();
        e.stopPropagation();

        window.open(link.href, '_blank');
    }
}, true);