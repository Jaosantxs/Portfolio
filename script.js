// ===== NAVEGAÇÃO SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ATUALIZAR LINK ATIVO NA NAVEGAÇÃO =====
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== FORMULÁRIO DE CONTATO =====
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegar valores do formulário
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Validar campos
    if (name && email && message) {
        // Mostrar mensagem de sucesso
        alert(`Obrigado ${name}! Sua mensagem foi enviada com sucesso.\n\nEm breve entraremos em contato no email: ${email}`);
        
        // Limpar formulário
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// ===== EFEITO DE DIGITAÇÃO NO TÍTULO =====
const titleElement = document.querySelector('.hero h1');
const originalText = titleElement.innerHTML;
titleElement.innerHTML = '';

let index = 0;
function typeTitle() {
    if (index < originalText.length) {
        titleElement.innerHTML += originalText[index];
        index++;
        setTimeout(typeTitle, 50);
    }
}

// Iniciar efeito quando a página carrega
window.addEventListener('load', () => {
    setTimeout(typeTitle, 500);
});

// ===== BOTÕES COM FEEDBACK =====
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Criar efeito de ripple
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== ANIMAÇÃO DE RIPPLE =====
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== SCROLL REVEAL PARA CARDS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    observer.observe(card);
});

// ===== CONSOLE LOG DE BOAS-VINDAS =====
console.log('%c🎨 Bem-vindo ao Portfólio de João Pedro!', 'font-size: 20px; color: #00d9ff; font-weight: bold;');
console.log('%cEste é um portfólio simples feito com HTML, CSS e JavaScript puro.', 'font-size: 14px; color: #b0b0b0;');
console.log('%cSinta-se livre para customizar e adicionar suas próprias funcionalidades!', 'font-size: 14px; color: #ff006e;');
