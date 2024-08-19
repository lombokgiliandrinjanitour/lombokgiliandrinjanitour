function order(packageName) {
    const phoneNumber = '62817366355';
    const message = `Halo, saya tertarik untuk memesan ${packageName}.`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}
