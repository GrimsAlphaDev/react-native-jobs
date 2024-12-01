export const checkImageUrl = (url: string) => {
    if (!url) return false;
    else {
        // Opsi 1: Regex yang lebih fleksibel
        const pattern = new RegExp(
            "^https?:\\/\\/.*\\.(?:png|jpg|jpeg|bmp|gif|webp)|.*\\/images\\?",
            "i"
        );

        // Opsi 2: Fungsi dengan pengecekan tambahan
        const isGoogleImageUrl =
            url.includes("encrypted-tbn0.gstatic.com") ||
            url.includes("/images?");

        // Opsi 3: Kombinasi pendekatan
        const isValidImageUrl =
            pattern.test(url) ||
            isGoogleImageUrl ||
            url.match(/\.(png|jpg|jpeg|bmp|gif|webp)/i);


        return isValidImageUrl;
    }
};
