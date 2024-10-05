//elem = document.querySelectorAll('.about,' + '.do');
const btnScroll = document.querySelector('.scrollTop');

window.addEventListener('scroll', () => {
    /*for (let i = 0; i < elem.length; i++) {
        var rect = elem[i].getBoundingClientRect();
        if(rect.top + (elem[i].clientHeight/3) < window.innerHeight) elem[i].style.opacity = '1'
        else elem[i].style.opacity = '0'
    }*/

    if (window.scrollY > 0) { btnScroll.classList.add('ok') }
    else { btnScroll.classList.remove('ok') }

    btnScroll.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
})

const uxLi = document.querySelectorAll('.itens-nav-bar .item');
uxLi[1].onclick = () => {
    window.location.href = '#section-about/'
}

uxLi[2].onclick = () => {
    window.location.href = '#section-service/'
}

uxLi[3].onclick = () => {
    window.location.href = '#section-experience/'
}
uxLi[4].onclick = () => {
    window.location.href = '#section-work/'
}
uxLi[5].onclick = () => {
    window.location.href = '#section-contact/'
}

document.querySelector('.intro button').onclick = () => {
    window.location.href = '#section-contact/'
}

document.querySelector('main .section-service>:last-child i').onclick = () => {
    window.location.href = '#section-contact/'
}

document.querySelector('.section-about>:nth-child(2)>:nth-child(2) span button').onclick = () => {
    window.open('./asset/Kina_Joao_Mukumba.pdf', '_blank');
}

const uxWork = document.querySelectorAll('main .section-work>:nth-child(2) div');
uxWork[0].onclick = () => {
    window.open('https://e-commerce-tau-indol.vercel.app/', '_blank');
}
uxWork[2].onclick = () => {
    window.open('https://inotec.it.ao/', '_blank');
}

const ux_social = document.querySelectorAll('.section-social img');
ux_social[0].onclick = () => {
    window.open('https://www.facebook.com/kinajoao.joao.7/', '_blank');
}
ux_social[1].onclick = () => {
    window.open('https://www.instagram.com/kinajoao_official/', '_blank');
}
ux_social[2].onclick = () => {
    window.open('https://www.linkedin.com/in/kina-mukumba-b27495289/', '_blank');
}

const ux_contact = document.querySelectorAll('.contact>:nth-child(2) img');
ux_contact[0].onclick = () => {
    window.open('https://www.facebook.com/kinajoao.joao.7/', '_blank');
}
ux_contact[1].onclick = () => {
    window.open('https://www.instagram.com/kinajoao_official/', '_blank');
}
ux_contact[2].onclick = () => {
    window.open('https://www.linkedin.com/in/kina-mukumba-b27495289/', '_blank');
}

const client = document.querySelectorAll('main .section-client>:nth-child(2) div');
const pass_client = document.querySelectorAll('main .section-client>:nth-child(3) p');


pass_client[0].onclick = () => {
    client[0].style.display = 'flex'
    client[1].style.display = 'none'
    pass_client[1].classList.remove('active')
    pass_client[0].classList.add('active')
}
pass_client[1].onclick = () => {
    client[1].style.display = 'flex'
    client[0].style.display = 'none'
    pass_client[0].classList.remove('active')
    pass_client[1].classList.add('active')
}

var myIndex = 0;
fcarousel();
function fcarousel() {
    for (let i = 0; i < client.length; i++) {
        client[i].style.display = "none"
        pass_client[myIndex].classList.remove('active')
    }
    myIndex++
    if (myIndex > client.length - 1) { myIndex = 0 }
    client[myIndex].style.display = "flex";
    pass_client[myIndex].classList.add('active')
    setTimeout(fcarousel, 10000);
}

const button_send = document.querySelector('.get-sevice button');
const ux_input = document.querySelectorAll('.get-sevice input');
button_send.onclick = (e) => {
    e.preventDefault()
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Formulário enviado com sucesso!",
      showConfirmButton: false,
      timer: 3000
    });
}


for(let i = 0; i <= ux_input.length; i++){
    ux_input[i].oninput = ()=>{
        if(ux_input[0].value.length > 2 
            && validateEmail(ux_input[1].value) 
            && validatePhone(ux_input[2].value) ) 
        {
            button_send.disabled = false;
            button_send.style.opacity = '1'
        }else{
            button_send.disabled = true;
            button_send.style.opacity = '.5'
        }
    }
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) return true; else return false;
}

function validatePhone(telephone){
    if(telephone.length == 9 && telephone.charAt(0) == 9) return true;
    return false;
}