document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('articleForm');
    const messageDiv = document.getElementById('message');
    const articleDisplay = document.getElementById('articleDisplay');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const content = document.getElementById('content').value.trim();

        if (title && author && content) {
            // Membuat elemen artikel baru
            const article = document.createElement('article');
            article.innerHTML = `
                <h3>${title}</h3>
                <p><strong>Penulis:</strong> ${author}</p>
                <p>${content}</p>
            `;

            // Menambahkan artikel baru di awal tanpa menghapus artikel sebelumnya
            articleDisplay.insertBefore(article, articleDisplay.firstChild);

            // Menampilkan pesan sukses
            messageDiv.textContent = 'Artikel berhasil ditambahkan!';
            messageDiv.style.backgroundColor = '#dff0d8';
            messageDiv.style.color = '#3c763d';
            messageDiv.style.border = '1px solid #d6e9c6';

            // Reset form
            form.reset();
        } else {
            // Menampilkan pesan error
            messageDiv.textContent = 'Mohon isi semua field!';
            messageDiv.style.backgroundColor = '#f2dede';
            messageDiv.style.color = '#a94442';
            messageDiv.style.border = '1px solid #ebccd1';
        }

        // Menampilkan pesan
        messageDiv.style.display = 'block';
        
        // Menghilangkan pesan setelah 3 detik
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    });
});