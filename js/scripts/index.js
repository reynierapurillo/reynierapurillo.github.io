var i = 0;
        var txt = 'Reynier Apurillo'
        var speed = 220
        var isReversing = false;
        var delayBeforeReverse = 5000

        typeWriter();

        function typeWriter() {
            if (!isReversing) {
                if (i < txt.length) {
                    document.getElementById("typewriter").innerHTML += txt.charAt(i);
                    i++;
                } else {
                    isReversing = true;
                    setTimeout(() => {
                        isReversing = false;
                        i--;
                    }, delayBeforeReverse);
                }
            } else {
                if (i >= 0) {
                    document.getElementById("typewriter").innerHTML = txt.substring(0, i);
                    i--;
                } else {
                    i = 0;
                }
            }
            setTimeout(typeWriter, speed);
        }

    var menu = true;
    document.getElementById("toggle-menu").addEventListener('click', (e) => {
        if(menu == true) {
            document.getElementById("f-btn1").style.transform = `translateY(-170%)`
            document.getElementById("f-btn2").style.transform = `translateY(-285%)`
            document.getElementById("f-btn3").style.transform = `translateY(-395%)`
            document.getElementById("f-btn4").style.transform = `translateY(-505%)`
            document.getElementById("f-btn5").style.transform = `translateY(-615%)`
            document.getElementById("f-btn6").style.transform = `translateY(-725%)`
            menu = false;
        }
        else {
                document.getElementById("f-btn1").style.transform = `translateY(0)`
                document.getElementById("f-btn2").style.transform = `translateY(0)`
                document.getElementById("f-btn3").style.transform = `translateY(0)`
                document.getElementById("f-btn4").style.transform = `translateY(0)`
                document.getElementById("f-btn5").style.transform = `translateY(0)`
                document.getElementById("f-btn6").style.transform = `translateY(0)`
                menu = true;
        }
    })
    document.getElementById("f-nav").addEventListener('mouseleave', (e) => {
        document.getElementById("f-btn1").style.transform = `translateY(0)`
        document.getElementById("f-btn2").style.transform = `translateY(0)`
        document.getElementById("f-btn3").style.transform = `translateY(0)`
        document.getElementById("f-btn4").style.transform = `translateY(0)`
        document.getElementById("f-btn5").style.transform = `translateY(0)`
        document.getElementById("f-btn6").style.transform = `translateY(0)`
        menu = true;

    })
    document.getElementById("toggle-menu").addEventListener('mouseover', (e) => {
        document.getElementById("popup-0").style.display = `block`
    })
    document.getElementById("toggle-menu").addEventListener('mouseleave', (e) => {
        document.getElementById("popup-0").style.display = `none`
    })

    document.getElementById("f-btn1").addEventListener('mouseover', (e) => {
        document.getElementById("f-btn1").style.transform = `translateY(-170%) scale(1.2)`
    })
    document.getElementById("f-btn1").addEventListener('mouseleave', (e) => {
        document.getElementById("f-btn1").style.transform = `translateY(-170%)`
    })
    document.getElementById("f-btn1").addEventListener('mouseover', (e) => {
        document.getElementById("popup-1").style.display = `block`
    })
    document.getElementById("f-btn1").addEventListener('mouseleave', (e) => {
        document.getElementById("popup-1").style.display = `none`
    })

    document.getElementById("f-btn2").addEventListener('mouseover', (e) => {
        document.getElementById("f-btn2").style.transform = `translateY(-285%) scale(1.2)`
    })
    document.getElementById("f-btn2").addEventListener('mouseleave', (e) => {
        document.getElementById("f-btn2").style.transform = `translateY(-285%)`
    })
    document.getElementById("f-btn2").addEventListener('mouseover', (e) => {
        document.getElementById("popup-2").style.display = `block`
    })
    document.getElementById("f-btn2").addEventListener('mouseleave', (e) => {
        document.getElementById("popup-2").style.display = `none`
    })

    document.getElementById("f-btn3").addEventListener('mouseover', (e) => {
        document.getElementById("f-btn3").style.transform = `translateY(-395%) scale(1.2)`
    })
    document.getElementById("f-btn3").addEventListener('mouseleave', (e) => {
        document.getElementById("f-btn3").style.transform = `translateY(-395%)`
    })
    document.getElementById("f-btn3").addEventListener('mouseover', (e) => {
        document.getElementById("popup-3").style.display = `block`
    })
    document.getElementById("f-btn3").addEventListener('mouseleave', (e) => {
        document.getElementById("popup-3").style.display = `none`
    })

    document.getElementById("f-btn4").addEventListener('mouseover', (e) => {
        document.getElementById("f-btn4").style.transform = `translateY(-505%) scale(1.2)`
    })
    document.getElementById("f-btn4").addEventListener('mouseleave', (e) => {
        document.getElementById("f-btn4").style.transform = `translateY(-505%)`
    })
    document.getElementById("f-btn4").addEventListener('mouseover', (e) => {
        document.getElementById("popup-4").style.display = `block`
    })
    document.getElementById("f-btn4").addEventListener('mouseleave', (e) => {
        document.getElementById("popup-4").style.display = `none`
    })

    document.getElementById("f-btn5").addEventListener('mouseover', (e) => {
        document.getElementById("f-btn5").style.transform = `translateY(-615%) scale(1.2)`
    })
    document.getElementById("f-btn5").addEventListener('mouseleave', (e) => {
        document.getElementById("f-btn5").style.transform = `translateY(-615%)`
    })
    document.getElementById("f-btn5").addEventListener('mouseover', (e) => {
        document.getElementById("popup-5").style.display = `block`
    })
    document.getElementById("f-btn5").addEventListener('mouseleave', (e) => {
        document.getElementById("popup-5").style.display = `none`
    })

    document.getElementById("f-btn6").addEventListener('mouseover', (e) => {
        document.getElementById("f-btn6").style.transform = `translateY(-725%) scale(1.2)`
    })
    document.getElementById("f-btn6").addEventListener('mouseleave', (e) => {
        document.getElementById("f-btn6").style.transform = `translateY(-725%)`
    })
    document.getElementById("f-btn6").addEventListener('mouseover', (e) => {
        document.getElementById("popup-6").style.display = `block`
    })
    document.getElementById("f-btn6").addEventListener('mouseleave', (e) => {
        document.getElementById("popup-6").style.display = `none`
    })


    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("f-btn6").addEventListener('click', (e) => {
            document.getElementById('about-view').scrollIntoView({behavior: 'smooth' });
        })
        document.getElementById("aboutme-btn").addEventListener('click', (e) => {
            document.getElementById('about-view').scrollIntoView({behavior: 'smooth' });
        })
        document.getElementById("aboutme-nav").addEventListener('click', (e) => {
            document.getElementById('about-view').scrollIntoView({behavior: 'smooth' });
        })
    })
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("f-btn5").addEventListener('click', (e) => {
            document.getElementById('skills-view').scrollIntoView({behavior: 'smooth' });
        })
    })
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("f-btn4").addEventListener('click', (e) => {
            document.getElementById('portfolio-view').scrollIntoView({behavior: 'smooth' });
        })
        document.getElementById("port-nav").addEventListener('click', (e) => {
            document.getElementById('portfolio-view').scrollIntoView({behavior: 'smooth' });
        })
    })
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("f-btn3").addEventListener('click', (e) => {
            document.getElementById('exp-view').scrollIntoView({behavior: 'smooth' });
        })
    })
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("f-btn2").addEventListener('click', (e) => {
            document.getElementById('hobbies-view').scrollIntoView({behavior: 'smooth' });
        })
    })
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("f-btn1").addEventListener('click', (e) => {
            document.getElementById('contact-view').scrollIntoView({behavior: 'smooth' });
        })
        document.getElementById("con-nav").addEventListener('click', (e) => {
            document.getElementById('contact-view').scrollIntoView({behavior: 'smooth' });
        })
    })

    document.getElementById('viewmore-btn').addEventListener('click', (e) => {
        document.getElementById('viewmore-loader').style.display = `block`
        document.getElementById('viewmore-btn').style.display = `none`
    })