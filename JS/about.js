document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from buttons
                document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Hide all content and show active lang content
                const lang = this.getAttribute('data-lang');
                document.querySelectorAll('.lang-content').forEach(content => {
                    content.classList.remove('active');
                    if (content.classList.contains(lang + '-content')) {
                        content.classList.add('active');
                    }
                });
            });
        });